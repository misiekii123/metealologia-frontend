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
        width: 40%;
        border-radius: 10px;
        transition: background-color 0.3s, box-shadow 0.3s;
    }

    @media (max-width: 768px) {
        div {
            width: 100%;
            margin: 0;
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