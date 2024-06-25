<script setup lang="ts">
import { ref } from 'vue';
import type { ApiInstance } from '~/plugins/axios.plugin';

type Todo = {
  id: number;
  name: string;
  status: string;
};

const { apiGet, apiPost, apiDelete }: ApiInstance = useNuxtApp().$axios;

const todo = ref('');
const todos = ref<Todo[]>([]);
const inputRef = ref<HTMLElement | null>(null);

const fetchTodos = async () => {
  const response = await apiGet('/todo');
  todos.value = response.data;
};

const handleAddTodo = async () => {
  if (!todo.value.trim()) return;
  await apiPost('/todo', { name: todo.value.trim() });
  todo.value = '';
  await fetchTodos();
  inputRef.value?.focus();
};

const handleDelete = async (id: number) => {
  await apiDelete(`/todo/${id}`);
  await fetchTodos();
};

onMounted(() => {
  fetchTodos();
  inputRef.value?.focus();
});
</script>

<template>
  <div>
    <h1>{{ $t("todo.title") }}</h1>
    <input
      ref="inputRef"
      v-model="todo"
      type="text"
    >
    <button @click="handleAddTodo">
      {{ $t("todo.add") }}
    </button>
    <div
      v-for="item in todos"
      :key="item.id"
      style="display: flex"
    >
      <p>{{ item.name }}</p>
      <button @click="handleDelete(item.id)">
        X
      </button>
    </div>
  </div>
</template>
