<script lang="ts">
    import Station from "$lib/components/Station.svelte";
    import Sensor from "$lib/components/Sensor.svelte";
    import type {StationProps} from "$lib/types";

    export let data: {stations: StationProps[]};
</script>

<svelte:head>
    <title>Pogoda</title>
</svelte:head>

<h1>Stacje pogodowe</h1>
<div class="cards">
    {#each data.stations as station}
        <Station data={station}/>
    {/each}
</div>

<style>
    h1 {
        margin-top: 5rem;
        width: 100%;
    }

    .cards {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        margin: 1rem;
    }

</style>
