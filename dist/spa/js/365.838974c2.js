"use strict";(self["webpackChunkaframe_gltf_animation_player"]=self["webpackChunkaframe_gltf_animation_player"]||[]).push([[365],{2365:(n,e,a)=>{a.r(e),a.d(e,{default:()=>L});var o=a(3673);const i={class:"overlay"},t={class:"load_model"},s=(0,o._)("h4",null,"Load Model",-1),l=(0,o._)("section",{class:"animation_controls"},[(0,o._)("h4",null,"Animation Controls"),(0,o._)("div",{id:"animation_list"},[(0,o._)("ul",null,[(0,o._)("li",null,"-")])])],-1);function r(n,e,a,r,c,m){const u=(0,o.up)("aframe"),d=(0,o.up)("q-file"),g=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(g,{class:""},{default:(0,o.w5)((()=>[(0,o.Wm)(u,{class:"absolute-full",file:n.file,animations:n.animations,"onUpdate:animations":e[0]||(e[0]=e=>n.animations=e)},null,8,["file","animations"]),(0,o._)("div",i,[(0,o._)("section",t,[s,(0,o.Wm)(d,{modelValue:n.file,"onUpdate:modelValue":e[1]||(e[1]=e=>n.file=e),label:"Pick one file",filled:"",accept:".gltf, .glb"},null,8,["modelValue"])]),l])])),_:1})}var c=a(1959);const m={class:"aframe_wrapper"},u={embedded:"","vr-mode-ui":"enabled: false","device-orientation-permission-ui":"enabled: false","loading-screen":"dotsColor: gray; backgroundColor: white",stats:"",shadow:"type: pcfsoft; autoUpdate: true;",renderer:"\n            antialias: true;\n            colorManagement: true;\n            physicallyCorrectLights: true;\n            maxCanvasWidth: 1600;\n            maxCanvasHeight: 1200;\n        ",init_scene:""},d=["src"],g=(0,o.uE)('<img id="icon-play" src="/aframe_things/resources//play.png" crossorigin="anonymous"> <img id="icon-pause" src="/aframe_things/resources//pause.png" crossorigin="anonymous"> <img id="icon-play-skip-back" src="/aframe_things/resources//play-skip-back.png" crossorigin="anonymous"> <img id="icon-mute" src="/aframe_things/resources//mute.png" crossorigin="anonymous"> <img id="icon-volume-low" src="/aframe_things/resources//volume-low.png" crossorigin="anonymous"> <img id="icon-volume-high" src="/aframe_things/resources//volume-high.png" crossorigin="anonymous"> <img id="image1" src="/aframe_things/media//image1.png" crossorigin="anonymous"> <img id="image2" src="/aframe_things/media//image2.png" crossorigin="anonymous"> <img id="sky" src="/aframe_things/env//hilly_terrain_01__Q85P_8192x4096.jpg" crossorigin="anonymous">',17),p=(0,o._)("a-box",{position:"0 1 -2.5",rotation:"90.00000250447816 0.0 -0.0",depth:"0.1",height:"0.8",width:"0.5",class:"clickable",show_content:"#story",animation__y:"property: object3D.rotation.y; to: 360; dur: 30000; easing: linear; loop: true",animation__click:"property: object3D.rotation.x; to: '*=4'; dur: 3000; startEvents: click;"},null,-1),h=(0,o._)("a-sky",{src:"#sky",material:"",geometry:"",rotation:"0 90 0"},null,-1),f=(0,o._)("a-entity",{"gltf-model":"#TheModel",id:"TheModelEntity",position:"0.0 0.0 -0.0",rotation:"0.0 -0.0 0.0",scale:"1 1 1",shadow:"cast: true",visible:"true"},null,-1),_=(0,o._)("a-entity",{id:"camera",camera:"\n                fov:  60;\n                far:  520;\n            ","look-controls":"enabled:false","orbit-controls":"\n                target: 0 0.5 0;\n                initialPosition: 0 0.5 1.2;\n                minPolarAngle: 40;\n                maxPolarAngle: 120;\n                rotateSpeed: 0.009999999776482582;\n                enableZoom: false;\n                zoomSpeed: 1;\n                minDistance: 0;\n                maxDistance: 2.8;\n                minZoom: 0;\n                enablePan: false;\n                autoRotate: true;\n                autoRotateSpeed: -0.02;\n            "},[(0,o._)("a-entity",{id:"cursor",cursor:"\n                    fuse: false;\n                    rayOrigin: mouse;\n                ",position:"0 0 -0.5",geometry:"primitive: circle; radius: 0.0005;",material:"color: #CCC; shader: flat;",raycaster:"\n                    far: 10.0;\n                    interval: 300.0;\n                    objects: .clickable,.links;\n                "})],-1),y=(0,o._)("a-entity",{id:"light_ambient",light:"\n                type: ambient;\n                intensity: 1.0\n            "},null,-1),b=(0,o._)("a-entity",{id:"light_sun",light:"\n                type: directional;\n                intensity: 2;\n                castShadow: true;\n                shadowBias: -0.0004;\n\n                shadowMapHeight: 1024;\n                shadowMapWidth: 1024;\n\n                shadowCameraNear: 0;\n                shadowCameraFar: 50;\n                shadowCameraFov: 102;\n\n                shadowCameraBottom: 12;\n                shadowCameraTop: -5;\n                shadowCameraRight: 10;\n                shadowCameraLeft: -10;\n\n                shadowRadius: 2\n            ",position:"4 10 10"},null,-1),v=(0,o._)("noscript",null,'\n            <style media="screen">\n                a-scene {\n                    display: block;\n                    position: absolute;\n                    height: 0%;\n                    width: 0%;\n                    top: 0;\n                }\n            </style>\n            you need javascript to view this application!\n        ',-1);function w(n,e,a,i,t,s){return(0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("a-scene",u,[(0,o._)("a-assets",null,[(0,o._)("a-asset-item",{id:"TheModel",src:i.file_obj},null,8,d),g]),p,h,f,_,y,b,v])])}a(71),a(7965),a(6016),a(5394),a(8108),a(421);const k={name:"AframeComponent",props:{file:[String,Object]},model:{prop:"animations",event:"change"},setup(n){const{file:e}=(0,c.BK)(n),a=(0,o.Fl)((()=>{console.log("file_obj computed:"),console.log("  file",e),console.log("  file.value",e.value);let n="";return e.value&&(n=URL.createObjectURL(e.value)),console.log("  result",n),n}));return{file_obj:a}}};var C=a(4260);const j=(0,C.Z)(k,[["render",w]]),x=j,P=(0,o.aZ)({name:"PageIndex",setup(){const n=(0,c.iH)({});return{animations:n,file:(0,c.iH)(null)}},components:{Aframe:x}});var M=a(4379),Z=a(2941),R=a(7518),A=a.n(R);const D=(0,C.Z)(P,[["render",r]]),L=D;A()(P,"components",{QPage:M.Z,QFile:Z.Z})}}]);