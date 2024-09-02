<script lang="ts">
    import Station from "$lib/components/Station.svelte";
    import Sensor from "$lib/components/Sensor.svelte";
    import type {StationProps} from "$lib/types";

    export let data: {stations: StationProps[]};

    // FIXME
</script>

<svelte:head>
    <title>Czujniki</title>
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
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-around;
    }
</style>
