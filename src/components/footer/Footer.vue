<script setup>
const {locale, locales} = useI18n();
const router = useRouter();
const route = useRoute();

const lang = computed({
  get: () => locale.value,
  set: (val) => {
    const currentPath = route.fullPath;
    let newPath = '';

    if (val === 'vi') {
      newPath = currentPath.replace(/^\/(en)(\/|$)/, '/');
    } else {
      if (currentPath.startsWith('/en')) {
        newPath = currentPath.replace(/^\/(en)/, `/${val}`);
      } else {
        newPath = `/${val}${currentPath}`;
      }
    }

    if (newPath.endsWith(`/${val}/`)) {
      newPath = newPath.slice(0, -1);
    }

    locale.value = val;
    router.replace(newPath);
  }
});
</script>
<template>
  <v-footer app color="primary">
    <div>
        <select v-model="lang">
            <option v-for="item in locales" :key="item.code" :value="item.code">{{ item.name }}</option>
        </select>
    </div>
  </v-footer>
</template>
