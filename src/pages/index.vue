<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLocale = (lang: string) => {
  locale.value = lang
}

const router = useRouter();
const handleGotoTodo = () => {
  router.push('/todo');
};
</script>

<template>
  <div>
    <div>
      <h1>{{ $t('welcome') }}</h1>
      <p>{{ $t('greeting', { name: 'Huy' }) }}</p>
      <button @click="changeLocale('vi')">Tiếng Việt</button>
      <button @click="changeLocale('en')">English</button>
    </div>

    <button @click="handleGotoTodo">
      Todo Todo app
    </button>
  </div>
</template>
