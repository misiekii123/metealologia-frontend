<script lang="ts">
    import Sensor from "$lib/components/Sensor.svelte";
    import type {StationMeta} from "$lib/rest";

    export let data: StationMeta;
</script>

<div>
    <h2>{data.name}</h2>
    {#each data.sensors as sensor}
        <Sensor data={sensor} station={data.id} />
    {/each}
</div>


<style>
    div {
        background-color: #fff;
        border-radius: 10px;
        padding: 2rem;
        width: auto;
        min-width: 600px;
        height: 400px;
        margin: 0.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s, box-shadow 0.3s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    @media (max-width: 1000px) {
        div {
            width: 100%;
            margin: 2rem 0 0;
            min-width: 400px;
        }
    }

    @media (prefers-color-scheme: dark) {
        div {
            background-color: #2c2c2e;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }
        div:hover {
            box-shadow: 0 6px 18px rgba(0, 0, 0, 0.7);
        }
    }
</style>