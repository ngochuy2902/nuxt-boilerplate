<script setup lang="ts">

const localPath = useLocalePath();
</script>

<template>
  <div>
    <div>
      <h1>{{ $t('welcome') }}</h1>
      <p>{{ $t('greeting', { name: 'Huy' }) }}</p>
    </div>

    <NuxtLink :to="localPath('/todo')">{{ $t("todo.title") }}</NuxtLink>
  </div>
</template>
