<script setup lang="ts">
import { ref } from "vue";
import { computed } from 'vue';
let windowWidth = ref(window.innerWidth);
const top = computed(() => {
  if (windowWidth.value > 524)
    return (-0.5625*windowWidth.value)+650 < 0 ? (-0.5625*windowWidth.value)+650+"px" : "0px";
  return "0px";
  });
const videoWidth = computed(() => {
  if (windowWidth.value > 524)
    return -0.5625*windowWidth.value+650 < 0 ? windowWidth.value+"px" : windowWidth.value+(parseInt(top.value.substring(0,top.value.length-2))+650)*0.5625+"px";
  return windowWidth.value+(parseInt(top.value.substring(0,top.value.length-2))+1300)*0.5625+"px";
  });
window.addEventListener("resize", function(){ windowWidth.value=window.innerWidth;});
</script>

<template>
  <video id="header-video" src="../public/header-video.mp4" autoplay loop muted ></video>
</template>

<style scoped>
video {
    left: 0px;
    width: v-bind(videoWidth);
    top: v-bind(top);
}
</style>