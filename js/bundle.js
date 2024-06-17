"use strict";(()=>{var x=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var o=(n,i,t,a)=>{for(var s=a>1?void 0:a?v(i,t):i,h=n.length-1,r;h>=0;h--)(r=n[h])&&(s=(a?r(i,t,s):r(s))||s);return a&&s&&x(i,t,s),s};var y=class extends Laya.Scene{};var{regClass:g}=Laya,m=class extends y{onAwake(){Laya.loader.load(["resources/UI/progress.png","resources/UI/progress$bar.png"]).then(()=>{let i=["resources/UI/1.jpg","resources/UI/2.jpg","resources/UI/3.jpg","resources/UI/4.jpg","resources/UI/Drop.png",{url:"scenes/MainGame.ls",type:Laya.Loader.HIERARCHY},{url:"prefab/DropItem.lh",type:Laya.Loader.HIERARCHY}];Laya.loader.load(i,null,Laya.Handler.create(this,this.onLoading,null,!1)).then(()=>{this.progress.value=.98,console.log("加载结束",this.progress.value),Laya.timer.once(1e3,this,()=>{Laya.Scene.open("scenes/MainGame.ls")})}),Laya.loader.on(Laya.Event.ERROR,this,this.onError)})}onError(i){console.log("加载失败: "+i)}onLoading(i){i>.92?this.progress.value=.95:this.progress.value=i,console.log("加载进度: "+i,this.progress.value)}};m=o([g("l8rAM2qeT1aKvguRjxTb6w")],m);var{regClass:S,property:U}=Laya,p=class extends Laya.Script{constructor(){super();this._type=0;this._speed=0}onEnable(){this.clickBtn=this.owner.getChildByName("Button"),this.clickBtn.on(Laya.Event.CLICK,this,this.onBtnClick)}onUpdate(){if(this.enabled){var t=this.owner;t.y+=Laya.stage.height/this._speed*Laya.timer.delta,t.y>Laya.stage.height&&(t.removeSelf(),this.failCall!=null&&this.failCall())}}onDisable(){Laya.Pool.recover("DropItem",this.owner)}onBtnClick(t){var a=this.owner;this.clickCall!=null&&this.clickCall(),this.enabled=!1,a.removeSelf()}InitItem(t,a,s,h,r,L){this._type=t,this._speed=L,this.clickCall=a,this.failCall=s;let u=this.owner;u.width=h,u.height=r,this.enabled=!0}};p=o([S("StMufJjgSJGwHzLzkWSBJw")],p);var{regClass:B,property:w}=Laya,e=class{constructor(i,t,a=!0){this.time=i,this.sound=t,this.bCancel=a}},l=class extends Laya.Script{constructor(){super();this.count=4;this.speed=2;this.itemSize=[293,341];this.dropTimes=[];this.bPlayBGM=!1;this.ruleIndex=0;this.ruleDelta=330;this.rules=[new e(0,"56"),new e(1,"55"),new e(2,"56",!1),new e(4,"51"),new e(5,"49"),new e(6,"48"),new e(7,"44"),new e(8,"56"),new e(9,"55"),new e(10,"56",!1),new e(12,"51"),new e(13,"49"),new e(14,"48"),new e(15,"44"),new e(16,"56"),new e(17,"55"),new e(18,"56",!1),new e(20,"51"),new e(21,"49"),new e(22,"48"),new e(23,"44"),new e(24,"56"),new e(25,"55"),new e(26,"56",!1),new e(28,"51"),new e(29,"49"),new e(30,"48"),new e(31,"44"),new e(32,"56"),new e(33,"55"),new e(34,"56",!1),new e(36,"51"),new e(37,"49"),new e(38,"48"),new e(39,"44"),new e(40,"56"),new e(41,"55"),new e(42,"56",!1),new e(44,"51"),new e(45,"49"),new e(46,"48")]}onEnable(){for(let t=0;t<this.count;t++)this.dropTimes.push(0)}onStart(){let t=Laya.stage.width/this.count,a=this.itemSize[1]/this.itemSize[0]*t;this.itemSize[0]=t,this.itemSize[1]=a}onUpdate(){}startGame(){this.ruleIndex=0}createDropItem(t,a,s){let h=0;if(this.ruleIndex<this.rules.length&&t>=this.rules[this.ruleIndex].time*this.ruleDelta+1e3){h=1;let r=Laya.Pool.getItemByCreateFun("DropItem",this.dropItem.create,this.dropItem);r.getComponent(p).InitItem(h,a,s,this.itemSize[0],this.itemSize[1],this.speed);let u=[];for(let c=0;c<this.dropTimes.length;c++)t-this.dropTimes[c]>this.itemSize[1]/(Laya.stage.height/this.speed)&&u.push(c);let f=Math.floor(Math.random()*u.length);return r.visible=!0,r.pos(u[f]*this.itemSize[0],-this.itemSize[1]),this.dropTimes[u[f]]=t,this.ruleIndex++,r}return null}getRule(t){return t<this.rules.length?this.rules[t]:null}getRuleLength(){return this.rules.length}};o([w({type:Laya.Prefab})],l.prototype,"dropItem",2),o([w({type:"number"})],l.prototype,"count",2),o([w({type:"number"})],l.prototype,"speed",2),l=o([B("6qVnPVJbQae4mF7ZVShfYg")],l);var b=class extends Laya.Scene{};var{regClass:C,property:G}=Laya,d=class extends b{constructor(){super();this._started=!1;this._updateStop=!1;this._clickIndex=0;this._bPlayingShow=!1;this._playShow1Time=6e3;this._playShow2Time=6e3}onEnable(){this._model=this.getComponent(l),Laya.stage.on(Laya.Event.BLUR,this,()=>{this._updateStop=!0}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this._updateStop=!1}),this.startBtn.on(Laya.Event.CLICK,this,this.onstartBtnClick),Laya.timer.frameLoop(1,this,this.onUpdate)}onstartBtnClick(t){this.startGame()}onUpdate(){if(this._updateStop||!this._started)return;let t=Laya.timer.delta;this._time+=t,this.updateTime(),this.tryDrop(),this.CheckShowAnimation(t)}updateTime(){let t=Math.floor(this._time/1e3);t>16&&(t=16),this.timeTxt.text=t+"秒"}tryDrop(){let t=this._model.createDropItem(this._time,()=>{this.OnDropClick()},()=>{this.OnDropFail()});t!=null&&this.mainBox.addChild(t)}startGame(){this._started||(this._started=!0,this._model.enabled=!0,this._model.startGame(),this._time=0,this._clickIndex=0,this.timeTxt.text="",this.mainBox.visible=!0,this.readyBox.visible=!1)}stopGame(){this._started=!1,this._model.enabled=!1,this.mainBox.visible=!1,this.readyBox.visible=!0,this.mainBox.removeChildren()}OnDropClick(){if(this._started){let t=this._model.getRule(this._clickIndex);t!=null&&(this.soundChannel!=null&&Laya.SoundManager.removeChannel(this.soundChannel),Laya.SoundManager.soundVolume=.5,this.soundChannel==Laya.SoundManager.playSound("resources/audio/"+t.sound+".m4a")),this._clickIndex+=1,this._clickIndex==this._model.getRuleLength()&&this.GameSuccess()}}OnDropFail(){this._started&&this.stopGame()}GameSuccess(){Laya.SoundManager.playMusic("resources/audio/BGM.m4a"),this.mainBox.visible=!1,this.readyBox.visible=!1,this.topBox.visible=!1,this.showBox.visible=!0,this.show1.visible=!0,Laya.timer.once(1e3,this,()=>{this.show1.getComponent(Laya.Animator2D).play()}),this._bPlayingShow=!0}CheckShowAnimation(t){if(this._bPlayingShow){if(this._playShow1Time>0){this._playShow1Time-=t,this._playShow1Time<=0&&(this.show1.visible=!1,this.show2.visible=!0,this.show2.getComponent(Laya.Animator2D).play());return}if(this._playShow2Time>0){this._playShow2Time-=t,this._playShow2Time<=0&&(this.show2.visible=!1,this.show3.visible=!0);return}}}};d=o([C("GFUpnOxTQNKLJeNeODFsRw")],d);})();
