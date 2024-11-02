<script lang="ts">
    import {onMount} from "svelte";
    import LineChart from "$lib/components/LineChart.svelte";
    import {fetchReports, type SensorMeta, type SensorReport} from "$lib/rest";

    export let data: SensorMeta;
    export let station: string;

    let reports: SensorReport[] = [];

    onMount(async () => {
        const weekBefore = new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            new Date().getDate() - 7
        )
        reports = await fetchReports(station, data.id, new Date(), weekBefore);
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
        display: block;
        flex-direction: column;
        min-width: 500px;
    }

    @media (max-width: 1000px) {
        div {
            width: 100%;
            margin: 2rem 0 0;
            min-width: 400px;
        }
    }
</style>
