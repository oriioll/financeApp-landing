<script setup lang="ts">
</script>

<template>
    <section id="features-section" class="grid">
        <article class="tracking">
            <div class="text">
                <h3>Visual movements</h3>
                <p>Keep a clean and organized record of every cent. Categorize your spending in seconds.</p>
            </div>
            <hr>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                <path fill="#34D399"
                    d="M14.5 4H2.38a1 1 0 0 1-1.19-.982v-.019L14 2.5V1.31A1.18 1.18 0 0 0 12.684.001L1.31 1.85A2 2 0 0 0 0 3.727v10.772a1.5 1.5 0 0 0 1.5 1.5h13a1.5 1.5 0 0 0 1.5-1.5v-9.01l.001-.041a1.45 1.45 0 0 0-1.45-1.45l-.053.001zM13 11a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 13 11" />
            </svg>
        </article>
        <article class="cloud">
            <div class="text">
                <h3>Cloud Sync</h3>
                <p>Powered by Supabase. Your financial data is securely stored in the cloud and synced across devices
                    instantly.</p>
            </div>
            <hr>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                <g fill="none">
                    <path
                        d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill="#34D399"
                        d="M11.132 13.004a1 1 0 0 1 1.788.888l-.052.104L11.723 16h2.105a1.1 1.1 0 0 1 1.006 1.545l-.051.1l-1.915 3.351a1 1 0 0 1-1.788-.888l.052-.104L12.277 18h-2.105a1.1 1.1 0 0 1-1.006-1.545l.051-.1zM11.5 2a6.5 6.5 0 0 1 6.086 4.212a6.002 6.002 0 0 1-.773 11.733c.449-1.555-.41-3.198-1.894-3.751a3.001 3.001 0 0 0-5.524-2.182l-1.914 3.35A3.06 3.06 0 0 0 7.273 18H7a5 5 0 0 1-2-9.584A6.5 6.5 0 0 1 11.5 2" />
                </g>
            </svg>
        </article>
        <article class="glassmorphism">
            <div class="text">
                <h3>Modern Experience</h3>
                <p>A stunning interface built with Kotlin & Jetpack Compose. Experience the smoothness of modern Android
                    design.</p>
            </div>
            <hr>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="-1 -2 24 24">
                <path fill="#34D399"
                    d="m15.092 8.02l-2.829-2.828L16.506.95a1 1 0 0 1 1.414 0l1.415 1.414a1 1 0 0 1 0 1.414l-4.243 4.243zm-1.414 1.415l-9.9 9.9a1 1 0 0 1-1.414 0L.95 17.92a1 1 0 0 1 0-1.414l9.9-9.9zM8.728.243l1.393.704l1.435-.704l-.679 1.46l.68 1.368l-1.384-.664l-1.445.664l.689-1.42zm9.9 7.07l1.393.705l1.435-.704l-.68 1.46l.68 1.368l-1.384-.664l-1.445.664l.69-1.42l-.69-1.408z" />
            </svg>
        </article>
    </section>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 1.5rem;
    width: 80%;
    padding: 3rem;
    padding-top: 8rem;
}

.grid article {
    background-color: transparent;
    border: solid 2px var(--accent-green);
    border-radius: 10px;
    padding: 1rem;
    color: var(--light);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    transition: all 0.3s ease-out;
}

.grid article:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(52, 211, 153, 0.3);
    border-color: rgba(52, 211, 153, 1);
    filter: brightness(1.1);
}

article svg {
    height: 10rem;
    width: 10rem;
}

article hr {
    width: 4px;
    border-radius: 10px;
    border: none;
    color: var(--accent-green);
    background: var(--accent-green);
    height: 100%;
}

h3 {
    color: var(--accent-green);
    font-weight: 700;
    letter-spacing: -0.02em;
    padding-bottom: 1rem;
}

@media (max-width: 800px) {
    .grid {
        width: 90%;
        padding-top: 8rem;
        padding-left: .5rem;
        padding-right: .5rem;
    }

    .grid article {
        padding: .75rem 1rem;
        gap: 2rem;
    }
}
</style>
