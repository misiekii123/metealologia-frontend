<script lang="ts">
    import type {SensorProps} from "$lib/types";

    export let data: SensorProps;
    export let station: string;

    async function getReports() {
        const response = await fetch(`http://localhost:8080/stations/${station}/sensors/${data.id}/reports`)
        const reports = await response.json();
        return reports;
    }

</script>

<p>id: {data.id}<br>name: {data.name}<br>type:{data.type}</p>
{#await getReports()}
    <p>Loading...</p>
    {:then reports}
    <p>{JSON.stringify(reports)}</p>
{/await}