 // types/nuxt.d.ts
import { ToastInterface } from 'vue-toast-notification';


// -- helpers/toastHelper.tsで使用するのに必要 --
declare module '#app' {
  interface NuxtApp {
    $toast: ToastInterface;
  }
}

// -- vueソース内で直接$toastを使用したい場合必要 --
// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $toast: ToastInterface;
//   }
// }