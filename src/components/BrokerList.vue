<template>
  <v-container class="fill-height">
    <v-responsive class="align-center fill-height">
      <div v-if="list">
        <v-list lines="two">
          <v-list-item v-for="broker in list" :key="broker.id">
            <v-img :src="`/logos/${broker.logo}`" :alt="broker.name"></v-img>
            <p>{{ broker.id }}</p>
            <p>{{ broker.name }}</p>
            <p>{{ broker.country }}</p>
            <a :href="broker.contact" target="_blank">Contact</a>
          </v-list-item>
        </v-list>
      </div>

      <div v-if="error">
        {{ error }}
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup lang="ts">
  import { useStore, Broker } from '@/plugins/store';
  import { useAxios } from '@/composables/useAxios';

  const store = useStore();
  const { data, error } = await useAxios<{ list: Broker[] }>('brokers.json');

  store.commit('setList', data.value ? data.value.list : []);

  let list = store.state.brokerList;
</script>
