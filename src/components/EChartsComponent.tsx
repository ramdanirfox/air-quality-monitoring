import * as echartSolid from "echarts-solid";
import * as ec from "echarts";
import { onCleanup, onMount } from "solid-js";

interface EChartsCmpProps {
    xdata: number[];
    xlabels: string[];
}

export const EChartsComponent = (props: EChartsCmpProps) => {
    let obs: ResizeObserver;
    let chartInstance: ec.EChartsType;
    let el: HTMLDivElement;
    onMount(() => {
        // obs = new ResizeObserver((a) => {});
        // obs.observe(document.body);
    })
    onCleanup(() => {
        obs.unobserve(el);
        obs.disconnect();
    })


    const fnOnEChartReady = (chart: ec.EChartsType) => {
        fnIterativelyUpdateData();
    }

    const fnIterativelyUpdateData = () => {
        if (chartInstance) {
           setTimeout(() => {
                chartInstance.setOption({
                    series: [
                        {
                            // data: [120, 200, 150, 80, 70, 110, 130, Math.round((Math.random() * 200))],
                            data: props.xdata,
                            name: "ppm"
                        }
                    ],
                    xAxis: {
                        // data: ["15:00:10", "15:00:20", "15:00:30", "15:00:40", "15:00:50", "15:01:00", "15:01:" + (Math.random() * 10).toFixed(2)]
                        data: props.xlabels
                    }
                });
                fnIterativelyUpdateData();
           }, 1000);
        }
    }

    return (
        <div class="flex-1 max-h-full" ref={(e) => el = e}>
            <echartSolid.ECharts
                onInit={(chart) => {
                    obs = new ResizeObserver(() => {
                        requestAnimationFrame(() => {
                            chart.resize();
                        });
                    });
                    obs.observe(el);
                    chartInstance = chart;
                    fnOnEChartReady(chart);
                }}
                class="h-full"
                option={{
                    xAxis: {
                        type: "category",
                        data: ["00:00:00", "00:00:10"]
                    },
                    yAxis: {
                        type: "value",
                        axisLabel: {
                            show: true,
                            color: "#FFF"
                        },
                        // name: "PPM"
                    },
                    animation: true,
                    visualMap: {
                        show: false,
                        top: 50,
                        right: 10,
                        pieces: [
                          {
                            gt: 0,
                            lte: 100,
                            color: '#EEE'
                          }
                        ],
                        outOfRange: {
                          color: '#F00'
                        }
                      },
                    series: [
                        {
                            name: "ppm",
                            data: [1, 0],
                            type: "line",
                            smooth: true,
                            // markArea: {
                            //     itemStyle: {
                            //       color: 'rgba(255, 173, 177, 0.4)'
                            //     },
                            //     data: [
                            //       [
                            //         {
                            //           name: 'Above Threshold',
                            //           xAxis: "Wed"
                            //         },
                            //         {
                            //           xAxis: 'Sat'
                            //         }
                            //       ]
                            //     ]
                            //   }
                            markLine: {
                                lineStyle: {
                                    color: '#F00'
                                },
                                data: [
                                    {
                                        yAxis: 100
                                    }
                                ]
                            }
                        },
                    ],
                    responsive: true,
                    maintainAspectRatio: false,
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "cross"
                        }
                    },
                }}
                width={"auto"}
                height={"auto"}
            />
        </div>
    );
};

export default EChartsComponent;