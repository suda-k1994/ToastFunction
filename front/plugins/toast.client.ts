// plugins/toast.client.ts
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export default defineNuxtPlugin((nuxtApp) => {
  const toast = useToast({
    position: 'top-right',
    duration: 5000
  });

  // プラグインを通じてトースト関数を提供
  nuxtApp.provide('toast', toast);
});