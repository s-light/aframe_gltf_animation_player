<template>
    <q-page class="flex flex-center">
        <aframe
            :file="file"
            v-model:animations="animations"
        ></aframe>
        <div class="overlay">
            <section class="load_model">
                <h1>Load Model</h1>
                <q-file
                    v-model="file"
                    label="Pick one file"
                    filled
                    accept=".gltf, .glb"
                />
            </section>
            <section class="animation_controls">
                <h1>Animation Controls</h1>
                <div id="animation_list">
                    <ul>
                        <li>-</li>
                    </ul>
                </div>
            </section>
        </div>
    </q-page>
</template>








<script>
import {
    defineComponent,
    ref,
    onMounted
} from 'vue';
// import { useQuasar } from 'quasar'

import Aframe from 'components/aframe.vue'



export default defineComponent({
    name: 'PageIndex',
    setup () {
        // const $q = useQuasar()
        const animations = ref({})
        // const { connected, goal1, goal2 } = connectionGoalDetectionMini()
        return {
            animations:animations,
            file: ref(null)
        }
    }
})


</script>











<style lang="scss">



/* overlay things */
/* section-wrapper */
.overlay {
    display: block;
    overflow: hidden;
    position: fixed;
    top: 0;
    /* max-width: calc(99vw - 2em); */
    /* max-height: calc(99vh - 2em); */
    /* height: calc(99vh - 2em); */
    z-index: 100;
}

</style>
