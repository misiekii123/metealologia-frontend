<script lang="ts">
    import Sensor from "$lib/components/Sensor.svelte";

    export let data;
</script>

<div>

<p>id: {data.id}<br>name: {data.name}</p>
<p>Stations:</p>
{#each data.sensors as sensor}
    <Sensor data={sensor} />
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