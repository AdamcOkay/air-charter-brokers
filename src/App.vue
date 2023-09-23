<template>
  <v-app>
    <v-main>
      <v-container class="fill-height">
        <v-responsive class="align-center fill-height">
          <Suspense>
            <v-container>
              <BrokerList />
            </v-container>

            <template #fallback>
              <h1 class="text-center">Loading...</h1>
            </template>
          </Suspense>
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import BrokerList from '@/components/BrokerList.vue'
</script>
