const { regClass, property } = Laya;
/**
 * 掉落盒子脚本，实现盒子碰撞及回收流程
 */
@regClass()
export default class DropComponent extends Laya.Script {
    /**
     * 1：发财
     * 0：其他任意牌
     */
    private _type: number = 0; 
    private _speed: number = 0; 
    private clickCall: Function;
    private failCall: Function;

    private clickBtn: Laya.Button

    constructor() { super(); }
    onEnable(): void {
        /**获得组件引用，避免每次获取组件带来不必要的查询开销 */
        this.clickBtn = this.owner.getChildByName("Button") as Laya.Button;
        this.clickBtn.on(Laya.Event.CLICK, this, this.onBtnClick);
    }

    onUpdate(): void {
        if (!this.enabled) return;

        // 让item持续下落，从开始到掉出屏幕外的时间固定
        var owner = this.owner as Laya.Box;
        
        owner.y += Laya.stage.height / this._speed * Laya.timer.delta;

        // 是否已经落出底部
        if (owner.y > Laya.stage.height){
            // owner.removeSelf();

            if (this.failCall != null) {
                this.failCall();
            }
        }
    }

    onDisable(): void {
        //盒子被移除时，回收盒子到对象池，方便下次复用，减少对象创建开销。
        Laya.Pool.recover("DropItem", this.owner);
    }

    onBtnClick(e: Laya.Event): void {
        var owner: Laya.Box = this.owner as Laya.Box;

        if (this.clickCall != null) {
            this.clickCall();
        }
        this.enabled = false;
        owner.removeSelf();
    }

    /**初始化容器 */
    InitItem(_type: number, clickCall: Function, failCall: Function, _width: number, _height: number, _speed: number): void {
        this._type = _type;
        this._speed = _speed;
        this.clickCall = clickCall;
        this.failCall = failCall;

        let owner = this.owner as Laya.Box;
        owner.width = _width;
        owner.height = _height;

        this.enabled = true
    }
}