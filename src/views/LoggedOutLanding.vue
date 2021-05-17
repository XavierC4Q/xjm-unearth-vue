<template>
  <div>
      <h2>Logged Out Landing View</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoggedOutLandingView",
  setup() {},
});
</script>

<style lang="scss">
@import '@/styles/index.scss';
    h2 {
        color: $primary;
    }
</style>