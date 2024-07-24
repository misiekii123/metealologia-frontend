<script lang="ts">
    import Station from "$lib/components/Station.svelte";
    import Sensor from "$lib/components/Sensor.svelte";
    import type {StationProps} from "$lib/types";

    export let data: {stations: StationProps[]};

</script>

<svelte:head>
    <title>Czujniki</title>
</svelte:head>

<section>
    <h1>
		Czujniki
    </h1>
    {#each data.stations as station}
        <Station data={station}/>
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 0.6;
    }

    h1 {
        width: 100%;
    }

    .welcome {
        display: block;
        position: relative;
        width: 100%;
        height: 0;
        padding: 0 0 calc(100% * 495 / 2048) 0;
    }

    .welcome img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        display: block;
    }
</style>
