const { regClass, property } = Laya;
import { MainGameModel, DropRule } from "./MainGameModel"
import { MainGameRTBase } from "./MainGameRT.generated";

@regClass()

/**
 * 本示例采用非脚本的方式实现，而使用继承页面基类，实现页面逻辑。在IDE里面设置场景的Runtime属性即可和场景进行关联
 * 相比脚本方式，继承式页面类，可以直接使用页面定义的属性（通过IDE内var属性定义），比如this.tipLbll，this.scoreLbl，具有代码提示效果
 * 建议：如果是页面级的逻辑，需要频繁访问页面内多个元素，使用继承式写法，如果是独立小模块，功能单一，建议用脚本方式实现，比如子弹脚本。
 */
export default class MainGameRT extends MainGameRTBase {
    /**游戏控制脚本引用，避免每次获取组件带来不必要的性能开销 */
    private _model: MainGameModel;

    /**当前游戏时间字段 */
    private _time: number;
    /**是否已经开始游戏 */
    private _started: boolean = false;
    /**是否停止每帧更新 */
    private _updateStop: boolean = false;
    /**点击数量 */
    private _clickIndex: number = 0;

    private soundChannel: Laya.SoundChannel;

    private _bPlayingShow: boolean = false;

    constructor() {
        super();

        //关闭多点触控，否则就无敌了
        // Laya.MouseManager.multiTouchEnabled = false;
    }

    onEnable(): void {
        this._model = this.getComponent(MainGameModel);
        
        //帧听舞台事件，当失去焦点后，停止每帧更新
        Laya.stage.on(Laya.Event.BLUR, this, () => { this._updateStop = true });
        //当恢复鼠标焦点后，恢复每帧更新
        Laya.stage.on(Laya.Event.FOCUS, this, () => { this._updateStop = false });
        
        //点击提示文字，开始游戏
        this.startBtn.on(Laya.Event.CLICK, this, this.onstartBtnClick);

        //添加update
        Laya.timer.frameLoop(1, this, this.onUpdate)
    }

    onstartBtnClick(e: Laya.Event): void {
        this.startGame();
    }

    onUpdate(): void {
        //避免由于切到后台后还在更新
        if (this._updateStop || !this._started) return;

        let deltaTime = Laya.timer.delta
        this._time += deltaTime;

        this.updateTime();
        this.tryDrop();
        this.CheckShowAnimation(deltaTime);
    }

    /**刷新时间 */
    updateTime(): void {
        let time = Math.floor(this._time/1000) - 1;
        if (time > 16){
            time = 16;
        }
        if (time < 0){
            time = 0;
        }
        this.timeTxt.text = time + "秒";
    }

    /**尝试掉落容器 */
    tryDrop(): void {
        
        let item = this._model.createDropItem(this._time, ()=>{this.OnDropClick();}, ()=>{this.OnDropFail();});
        if (item != null){
            this.mainBox.addChild(item);
        }
    }

    /**开始游戏 */
    startGame(): void {
        if (!this._started) {
            this._started = true;
            this._model.enabled = true;
            this._model.startGame();

            this._time = 0;
            this._clickIndex = 0;
            this.timeTxt.text = "";
            this.mainBox.visible = true;
            this.readyBox.visible = false;
        }
    }

    /**停止游戏 */
    stopGame(): void {
        this._started = false;
        this._model.enabled = false;

        this.mainBox.visible = false;
        this.readyBox.visible = true;
        // this.mainBox.removeChildren();
        // Laya.Pool.clearBySign("DropItem");
    }

    OnDropClick(): void {
        if (this._started) {
            let rule: DropRule = this._model.getRule(this._clickIndex);
            if (rule != null){
                if (this.soundChannel != null){
                    Laya.SoundManager.removeChannel(this.soundChannel);
                }
                Laya.SoundManager.soundVolume = 0.5;
                this.soundChannel == Laya.SoundManager.playSound("resources/audio/"+ rule.sound +".m4a")
            }

            this._clickIndex += 1;
            if (this._clickIndex == this._model.getRuleLength()){
                this.GameSuccess();
            }
        }
    }

    OnDropFail(): void {
        if (this._started) {
            this.stopGame()
        }
    }

    GameSuccess(): void {
        Laya.SoundManager.playMusic("resources/audio/BGM.m4a");
        this.mainBox.visible = false;
        this.readyBox.visible = false;
        this.topBox.visible = false;
        this.showBox.visible = true;

        this.show1.visible = true;
        Laya.timer.once(1000, this, () => {
            this.show1.getComponent(Laya.Animator2D).play();
        });
        this._bPlayingShow = true
    }

    private _playShow1Time: number = 6000
    private _playShow2Time: number = 9000;

    CheckShowAnimation(deltaTime: number): void {
        if (this._bPlayingShow) {
            if (this._playShow1Time > 0){
                this._playShow1Time -= deltaTime;

                if (this._playShow1Time <= 0){
                    this.show1.visible = false;
                    this.show2.visible = true;
                    this.show2.getComponent(Laya.Animator2D).play();
                }
                return;
            }

            if (this._playShow2Time > 0){
                this._playShow2Time -= deltaTime;

                if (this._playShow2Time <= 0){
                    this.show2.visible = false;
                    this.show3.visible = true;
                }
                return;
            }
        }
    }
}