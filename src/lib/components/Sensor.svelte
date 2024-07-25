<script lang="ts">
    import type {SensorProps} from "$lib/types";
    import {onMount} from "svelte";
    import Chart from "$lib/components/Chart.svelte";

    export let data: SensorProps;
    export let station: string;

    let reports: any[] | null = null;

    async function getReports() {
        const report_url = new URL(`/stations/${station}/sensors/${data.id}/reports`, import.meta.env.VITE_BACKEND_ADDRESS).href
        const response = await fetch(report_url)
        const reports = await response.json();
        return reports;
    }

    onMount(async () => {
        reports = await getReports()
    })

</script>

<div>
    <p>{data.name}</p>
    {#if reports == null}
        <p>Ładowanie...</p>
    {:else}
<!--        <p>{JSON.stringify(reports)} ({data.type})</p>-->
        <Chart chartData={data} reports={reports} />
    {/if}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 2rem;
        border-radius: 25px;
    }

    @media (min-width: 500px) {
        div {
            min-width: 20rem;
        }
    }

    @media (min-width: 1000px) {
        div {
            min-width: 25rem;
        }
    }
</style>
