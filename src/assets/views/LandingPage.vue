<script setup lang="ts">
import LandingFeatures from '../components/LandingFeatures.vue';
import LandingFooter from '../components/LandingFooter.vue';
import LandingHeader from '../components/LandingHeader.vue';
import LandingHero from '../components/LandingHero.vue';
</script>

<template>
    <LandingHeader />
    <main>
        <LandingHero />
        <LandingFeatures />
    </main>
    <LandingFooter />
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
