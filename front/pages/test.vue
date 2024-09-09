<template>
  <div class="page">
    <button @click="showToast">通知</button>
  </div>
</template>

<script setup lang="ts">
const { $toast } = useNuxtApp(); // 型が正しく認識される

const showToast = () => {
  $toast.success("成功です", {
    duration: 5000, // トーストの表示時間 (ミリ秒)
    dismissible: true, // デフォルトでtrueで、×ボタンを表示します
  });
};
</script>