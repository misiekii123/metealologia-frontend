<script lang="ts">
    import type {SensorProps, SensorReport} from "$lib/types";
    import {onMount} from "svelte";
    import LineChart from "$lib/components/LineChart.svelte";

    export let data: SensorProps;
    export let station: string;

    let reports: SensorReport[] = [];

    async function getReports() {
        const now = Date.now()
        const monthBefore = new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 1,
            new Date().getDate()
        ).getTime()
        const report_url = new URL(`/stations/${station}/sensors/${data.id}/reports?after=${monthBefore}&before=${now}`, import.meta.env.VITE_BACKEND_ADDRESS).href
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
        <LineChart value="Temperatura [°C]" reports={reports} range={{min: -21, max: 37}} dataType={[data.type]} fill={false} legend={false}/>
    {:else if data.type === "pressure"}
        <LineChart value="Ciśnienie [hPa]" reports={reports} range={{min: 900, max: 1100}} dataType={[data.type]} fill={true} legend={false}/>
    {:else if data.type === "air-polution"}
        <LineChart value="Zanieczyszczenie powietrza [µg/m³]" reports={reports} range={{min: 0, max: 100}} dataType={["pm1.0", "pm2.5", "pm10"]} fill={false} legend={true}/>
    {:else if data.type === "humidity"}
        <LineChart value="Wilgotność [%]" reports={reports} range={{min: 0, max: 100}} dataType={[data.type]} fill={false} legend={false}/>
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
