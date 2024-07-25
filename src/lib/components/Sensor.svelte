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
    {#if reports == null}
        <p>Ładowanie...</p>
        <!-- TODO tu może być pusty chart to będzie fajna animacja wjeżdżania danych-->
        <!-- TODO powinna być stała wielkość placeholderu i chartu, żeby się nie rozkładało UI-->
    {:else}
        {#if data.type === "temperature"}
            <LineChart value="Temperatura [°C]" reports={reports} />
        {:else}
            <p>Typ czujnika '{data.type}' nie jest obsługiwany przez stronę.</p>
        {/if}
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
