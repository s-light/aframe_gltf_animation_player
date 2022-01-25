import {
    ref,
    toRefs,
    toRaw,
    watch,
    onMounted,
    onUnmounted
} from 'vue';

import 'aframe';

const component_init_scene = {
    init: function () {
        let sceneEl = this.el;
        if (sceneEl) {
            console.log('init_scene called. sceneEl:', sceneEl);
        } else {
            console.log('init_scene called.');
        }
        document.body.classList.add("aframe-active");

        // function scene_loaded_so_run(event) {
        //     console.log('[scene_loaded_so_run] a-scene event loaded', event);
        // }
        //
        // if (sceneEl.hasLoaded) {
        //     scene_loaded_so_run(Null);
        // } else {
        //     sceneEl.addEventListener('loaded', scene_loaded_so_run);
        // }

        // this.el.sceneEl.addEventListener('loaded', (event) => {
        //     console.log('a-scene event loaded', event);
        // });
    }
};

const component_modify_materials =  {
    init: function () {
        // Wait for model to load.
        this.el.addEventListener('model-loaded', () => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');
            // Go over the sub meshes and modify materials we want.
            obj.traverse(node => {
                if (node.name.indexOf('ship') !== -1) {
                    node.material.color.set('red');
                }
            });
        });
    }
};



export function registerMyAframeComponents() {

    console.log("myAframeComponents: registering Components..");

    function handle_registerComponent_Error(error) {
        if (error.message.includes("has been already registered.")) {
            console.log("error", error.message);
        } else {
            throw error
        }
    }

    try {
        AFRAME.registerComponent('init_scene', component_init_scene);
    } catch (e) {
        handle_registerComponent_Error(e)
    }
    try {
        AFRAME.registerComponent('modify_materials', component_modify_materials);
    } catch (e) {
        handle_registerComponent_Error(e)
    }
}



export default function myAframeComponents() {

    const onMounted_setup = () => {
        registerMyAframeComponents()
    }
    onMounted(onMounted_setup)

    const cleanup = () => {
        // nothing to do.
    }
    onUnmounted(cleanup)

    return {
        // connected,
    }
}
