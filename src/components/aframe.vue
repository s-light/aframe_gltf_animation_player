<template lang="html">
<div class="aframe_wrapper">
    <!-- <p>Hello Aframe World!</p> -->
    <a-scene
        embedded
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
        loading-screen="dotsColor: gray; backgroundColor: white"
        stats
        
        shadow="type: pcfsoft; autoUpdate: true;"
        renderer="
            antialias: true;
            colorManagement: true;
            physicallyCorrectLights: true;
            maxCanvasWidth: 1600;
            maxCanvasHeight: 1200;
        "
        init_scene
    >
        <!-- NO-MAGIC-COMMENT src_prepend="~assets/aframe_things" -->
        <!-- MAGIC-COMMENT replace_search="src=\"./" replace_with="src=\"/aframe_things/" -->
        <a-assets>
            <a-asset-item id="TheModel" :src="file_obj" ></a-asset-item>
            <img id="icon-play" src="/aframe_things/resources//play.png" crossorigin="anonymous" />            <img id="icon-pause" src="/aframe_things/resources//pause.png" crossorigin="anonymous" />            <img id="icon-play-skip-back" src="/aframe_things/resources//play-skip-back.png" crossorigin="anonymous" />            <img id="icon-mute" src="/aframe_things/resources//mute.png" crossorigin="anonymous" />            <img id="icon-volume-low" src="/aframe_things/resources//volume-low.png" crossorigin="anonymous" />            <img id="icon-volume-high" src="/aframe_things/resources//volume-high.png" crossorigin="anonymous" />            <img id="image1" src="/aframe_things/media//image1.png" crossorigin="anonymous" />            <img id="image2" src="/aframe_things/media//image2.png" crossorigin="anonymous" />            <img id="sky" src="/aframe_things/env//hilly_terrain_01__Q85P_8192x4096.jpg" crossorigin="anonymous" />
        </a-assets>


        <!-- Entities -->
        <a-box
            position="0 1 -2.5"
            rotation="90.00000250447816 0.0 -0.0"
            depth="0.1"
            height="0.8"
            width="0.5"
            class="clickable"
            show_content="#story"
            animation__y="property: object3D.rotation.y; to: 360; dur: 30000; easing: linear; loop: true"
            animation__click="property: object3D.rotation.x; to: '*=4'; dur: 3000; startEvents: click;"
        ></a-box>

                <a-sky src="#sky" material="" geometry="" rotation="0 90 0"></a-sky>
        <a-entity
            gltf-model="#TheModel"
            id="TheModelEntity"
            position="0.0 0.0 -0.0"
            rotation="0.0 -0.0 0.0"
            scale="1 1 1"
            shadow="cast: true"
            visible="true"
        ></a-entity>




        <!-- Camera -->
        <!-- https://github.com/supermedium/superframe/tree/master/components/orbit-controls -->
        <a-entity id="camera"
            camera="
                fov:  60;
                far:  520;
            "
            look-controls="enabled:false"
            orbit-controls="
                target: 0 0.15000000596046448 0;
                initialPosition: 0 0.15000000596046448 0.6;
                minPolarAngle: 40;
                maxPolarAngle: 120;
                rotateSpeed: 0.009999999776482582;
                enableZoom: true;
                zoomSpeed: 1;
                minDistance: 0.1;
                maxDistance: 2.8;
                minZoom: 0.1;
                enablePan: false;
                autoRotate: true;
                autoRotateSpeed: -0.01;
            "
        >
            <a-entity
                id="cursor"
                cursor="
                    fuse: false;
                    rayOrigin: mouse;
                "
                position="0 0 -0.5"
                geometry="primitive: circle; radius: 0.0005;"
                material="color: #CCC; shader: flat;"
                raycaster="
                    far: 10.0;
                    interval: 300.0;
                    objects: .clickable,.links;
                "
            >
            <!--
            showLine: true;
            lineColor: red;
            lineOpacity: 0.5
            
            -->
            </a-entity>
        </a-entity>



        <!-- Lights -->
        <a-entity
            id="light_ambient"
            light="
                type: ambient;
                intensity: 1.0
            "
        ></a-entity>
        <a-entity
            id="light_sun"
            light="
                type: directional;
                intensity: 2;
                castShadow: true;
                shadowBias: -0.0004;

                shadowMapHeight: 1024;
                shadowMapWidth: 1024;

                shadowCameraNear: 0;
                shadowCameraFar: 50;
                shadowCameraFov: 102;

                shadowCameraBottom: 12;
                shadowCameraTop: -5;
                shadowCameraRight: 10;
                shadowCameraLeft: -10;

                shadowRadius: 2
            "
            position="4 10 10"
        ></a-entity>



        <!-- Sky -->
        <!-- currently the sun-sky component is broken..
        <a-sun-sky material="sunPosition: -0.2 0.5 -5"></a-sun-sky> -->
        <!-- <a-gradient-sky
            material="shader: gradient;
            topColor: 255 0 0;
            bottomColor: 0 121 255;"
        ></a-gradient-sky>
        same for a-gradient-sky component. but we can use the shader from this to do
        the same with the normal sky component
        -->
        <!-- <a-sky material="shader: gradient; topColor: 240 245 255; bottomColor: 255 200 80;"></a-sky> -->





        <!-- THE END -->
        <noscript>
            <style media="screen">
                a-scene {
                    display: block;
                    position: absolute;
                    height: 0%;
                    width: 0%;
                    top: 0;
                }
            </style>
            you need javascript to view this application!
        </noscript>
    </a-scene>
</div>
</template>






<script>
import {
    defineComponent,
    computed,
    ref,
    toRefs,
    onMounted
} from 'vue';

import 'aframe';
import 'aframe-extras';
import 'aframe-orbit-controls';

// import  myAframeComponents from './my-aframe-components.js';


export default {
    name: 'AframeComponent',
    props: {
        file: [String, Object],
    },
    model: {
        prop: 'animations',
        event: 'change'
    },
    setup (props) {
        // myAframeComponents()
       // const { connected, goal1, goal2 } = connectionGoalDetectionMini()
       // var file = "./assets/Cube.gltf"
       // console.log("URL.createObjectURL(file)", URL.createObjectURL(this.file))
       // const file_obj = ref("")
       const { file } = toRefs(props)

       const file_obj = computed(() => {
           console.log("file_obj computed:");
           console.log("  file", file);
           console.log("  file.value", file.value);
           let result = ""
           if (file.value) {
               result = URL.createObjectURL(file.value)
           }
           console.log("  result", result);
           return result
       })

       return {
           file_obj: file_obj
       }
   },
}
</script>






<style lang="css">
.aframe_wrapper {
    display: block;
    min-width: 100px;
    min-height: 100px;
}

a-scene {
    min-width: 100px;
    min-height: 100px;
    border: solid 1px lime;
}





/* aframe stats */
.rs-base {
    font-size: 18px !important;
    line-height: 18px !important;
    width: 450px !important;
    left: 10vw !important;
}

.rs-base h1 {
	margin: 0;
    line-height: 1em !important;
}

.rs-group {
    margin: 0 0 0 1em;
}


.rs-counter-base {
    height: 26px !important;
    margin: 0;
}

.rs-counter-base.alarm {
	color: hsl(0, 100%, 51.4%);
	text-shadow:
        0 0 0 hsl(0, 100%, 50%),
        0 0 1px hsl(0, 0%, 0%),
        0 0 1px hsl(0, 0%, 0%),
        0 0 2px hsl(0, 0%, 0%),
        0 0 2px hsl(0, 0%, 0%),
        0 0 3px hsl(0, 0%, 0%),
        0 0 3px hsl(0, 0%, 0%),
        0 0 4px hsl(0, 0%, 0%),
        0 0 4px hsl(0, 0%, 0%),
        0 0 6px hsl(0, 0%, 0%);
}


.rs-counter-id {
    width: 100px !important;
}

.rs-counter-value {
    width: 50px !important;
}

canvas.rs-canvas {
    width: 250px !important;
    height: 20px !important;
}
</style>
