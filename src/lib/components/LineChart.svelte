<script lang="ts">
    import type { SensorProps, SensorReport } from "$lib/types";
    import { onMount } from "svelte";
    import Chart from 'chart.js/auto';
    import 'chartjs-adapter-date-fns';

    export let value: string;
    export let reports: SensorReport[];
    export let range: {min: number, max: number};

    let ctx;
    let chartCanvas: HTMLCanvasElement;

    const now = Date.now()
    const monthBefore = new Date(
        new Date().getFullYear(),
        new Date().getMonth() - 1,
        new Date().getDate()
    ).getTime()

    onMount(() => {
        const formattedReports = reports.map(report => ({
            x: new Date(report.timestamp),
            y: report.data.temperature
        }));
        console.log(formattedReports)
        ctx = chartCanvas.getContext("2d") as CanvasRenderingContext2D;
        new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: value,
                    data: formattedReports,
                    backgroundColor: 'rgba(255,62,0,0.21)',
                    borderColor: 'rgb(255,62,0)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        type: 'time',
                        time: {
                            unit: 'day' // Adjust the unit to 'minute', 'hour', 'day', etc., as needed
                        },
                        title: {
                            display: true,
                            text: 'Data'
                        },
                        max: now,
                        min: monthBefore
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: value
                        },
                        min: -21,
                        max: 37
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    });
</script>

<canvas bind:this={chartCanvas} id="sensorChart"></canvas>