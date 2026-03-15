<script setup lang="ts">
import DownloadButton from './DownloadButton.vue';
import FeaturesButton from './FeaturesButton.vue';
</script>

<template>
    <section class="hero">
        <section class="text">
            <h1>Simplify your <span class="green">spending.</span></h1>
            <p>A minimalist financial tracker built with <strong class="green">Kotlin</strong> and <strong
                    class="green">Supabase</strong>.
                Experience seamless cloud sync with a stunning Glassmorphism interface.</p>
            <div class="ctas">
                <DownloadButton />
                <FeaturesButton />
            </div>
        </section>
        <section class="mockup">
            <img src="/public/images/financeMockup.webp" alt="">
        </section>
    </section>
</template>

<style scoped>
.hero {
    width: 100%;
    padding: 3rem;
    padding-top: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}

.text {
    width: 50%;
}

.mockup {
    width: 30%;
}

.mockup img {
    aspect-ratio: 16/9;
    object-fit: contain;
    width: 100%;
    height: auto;
    border-radius: 12px;
}

.ctas {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
}

.green {
    color: var(--accent-green)
}

@media (max-width: 800px) {
    .hero {
        width: 100%;
        padding-top: 8rem;
        padding-left: .5rem;
        padding-right: .5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .text {
        width: 90%;
    }

    .mockup {
        width: 70%;
    }
}
</style>
