<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      {{ store.state.count }}
      <v-list lines="two">
        <v-list-item v-for="n in 3" :key="n" :title="'Item ' + n"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"></v-list-item>
      </v-list>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import { useStore } from '@/plugins/store';
  const store = useStore();
  store.commit('increment')
</script>
