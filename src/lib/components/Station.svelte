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
        text-align: center;
        width: 45%;
        box-sizing: border-box;
        padding: 2rem;
        border-radius: 25px;
        background-color: var(--color-bg-2);
        color: var(--color-text-2);
        margin: 2rem;
    }

    @media (max-width: 1000px) {
        div {
            width: 100%;
            margin: 0;
            margin-top: 2rem;
        }
    }

    /*div {*/
    /*    @media (min-width: 250px) {*/
    /*        min-width: 12rem;*/
    /*        padding: 1rem;*/
    /*        margin: 5px;*/
    /*    }*/
    /*    @media (min-width: 1800px) {*/
    /*        !*flex: 80%;*!*/
    /*        padding: 2rem;*/
    /*        margin: 10px;*/
    /*    }*/
    /*}*/
</style>