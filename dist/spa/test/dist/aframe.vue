<template lang="html">
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
        <a-assets>
                            <a-asset-item id="Cube" src="./assets/Cube.gltf" ></a-asset-item>
<img id="sky" src="./env//hilly_terrain_01__Q85P_8192x4096.jpg" crossorigin="anonymous" ></img>
        </a-assets>

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

                        <a-entity 
                    gltf-model="#Cube"

                    id="#Cube"
                    position="0.0 0.0 -0.0"
                    rotation="0.0 -0.0 0.0"
                    scale="1 1 1"
                    shadow="cast: true"
                    visible="true"
                ></a-entity>
<a-sky src="#sky" material="" geometry="" rotation="0 90 0"></a-sky>

        <!-- Camera -->
        <!-- https://github.com/supermedium/superframe/tree/master/components/orbit-controls -->
        <a-entity id="camera"
            camera="
                fov:  60;
                far:  520;
            "
            look-controls="enabled:false"
            orbit-controls="
                target: 0 1.7000000476837158 0;
                initialPosition: 0 1.7000000476837158 1.2;
                minPolarAngle: 40;
                maxPolarAngle: 120;
                rotateSpeed: 0.10000000149011612;
                enableZoom: false;
                zoomSpeed: 1;
                minDistance: 0;
                maxDistance: 2.8;
                minZoom: 0;
                enablePan: false;
                autoRotate: true;
                autoRotateSpeed: -0.02;
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
        <!--
        look-controls="pointerLockEnabled: true"
        -->

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
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
