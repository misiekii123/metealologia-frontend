<script lang="ts">
    import chartjs from 'chart.js';
    import type { SensorProps, chartProps } from "$lib/types";
    import { onMount } from "svelte";

    export let chartData: SensorProps;
    export let reports: chartProps;

    let ctx;
    let chartCanvas;

    onMount(() => {
        const formattedReports = reports.flatMap(report => {
            return report.data.temperature.map((value, index) => ({
                x: new Date(new Date(report.timestamp).getTime() + index * 60000), // Adding index * 60000ms (1 minute)
                y: value
            }));
        });

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
