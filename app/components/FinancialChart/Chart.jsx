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
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['17/05', '18/05', '19/05', '20/05', '21/05', '22/05', '23/05', '24/05', '25/05', '26/05', '27/05']
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
                data: [20020, 8032, 7001, 8034, 9000, 2030, 2010, 2040, 1080, 1900, 3385]
            },
            {
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: [2200, 1082, 1091, 2034, 2900, 3030, 3010, 2050, 2020, 3000, 4859]
            },
            {
                type: 'bar',
                stack: 'Ad',
                emphasis: {
                    focus: 'series'
                },
                data: [2050, 2032, 2001, 1054, 1090, 3030, 4010, 3040, 2025, 4030, 5678]
            },
        ]
    }

    return (
        <EChartsReact option={option} className="w-full md:w-4/6" />
    )
}