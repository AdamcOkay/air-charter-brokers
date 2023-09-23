<template>
    <div class="broker-card">
        <div class="broker-card__image d-flex justify-center pa-4">
            <img :src="`/logos/${logo}`" :alt="name" />
        </div>
        <div class="broker-card__info d-flex align-center justify-space-between pt-2">
            <p class="broker-card__metadata font-weight-bold">{{ id }}</p>
            <p class="broker-card__metadata font-weight-bold">{{ country }}</p>
        </div>
        <div class="broker-card__hero py-4 px-2">
            <h2 class="mb-4 text-center">{{ name }}</h2>
            <v-btn
                :href="contact" 
                target="_blank"
                class="broker-card__link"
                size="small"
                color="#00ADB5"
            >
                Contact
            </v-btn>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { Broker } from '@/plugins/store';

const props = defineProps<Broker>();
const { id, name, logo, country, contact } = props;
</script>
  
<style lang="scss">
.broker-card {
    overflow: hidden;
    border-radius: 0.25rem;
}

.broker-card__image {
    background-color: #94dee1;
    height: 5rem;
}

.broker-card__metadata {
    color: #718d8e;
}

.broker-card__link {
    width: 100%;
    box-shadow: none;
}
</style>