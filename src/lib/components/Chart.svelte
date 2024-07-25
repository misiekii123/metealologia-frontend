<script lang="ts">
    import chartjs from 'chart.js';
    import type { SensorProps, Report } from "$lib/types";
    import { onMount } from "svelte";

    export let chartData: SensorProps;
    export let reports: Report[];

    let ctx;
    let chartCanvas;

    onMount(() => {
        const formattedReports = reports.map(report => ({
            x: new Date(report.timestamp),
            y: report.data.value
        }));

        ctx = chartCanvas.getContext("2d");
        new chartjs(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: chartData.type,
                    backgroundColor: '#ff3e00',
                    borderColor: '#ff3e00',
                    data: formattedReports
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'minute'
                        }
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });
</script>

<canvas bind:this={chartCanvas} id="sensorChart"></canvas>
