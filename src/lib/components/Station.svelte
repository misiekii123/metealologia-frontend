<script lang="ts">
    import Sensor from "$lib/components/Sensor.svelte";
    import type {StationProps} from "$lib/types";

    export let data: StationProps;
</script>

<div>

<p>id: {data.id}<br>name: {data.name}</p>
<p>Stations:</p>
{#each data.sensors as sensor}
    <Sensor data={sensor} station={data.id} />
{/each}

</div>

<style>
    div {
        border: solid;
        width: 50%;
        text-align: center;
        margin: 10px;
    }
</style>