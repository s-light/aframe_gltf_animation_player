import { boot } from 'quasar/wrappers'
import { registerMyAframeComponents } from 'components/my-aframe-components.js'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  registerMyAframeComponents()
})
