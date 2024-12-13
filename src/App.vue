<script setup>
import Layout from "@/layout/Layout.vue";
import {useTodoListStore} from "@/store/useTodoListStore.ts";

const store = useTodoListStore()
</script>

<template>
  <layout>
    <h1 class="text-6xl font-bold">TODO App</h1>

    <div class="py-5 space-x-2">
      <label for="todo">Add todo</label>
      <input type="text" id="todo" class="border" />
    </div>

    <div>
      <ul v-for="(task, key) in store.tasks">
        <li :key="key">{{ task }}</li>
      </ul>
    </div>
  </layout>
</template>
