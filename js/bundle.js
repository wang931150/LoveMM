"use strict";(()=>{var m=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var o=(l,r,e,a)=>{for(var t=a>1?void 0:a?g(r,e):r,s=l.length-1,p;s>=0;s--)(p=l[s])&&(t=(a?p(r,e,t):p(t))||t);return a&&t&&m(r,e,t),t};var h=class extends Laya.Scene{};var{regClass:v}=Laya,c=class extends h{onAwake(){Laya.loader.load(["resources/UI/splash.jpg","resources/UI/loading.jpg",{url:"resources/atlas/ma.atlas",type:Laya.Loader.ATLAS}]).then(()=>{this._ani=new Laya.Animation,this._ani.loadAtlas("resources/atlas/ma.atlas"),Laya.Animation.createFrames("resources/atlas/ma.atlas","ma"),this._ani.pos(0,110),this._ani.scale(1.8,2),this.loading.addChild(this._ani),this._ani.play(0,!0),this._ani.interval=100;let e=["resources/UI/D_1.jpg","resources/UI/mask.png","resources/UI/hi.png","resources/UI/photograph1.png","resources/UI/photograph2.png","resources/UI/photograph3.png","resources/UI/pinao.jpg","resources/UI/wedding1.png","resources/UI/wedding2.png","resources/UI/open1.png","resources/UI/open2.png","resources/UI/note1.png","resources/UI/note2.png","resources/UI/note3.png","resources/UI/B_1.jpg","resources/UI/B_2.jpg","resources/UI/D_2.jpg","resources/UI/D_3.jpg","resources/UI/forver.png","resources/UI/map.png","resources/UI/logo.png",{url:"resources/atlas/destory.atlas",type:Laya.Loader.ATLAS},{url:"scenes/GameMain.ls",type:Laya.Loader.HIERARCHY},{url:"prefab/DropBox1.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/DropBox2.lh",type:Laya.Loader.HIERARCHY},{url:"prefab/DropBox3.lh",type:Laya.Loader.HIERARCHY},{url:"resources/sound/bgm.mp3",type:Laya.Loader.BUFFER}];Laya.loader.load(e,null,Laya.Handler.create(this,this.onLoading,null,!1)).then(()=>{console.log("加载结束"),Laya.Scene.open("scenes/GameMain.ls")}),Laya.loader.on(Laya.Event.ERROR,this,this.onError)})}onError(e){console.log("加载失败: "+e)}onLoading(e){this._ani.pos(e*480,110)}};c=o([v("0xcbP_peQM2UyU_UxNsj3w")],c);var{regClass:f,property:b}=Laya,d=class extends Laya.Script{constructor(){super();this.index=1}onEnable(){this._rig=this.owner.getComponent(Laya.RigidBody),this._ani=new Laya.Animation}onUpdate(){this.owner.rotation++,this.owner.y+=Laya.stage.height/320}onTriggerEnter(e,a,t){var s=this.owner;if(e.label==="ground"){if(s.parent){let p=Laya.Pool.getItemByCreateFun("effect",this.createEffect,this);Laya.Animation.createFrames("resources/atlas/destory.atlas","destory"),p.pos(s.x-s.width,s.y-s.height/2),p.scale(1.5,1.5),s.parent.addChild(p),p.play(0,!1)}s.removeSelf()}}createEffect(){let e=new Laya.Animation;e.loadAtlas("resources/atlas/destory.atlas"),e.on(Laya.Event.COMPLETE,null,a);function a(){e.removeSelf(),Laya.Pool.recover("effect",e)}return e}onDisable(){Laya.Pool.recover("dropBox"+this.index,this.owner)}};o([b({type:"number"})],d.prototype,"index",2),d=o([f("3L23NCFLSAieUApqTrVoCQ")],d);var{regClass:x,property:L}=Laya,i=class extends Laya.Script{constructor(){super();this.createBoxInterval=1e3;this._time=0;this._started=!1;this.updateStop=!1;this.bOnLoadRes1=!1;this.bLoadRes1Finished=!1;this.bOnLoadRes2=!1;this.bLoadRes2Finished=!1}loadRes1(){let e=["resources/UI/B_1.jpg","resources/UI/B_2.jpg"];Laya.loader.load(e).then(a=>{this.bLoadRes1Finished=!0})}loadRes2(){let e=["resources/UI/D_2.jpg","resources/UI/D_3.jpg","resources/UI/forver.png","resources/UI/map.png","resources/UI/logo.png"];Laya.loader.load(e).then(a=>{this.bLoadRes2Finished=!0})}onEnable(){this._gameBox=this.owner.getChildByName("gameBox"),Laya.stage.on(Laya.Event.BLUR,this,()=>{this.updateStop=!0}),Laya.stage.on(Laya.Event.FOCUS,this,()=>{this.updateStop=!1})}onStart(){let e=this.owner.getChildByName("ground").getComponent(Laya.BoxCollider);e.width=Laya.stage.width}onUpdate(){if(this.updateStop)return;let e=Date.now();this._started&&e-this._time>=this.createBoxInterval&&(this.createBoxInterval=1500+Math.random()*500,this._time=e,this.createBox())}createBox(){let e=Math.ceil(Math.random()*3),a;e==1?a=this.dropBox1:e==2?a=this.dropBox2:e==3&&(a=this.dropBox3);let t=Laya.Pool.getItemByCreateFun("dropBox"+e,a.create,a);t.pos(Math.random()*(Laya.stage.width-200)+100,0),this._gameBox.addChild(t)}startGame(){this._started||(this._started=!0,this.enabled=!0,this._time=0,Laya.SoundManager.autoStopMusic=!1,Laya.SoundManager.playMusic("resources/sound/bgm.mp3"))}stopGame(){this._started=!1,this.enabled=!1,this._gameBox.removeChildren()}};o([L({type:Laya.Prefab})],i.prototype,"dropBox1",2),o([L({type:Laya.Prefab})],i.prototype,"dropBox2",2),o([L({type:Laya.Prefab})],i.prototype,"dropBox3",2),i=o([x("h4oJ3hXoQ4uRp3Mnk2BZ7g")],i);var u=class extends Laya.Scene{};var{regClass:I,property:P}=Laya,n=class extends u{constructor(){super();this._CanMove=!1;this._start=!1;n.instance=this}onEnable(){this.maskImg.mask=this.maskS,this.openImg2.mask=this.openMask,this._control=this.getComponent(i),this.bottomAnim=this.bottomBox.getComponent(Laya.Animator2D),Laya.stage.on(Laya.Event.CLICK,this,this.onTipClick),this.copyTxt.on(Laya.Event.CLICK,this,this.onCopyClick)}onTipClick(e){this._start||(this._start=!0,this.openImg1.visible=!1,this.openImg2.visible=!1,this.bottomAnim.play(),this._CanMove=!0,this._control.startGame(),this.Panel.vScrollBar.touchScrollEnable=!1)}onCopyClick(e){navigator.clipboard.writeText("湖南省长沙市岳麓区小天鹅洋湖婚庆园"),this.copyTxt.text="已复制"}getStartMove(){return this._CanMove}MoveOver(){this._CanMove=!1,this.Panel.vScrollBar.touchScrollEnable=!0}};n=o([I("ezOvwxztQOq7upo5ov7wSw")],n);var{regClass:_,property:O}=Laya,y=class extends Laya.Script{constructor(){super();this._time=0}onEnable(){this._time=Date.now()}onStart(){}onUpdate(){if(n.instance.getStartMove()){let e=Date.now(),a=this.owner.vScrollBar,t=e-this._time;t<=1e3?a.value+=18:t>1e3&&t<=2e3?a.value+=1.5+(2e3-t)/1e3*16:t>2e3&&(a.value<6260?a.value+=1.5:n.instance.MoveOver())}else this._time=Date.now()}onDisable(){}};y=o([_("XMO308xeTseCglTfQfBbAg")],y);})();
