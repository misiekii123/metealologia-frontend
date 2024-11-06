<script lang="ts">
    import Station from "$lib/components/Station.svelte";
    import type {StationMeta} from "$lib/rest";

    export let data: {stations: StationMeta[]};
</script>

<svelte:head>
    <title>Stacje pogodowe - MeteALOlogia</title>
</svelte:head>

<h1>Stacje pogodowe</h1>
<div class="cards">
    {#if data.stations.length > 0}
        {#each data.stations as station}
            <Station data={station}/>
        {/each}
    {:else}
        <p>Tu jeszcze nic nie ma, ale coś się gotuje. W międzyczasie możesz przeczytać devlog na <a href="/">Stronie Głównej</a>.</p>
    {/if}
</div>

<style>
    h1 {
        margin-top: 5rem;
        width: 100%;
    }

    .cards {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        gap: 1.5rem;
        align-items: center;
    }
</style>
