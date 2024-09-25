<script lang="ts">
    import Station from "$lib/components/Station.svelte";
    import type {StationMeta} from "$lib/rest";

    export let data: {stations: StationMeta[]};
</script>

<svelte:head>
    <title>MeteALOlogia: pogoda</title>
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
