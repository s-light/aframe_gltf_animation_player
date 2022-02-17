"use strict";(self["webpackChunkaframe_gltf_animation_player"]=self["webpackChunkaframe_gltf_animation_player"]||[]).push([[457],{5457:(e,n,a)=>{a.r(n),a.d(n,{default:()=>S});var i=a(3673);const o={class:"overlay"},t={class:"load_model"},s=(0,i._)("h4",null,"Load Model",-1),l=(0,i._)("section",{class:"animation_controls"},[(0,i._)("h4",null,"Animation Controls"),(0,i._)("div",{id:"animation_list"},[(0,i._)("ul",null,[(0,i._)("li",null,"-")])])],-1);function r(e,n,a,r,c,m){const u=(0,i.up)("aframe"),d=(0,i.up)("q-file"),g=(0,i.up)("q-page");return(0,i.wg)(),(0,i.j4)(g,{class:""},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{class:"absolute-full",file:e.file,animations:e.animations,"onUpdate:animations":n[0]||(n[0]=n=>e.animations=n)},null,8,["file","animations"]),(0,i._)("div",o,[(0,i._)("section",t,[s,(0,i.Wm)(d,{modelValue:e.file,"onUpdate:modelValue":n[1]||(n[1]=n=>e.file=n),label:"Pick one file",filled:"",accept:".gltf, .glb"},null,8,["modelValue"])]),l])])),_:1})}var c=a(1959);const m={class:"aframe_wrapper"},u={embedded:"","vr-mode-ui":"enabled: false","device-orientation-permission-ui":"enabled: false","loading-screen":"dotsColor: gray; backgroundColor: white",stats:"",shadow:"type: pcfsoft; autoUpdate: true;",renderer:"\n            antialias: true;\n            colorManagement: true;\n            physicallyCorrectLights: true;\n            maxCanvasWidth: -1;\n            maxCanvasHeight: -1;\n        ",init_scene:""},d=["src"],g=(0,i.uE)('<img id="icon-play" src="/aframe_things/resources//play.png" crossorigin="anonymous"><img id="icon-pause" src="/aframe_things/resources//pause.png" crossorigin="anonymous"><img id="icon-play-skip-back" src="/aframe_things/resources//play-skip-back.png" crossorigin="anonymous"><img id="icon-mute" src="/aframe_things/resources//mute.png" crossorigin="anonymous"><img id="icon-volume-low" src="/aframe_things/resources//volume-low.png" crossorigin="anonymous"><img id="icon-volume-high" src="/aframe_things/resources//volume-high.png" crossorigin="anonymous"><img id="image1" src="/aframe_things/media//image1.png" crossorigin="anonymous"><img id="image2" src="/aframe_things/media//image2.png" crossorigin="anonymous"><a-asset-item id="thething" src="/aframe_things/assets/thething.gltf"></a-asset-item><a-asset-item id="floorPlane_mesh" src="/aframe_things/assets/floorPlane_mesh.gltf"></a-asset-item><img id="sky" src="/aframe_things/env//hilly_terrain_01__Q85P_8192x4096.jpg" crossorigin="anonymous">',11),h=(0,i._)("a-box",{position:"0 1 -2.5",rotation:"90.00000250447816 0.0 -0.0",depth:"0.1",height:"0.8",width:"0.5",class:"clickable",show_content:"#story",animation__y:"property: object3D.rotation.y; to: 360; dur: 30000; easing: linear; loop: true",animation__click:"property: object3D.rotation.x; to: '*=4'; dur: 3000; startEvents: click;"},null,-1),p=(0,i._)("a-entity",{id:"collection__my_world",position:"0 0 0",rotation:"0 0 0",scale:"1 1 1",shadow:"cast: true",visible:"true"},[(0,i._)("a-entity",{"gltf-model":"#thething",class:"clickable",animation_mixer:"",id:"thething_object",position:"0.0 0.0 -0.0",rotation:"0.0 0.0 -0.0",scale:"1 1 1",shadow:"cast: true",visible:"true"}),(0,i._)("a-entity",{"gltf-model":"#floorPlane_mesh",id:"floorPlane",position:"0.0 0.0 -0.0",rotation:"0.0 -0.0 0.0",scale:"1 1 1",shadow:"cast: true",visible:"true"})],-1),_=(0,i._)("a-sky",{src:"#sky",material:"",geometry:"",rotation:"0 90 0"},null,-1),f=(0,i._)("a-entity",{"gltf-model":"#TheModel",id:"TheModelEntity",position:"0.0 0.0 -0.0",rotation:"0.0 -0.0 0.0",scale:"1 1 1",shadow:"cast: true",visible:"true"},null,-1),y=(0,i._)("a-entity",{id:"camera",camera:"\n                fov:  60;\n                far:  520;\n            ","look-controls":"enabled:false","orbit-controls":"\n                target: 0 0.15000000596046448 0;\n                initialPosition: 0 0.15000000596046448 0.6;\n                minPolarAngle: 40;\n                maxPolarAngle: 120;\n                rotateSpeed: 0.009999999776482582;\n                enableZoom: true;\n                zoomSpeed: 1;\n                minDistance: 0.1;\n                maxDistance: 2.8;\n                minZoom: 0.1;\n                enablePan: false;\n                autoRotate: true;\n                autoRotateSpeed: -0.01;\n            "},[(0,i._)("a-entity",{id:"cursor",cursor:"\n                    fuse: false;\n                    rayOrigin: mouse;\n                ",position:"0 0 -0.5",geometry:"primitive: circle; radius: 0.0005;",material:"color: #CCC; shader: flat;",raycaster:"\n                    far: 10.0;\n                    interval: 300.0;\n                    objects: .clickable,.links;\n                "})],-1),b=(0,i._)("a-entity",{id:"light_ambient",light:"\n                type: ambient;\n                intensity: 1.0\n            "},null,-1),v=(0,i._)("a-entity",{id:"light_sun",light:"\n                type: directional;\n                intensity: 2;\n                castShadow: true;\n                shadowBias: -0.0004;\n\n                shadowMapHeight: 1024;\n                shadowMapWidth: 1024;\n\n                shadowCameraNear: 0;\n                shadowCameraFar: 50;\n                shadowCameraFov: 102;\n\n                shadowCameraBottom: 12;\n                shadowCameraTop: -5;\n                shadowCameraRight: 10;\n                shadowCameraLeft: -10;\n\n                shadowRadius: 2\n            ",position:"4 10 10"},null,-1),w=(0,i._)("noscript",null,'\n            <style media="screen">\n                a-scene {\n                    display: block;\n                    position: absolute;\n                    height: 0%;\n                    width: 0%;\n                    top: 0;\n                }\n            </style>\n            you need javascript to view this application!\n        ',-1);function k(e,n,a,o,t,s){return(0,i.wg)(),(0,i.iD)("div",m,[(0,i._)("a-scene",u,[(0,i._)("a-assets",null,[(0,i._)("a-asset-item",{id:"TheModel",src:o.file_obj},null,8,d),g]),h,p,_,f,y,b,v,w])])}a(71),a(7965),a(6016),a(5394),a(8108),a(421);const C={name:"AframeComponent",props:{file:[String,Object]},model:{prop:"animations",event:"change"},setup(e){const{file:n}=(0,c.BK)(e),a=(0,i.Fl)((()=>{console.log("file_obj computed:"),console.log("  file",n),console.log("  file.value",n.value);let e="";return n.value&&(e=URL.createObjectURL(n.value)),console.log("  result",e),e}));return{file_obj:a}}};var j=a(4260);const P=(0,j.Z)(C,[["render",k]]),x=P,M=(0,i.aZ)({name:"PageIndex",setup(){const e=(0,c.iH)({});return{animations:e,file:(0,c.iH)(null)}},components:{Aframe:x}});var Z=a(4379),R=a(2941),A=a(7518),D=a.n(A);const L=(0,j.Z)(M,[["render",r]]),S=L;D()(M,"components",{QPage:Z.Z,QFile:R.Z})}}]);