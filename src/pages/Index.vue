<template>
  <q-page class="flex flex-center">
    <!-- <img
    alt="Quasar logo"
    src="~assets/quasar-logo-vertical.svg"
    style="width: 200px; height: 200px"
    > -->
    <section>
        <div class="top_line">
            <button
                type="button" name="reset" v-on:click="goal1=0; goal2=0;"
            >
                Reset
            </button>
            connected: {{ connected }}
        </div>
        <div class="goal_info">
            <div>
                <p>goal1</p>
                <h1>{{ goal1 }}</h1>
            </div>
            <div>
                <p>goal2</p>
                <h1>{{ goal2 }}</h1>
            </div>
        </div>
    </section>
  </q-page>
</template>

<style lang="scss">
section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: stretch;
    width: 100%;
    height: 100%;
}

section .top_line,
section .goal_info {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
}

section .top_line {
    /* background-color: hsl(200, 100%, 50%); */
    text-align: center;
}

.goal_info {
    flex: 1 1 auto;
}

.goal_info {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-content: center;
    align-items: stretch;
}

.goal_info > div {
    order: 0;
    flex: 0 1 auto;
    align-self: auto;
    margin: 0 1em;
    text-align: center;
}


/* to display text in front of the aframe canvas*/



a-assets {
    visibility: hidden;
}

a-loader-title {
    height: 0;
    width: 0;
}








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

<script>
import {
  defineComponent,
  ref,
  onMounted
} from 'vue';

// import connectionGoalDetectionMini from '@/composables/connectionGoalDetectionMini'

import connectionGoalDetectionMini from '../composables/connectionGoalDetectionMini'

export default defineComponent({
  name: 'PageIndex',
  setup () {
     const { connected, goal1, goal2 } = connectionGoalDetectionMini()
     return {
       connected,
       goal1,
       goal2
     }
  }
})


</script>
