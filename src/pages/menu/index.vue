<template>
  <div class="container">
    <div>Menu</div>
    <div>
      <v-row>
        <v-col
          v-for="item in menu"
          :key="item.id"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card>
            <v-img
              :src="item.image"
              height="200"
            ></v-img>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>{{ item.description }}</v-card-text>
            <v-card-actions>
              <v-btn text>{{ $t('menu.price', { price: item.price }) }}</v-btn>
              <v-btn text>{{ $t('menu.add') }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';

const { $axios } = useNuxtApp();
const { t } = useI18n();
const menu = ref([]);

onMounted(async () => {
  const { data } = await $axios.get('/menu');
  menu.value = data || [{ id: 1, name: 'Menu 1', description: 'Description 1', price: 10, image: 'https://via.placeholder.com/200' }];
});
</script>
