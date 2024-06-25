<script setup lang="ts">

const localPath = useLocalePath();
</script>
<template>
  <v-app-bar app color="primary">
    <v-row class="align-center justify-space-between">
      <!-- Title and Spacer for Centered Buttons -->
      <v-col cols="auto">
        <v-toolbar-title>
          <NuxtLink :to="localPath('/')">My App</NuxtLink>
        </v-toolbar-title>
      </v-col>

      <v-col class="d-flex justify-center">
        <v-btn text>{{$t('home')}}</v-btn>
        <v-btn text>{{ $t('menu') }}</v-btn>
        <v-btn text>{{ $t('news') }}</v-btn>
        <v-btn text>{{ $t('about') }}</v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn text>{{ $t('login') }}</v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>
