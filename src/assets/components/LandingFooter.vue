<script setup lang="ts">
import DownloadButton from './DownloadButton.vue';
</script>

<template>
    <footer>
        <aside class="text">
            <a class="mainLink" href="#header">Finance App</a>
            <article class="githubLinks">
                <a href="https://github.com/oriioll/finance-app" target="_blank">Explore the App on GitHub</a>
                <a href="https://github.com/oriioll/financeApp-landing" target="_blank">Explore the Landing Page on
                    GitHub</a>
            </article>
        </aside>
        <DownloadButton />
    </footer>
</template>

<style scoped>
footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 2rem;
}

footer .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1.5rem;
}

.githubLinks {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: var(--light);
}

.githubLinks a {
    color: var(--light);
}

footer .mainLink {
    color: var(--accent-green);
    font-weight: bold;
    text-decoration: none;
    font-size: 1.5rem;
}


@media (max-width: 800px) {

    footer .mainLink,
    .githubLinks a {
        font-size: .8rem;
    }
}
</style>
