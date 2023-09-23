<template>
  <div v-if="list">
    <v-row>
      <v-col cols="12" md="6">
        <h1>Broker list</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="broker in list" :key="broker.id" cols="12" md="4">
        <BrokerListItem :id="broker.id" :name="broker.name" :logo="broker.logo" :country="broker.country"
          :contact="broker.contact" />
      </v-col>
    </v-row>
  </div>

  <div v-if="error">
    {{ error }}
  </div>
</template>

<script setup lang="ts">
import { useStore, Broker } from '@/plugins/store';
import { useAxios } from '@/composables/useAxios';
import BrokerListItem from './BrokerListItem.vue';

const store = useStore();
const { data, error } = await useAxios<{ list: Broker[] }>('brokers.json');

store.commit('setList', data.value ? data.value.list : []);

let list = store.state.brokerList;
</script>
