<template>
  <div id="app" class="layout">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss">
@import 'assets/styles/main';

.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>