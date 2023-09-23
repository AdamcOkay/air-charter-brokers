<template>
  <div v-if="error">
    <v-row class="justify-center">
      <v-alert type="error" title="An error has occured" :text="error.message"></v-alert>
    </v-row>
  </div>

  <div v-if="list && !error">
    <v-row>
      <v-col cols="12" md="6">
        <h1>Broker list</h1>
      </v-col>
      <v-col cols="12" md="6">
        <v-select label="Select a country to filter" :items="brokerCountries" :model-value="filterValue"
          @update:model-value="onSelectChange"></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="broker in list" :key="broker.id" cols="12" md="4">
        <BrokerListItem :id="broker.id" :name="broker.name" :logo="broker.logo" :country="broker.country"
          :contact="broker.contact" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore, Broker } from '@/plugins/store';
import { useAxios } from '@/composables/useAxios';
import BrokerListItem from './BrokerListItem.vue';

const store = useStore();
const { data, error } = await useAxios<{ list: Broker[] }>('brokers.json');

store.commit('setList', data.value ? data.value.list : []);

const list = ref(store.state.brokerList);
const filterValue = ref('All');
const brokerCountries = store.getters.countries;


const onSelectChange = (country: string) => {
  filterValue.value = country;
  list.value = store.getters.filteredListByCountry(country);
}
</script>
