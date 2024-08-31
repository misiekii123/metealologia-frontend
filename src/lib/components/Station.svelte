<script lang="ts">
    import Sensor from "$lib/components/Sensor.svelte";
    import type {StationProps} from "$lib/types";

    export let data: StationProps;
</script>

<div>
    <h2>{data.name}</h2>
    {#each data.sensors as sensor}
        <Sensor data={sensor} station={data.id} />
    {/each}
</div>


<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 2rem;
        border-radius: 25px;
        margin: 10px;
        background-color: var(--color-bg-2);
        color: var(--color-text-2);
    }

    div.dark {
        background-color: var(--color-bg-2-darker);
    }

    div {
        @media (min-width: 250px) {
            min-width: 12rem;
            padding: 1rem;
            margin: 5px;
        }
        @media (min-width: 500px) {
            min-width: 15rem;
            padding: 2rem;
            margin: 10px;
        }
        @media (min-width: 1000px) {
            min-width: 20rem;
            padding: 2rem;
            margin: 10px;
        }
        @media (min-width: 1500px) {
            min-width: 35rem;
            padding: 2rem;
            margin: 10px;
        }
        @media (min-width: 1800px) {
            min-width: 42rem;
            padding: 2rem;
            margin: 10px;
        }
    }
</style>