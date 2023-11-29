'use client'

import EChartsReact from "echarts-for-react";

export default function Chart() {
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            display: false
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: false
        },
        xAxis: [
            {
                type: 'category',
                data: []
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: [20, 80, 71, 80, 90]
            }
        ]
    }

    return (
        <EChartsReact option={option} className="w-24 h-24 max-h-24" />
    )
}