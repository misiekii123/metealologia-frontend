<script lang="ts">
    import type {SensorProps, SensorReport} from "$lib/types";
    import {onMount} from "svelte";
    import LineChart from "$lib/components/LineChart.svelte";

    export let data: SensorProps;
    export let station: string;

    let reports: SensorReport[] | null = null;

    async function getReports() {
        const report_url = new URL(`/stations/${station}/sensors/${data.id}/reports`, import.meta.env.VITE_BACKEND_ADDRESS).href
        // TODO niech fetchuje ostatni miesiąc
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
    {#if data.type === "temperature"}
        {#if reports === null}
            <LineChart value="Temperatura [°C]" reports={[]} range={{min: -21, max: 37}}/>
        {:else}
            <LineChart value="Temperatura [°C]" reports={reports} range={{min: -21, max: 37}}/>
        {/if}
    {:else}
        <p>Typ czujnika '{data.type}' nie jest obsługiwany przez stronę.</p>
    {/if}
</div>

<style>
    div {
        min-width: 30rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        padding: 2rem;
        border-radius: 25px;
    }

    div {
        @media (min-width: 500px) {
            min-width: 20rem;
        }
        @media (min-width: 1000px) {
            min-width: 15rem;
        }
        @media (min-width: 1500px) {
            min-width: 25rem;
        }
        @media (min-width: 1800px) {
            min-width: 32rem;
        }
    }
</style>
