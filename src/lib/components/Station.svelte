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
    }

    @media (min-width: 500px) {
        div {
            min-width: 20rem;
        }
    }

    @media (min-width: 1000px) {
        div {
            min-width: 35rem;
        }
    }
</style>