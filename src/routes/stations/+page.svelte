<script lang="ts">
    import Station from "$lib/components/Station.svelte";
    import Sensor from "$lib/components/Sensor.svelte";
    import type {StationProps} from "$lib/types";

    export let data: {stations: StationProps[]};

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
        width: 100%;
    }

    .cards {
        max-width: 96%;
        margin: 0 auto;
        display: grid;
        grid-gap: 10rem;
        border-radius: 25px;
        padding: 10px;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .cards:has(> div:only-child) {
        justify-items: center;
        align-items: center;
        display: flex;
        width: 100%;
    }


    @media (min-width: 500px) {
        .cards {
            grid-template-columns: repeat(1, 1fr);
        }
    }

    @media (min-width: 1000px) {
        .cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
