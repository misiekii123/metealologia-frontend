<script lang="ts">
    import { onMount } from "svelte";
    import Chart from 'chart.js/auto';
    import 'chartjs-adapter-date-fns';
    import type { SensorReport } from "$lib/rest";

    export let title: string;
    export let reports: SensorReport[];
    export let range: { min: number, max: number };
    export let dataType: string[];
    export let fill: boolean;
    export let legend: boolean;

    let chartCanvas: HTMLCanvasElement;
    let ctx: CanvasRenderingContext2D | null = null;
    let chart: Chart | null = null;
    let gradient: CanvasGradient;
    let datasets: any[] = [];

    const now = Date.now();
    const weekBefore = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate() - 7
    ).getTime();

    function getColors() {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return {
            gridColor: isDarkMode ? "#ffffff" : "#000000",
            legendColor: isDarkMode ? "#e4e4e7" : "#000000",
            valuesColor: isDarkMode ? "#e4e4e7" : "#000000"
        };
    }

    $: {
        if (ctx === null) break $;

        datasets = [];
        gradient = ctx.createLinearGradient(0, 0, 0, chartCanvas.height);
        gradient.addColorStop(0, 'rgba(255, 181, 48, 1)');
        gradient.addColorStop(1, 'rgba(255, 181, 48, 0)');

        if (dataType.length > 1) {
            /* TODO
            * I have no idea what the fuck is going on here, and I'm absolutely not happy about it
            * Consider using a foreach loop or something, if there's any hope of turning this shit readable
            *
            * Sincerely, your dear backend developer and collaborator */

            let colors: any[] = ['#ffa300', '#ffc851', '#ffe0b0'];
            for (let i = 0; i < dataType.length; i++) {
                const formattedReports = reports.map(report => ({
                    x: new Date(report.timestamp).getTime(),
                    y: report.data[dataType[i]]
                }));
                datasets.push({
                    label: dataType[i],
                    data: formattedReports,
                    backgroundColor: colors[i],
                    borderColor: colors[i],
                    borderWidth: 6,
                    pointBorderWidth: 4,
                    fill: fill,
                });
            }
        } else {
            const formattedReports = reports.map(report => ({
                x: new Date(report.timestamp).getTime(),
                y: report.data[dataType[0]]
            }));
            datasets.push({
                label: title,
                data: formattedReports,
                backgroundColor: gradient,
                borderColor: '#ffb530',
                borderWidth: 6,
                pointBorderWidth: 4,
                fill: fill,
            });
        }

        if (chart !== null) { chart.destroy(); }
        const colors = getColors();
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: datasets
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            color: colors.valuesColor,
                        },
                        type: 'time',
                        time: {
                            unit: 'day',
                            displayFormats: {
                                day: 'dd.MM'
                            }
                        },
                        title: {
                            display: true,
                            text: 'Data',
                            color: colors.valuesColor
                        },
                        max: now,
                        min: weekBefore,
                        grid: {
                            color: colors.gridColor
                        }
                    },
                    y: {
                        ticks: {
                            color: colors.valuesColor,
                        },
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: title,
                            color: colors.valuesColor
                        },
                        min: range.min,
                        max: range.max,
                        grid: {
                            color: colors.gridColor
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: legend,
                        labels: {
                            color: colors.legendColor
                        }
                    }
                }
            }
        });
    }

    onMount(() => {
        ctx = chartCanvas.getContext("2d") as CanvasRenderingContext2D;

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const updateChartColors = () => {
            if (chart) {
                const colors = getColors();
                chart.options.scales!.x!.grid!.color = colors.gridColor;
                chart.options.scales!.y!.grid!.color = colors.gridColor;
                chart.options.plugins!.legend!.labels!.color = colors.legendColor;
                chart.update();
            }
        };

        mediaQuery.addEventListener("change", updateChartColors);

        return () => {
            mediaQuery.removeEventListener("change", updateChartColors);
        };
    });
</script>

<p>{title}</p>
<canvas bind:this={chartCanvas} id="sensorChart"></canvas>
