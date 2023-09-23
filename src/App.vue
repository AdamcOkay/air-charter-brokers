<template>
  <v-app>
    <v-main>
      <Suspense>
        <BrokerList />

        <template #fallback>Loading</template>
      </Suspense>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import BrokerList from '@/components/BrokerList.vue'
</script>
