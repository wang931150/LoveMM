const { regClass, property } = Laya;
import DropComponent from "../prefab/DropComponent"

export class DropRule {
    time: number;
    sound: string;
    bCancel: boolean;

    constructor(time: number, sound: string, bCancel: boolean = true) {
        this.time = time;
        this.sound = sound;
        this.bCancel = bCancel;
    }
}

@regClass()
export class MainGameModel extends Laya.Script {
    /** @prop {name:dropBox,tips:"掉落容器预制体对象",type:Prefab}*/
    @property({ type: Laya.Prefab })
    dropItem: Laya.Prefab;
    @property({ type: "number" })
    /**一排放几个 */
    count: number = 4;
    @property({ type: "number" })
    /**下落速度 */
    speed: number = 2;

    /**容器尺寸 */
    itemSize: number[] = [293, 341];
    /**容器下落时间 */
    dropTimes: number[] = [];

    bPlayBGM: boolean = false;
    ruleIndex: number = 0;
    ruleDelta: number = 250;
    rules: DropRule[] = [
        new DropRule(0, '56'),
        new DropRule(1, '55'),
        new DropRule(2, '56', false),
        new DropRule(4, '51'),
        new DropRule(5, '49'),
        new DropRule(6, '48'),
        new DropRule(7, '44'),
        new DropRule(8, '56'),
        new DropRule(9, '55'),
        new DropRule(10, '56', false),
        new DropRule(12, '51'),
        new DropRule(13, '49'),
        new DropRule(14, '48'),
        new DropRule(15, '44'),
        new DropRule(16, '56'),
        new DropRule(17, '55'),
        new DropRule(18, '56', false),
        new DropRule(20, '51'),
        new DropRule(21, '49'),
        new DropRule(22, '48'),
        new DropRule(23, '44'),
        new DropRule(24, '56'),
        new DropRule(25, '55'),
        new DropRule(26, '56', false),
        new DropRule(28, '51'),
        new DropRule(29, '49'),
        new DropRule(30, '48'),
        new DropRule(31, '44'),
        new DropRule(32, '56'),
        new DropRule(33, '55'),
        new DropRule(34, '56', false),
        new DropRule(36, '51'),
        new DropRule(37, '49'),
        new DropRule(38, '48'),
        new DropRule(39, '44'),
        new DropRule(40, '56'),
        new DropRule(41, '55'),
        new DropRule(42, '56', false),
        new DropRule(44, '51'),
        new DropRule(45, '49'),
        new DropRule(46, '48'),
        // new DropRule(47, '44'),
        // new DropRule(48, '56'),
        // new DropRule(49, '55'),
        // new DropRule(50, '56', false),
        // new DropRule(52, '51'),
        // new DropRule(53, '49'),
        // new DropRule(54, '48', false),
    ]

    constructor() { super(); }

    onEnable(): void {
        for (let i = 0; i < this.count; i++){
            this.dropTimes.push(0);
        }
    }

    //涉及到与屏幕适配相关逻辑，必须要放到onStart里，否则就可能因适配值没计算完，导致一系列的问题
    onStart(): void {
        let maxWidth = Laya.stage.width/this.count;
        // if (this.itemSize[0] > maxWidth){
            let maxHeight = this.itemSize[1]/this.itemSize[0] * maxWidth;
            this.itemSize[0] = maxWidth;
            this.itemSize[1] = maxHeight;
        // }
    }

    onUpdate(): void {
    }

    /**开始游戏 */
    startGame(): void {
        this.ruleIndex = 0;
    }

    createDropItem(_time: number, clickCall: Function, failCall: Function): Laya.Box {
        let _type: number = 0;

        if (this.ruleIndex < this.rules.length){
            if (_time >= this.rules[this.ruleIndex].time * this.ruleDelta){
                _type = 1;

                //使用对象池创建item
                let item: Laya.Box = Laya.Pool.getItemByCreateFun("DropItem", this.dropItem.create, this.dropItem);
                let dorpComp: DropComponent = item.getComponent(DropComponent);
                dorpComp.InitItem(_type, clickCall, failCall, this.itemSize[0], this.itemSize[1], this.speed);

                //设置item位置
                let usePos: number[] = [];
                for (let i = 0; i < this.dropTimes.length; i++){
                    let dropTime = _time - this.dropTimes[i]
                    if (dropTime > this.itemSize[1] / (Laya.stage.height / this.speed)){ //已经下落超出item长度的位置
                        usePos.push(i);
                    }
                }
                let posIndex = Math.floor(Math.random() * usePos.length);

                item.visible = true;
                item.pos(usePos[posIndex] * this.itemSize[0], -this.itemSize[1]);
                this.dropTimes[usePos[posIndex]] = _time;
        
                this.ruleIndex ++;
                
                return item;
            }
        }
        return null;
    }

    getRule(_index: number){
        if (_index < this.rules.length){
            return this.rules[_index];
        }
        return null;
    }

    getRuleLength(){
        return this.rules.length;
    }
}