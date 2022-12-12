<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { defineProps } from "vue";
import {ref} from "vue";
const props = defineProps<{
  heading: string
  subs: Array<string>
}>();

let show = ref(false);

</script>

<template>
            <div @mouseover="show=true" @mouseleave="show=false" class="nav-heading"><a src="">{{props.heading}}</a><img class="arrow-nav" src="../../public/arrow.svg"></div>
            <div @mouseover="show=true" @mouseleave="show=false" v-show="show" class="nav-sub">
              <ul>
                <li v-for="(sub, index) in props.subs" :key="index"><a src="">{{sub}}</a></li>
              </ul>
            </div>
</template>

<style scoped>
.nav-sub{
  position: absolute;
  top:16px
}
ul{
  margin: 0;
  padding: 13px 0;
  background-color: #F14D34;
  position: fixed;
}
li{
  display: block;
  padding: 0 13px;
}
li:hover{
  background-color: brown;
}
</style>