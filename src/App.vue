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
          <div class="d-flex flex-column align-center py-4">
            <p class="font-weight-bold font-size-large">This is the test task for <a href="https://opensky.biz">OpenSky</a></p>
            <p class="font-weight-bold font-size-large">Made by Me =) <a href="https://github.com/adamcokay">GitHub</a>, <a
                href="htpps://linkedin.com/in/adamcokay">LinkedIn</a></p>
          </div>
        </v-responsive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import BrokerList from '@/components/BrokerList.vue'
</script>
