<script setup lang="ts">
import NavButton from './components/NavButton.vue';
</script>

<template>
  <div><NavButton heading="АДМИНИСТРИРОВАНИЕ" :subs="['МИГРАЦИЯ','БЭКАПЫ', 'АУДИТ БЕЗОПАСТНОСТИ', 'ОПТИМИЗАЦИЯ СКОРОСТИ', 'ПЕРЕЕЗД НА HTTPS']" /></div>
  <div><NavButton heading="О НАС" :subs="['КОМАНДА','DRUPALGIVE','БЛОГ','КУРСЫ DRUPAL']" /></div>
</template>

<style scoped>
</style>