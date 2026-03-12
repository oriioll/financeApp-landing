<script setup lang="ts">
</script>

<template>
    <button>Features</button>
</template>

<style scoped>
button {
    font-family: var(--font-main);
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--light);
    background-color: transparent;
    border: solid 2px var(--light);
    border-radius: 10px;
    padding: .75rem .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    transition: all .3s ease-out;
    box-shadow: 0 4px 12px rgba(52, 168, 83, 0.15);
}

button:hover {
    cursor: pointer;
    transform: translateY(-2px);
}

button svg {
    height: 2rem;
    width: 2rem;
}

@media (max-width: 800px) {
    button {
        font-size: .8rem;
        font-weight: bold;
        border-radius: 10px;
        padding: .6rem .5rem;
        gap: .5rem;
    }

    button svg {
        height: 1.5rem;
        width: 1.5rem;
    }
}
</style>
