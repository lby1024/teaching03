import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "../hooks/use-data";
import { IData, num } from "../utils/api";

const xAxisData = ['前测', '问卷', '讨论', '头脑风暴', '投票']

const option: any = {
    textStyle: {
        // fontSize: 240,
        color: '#79839E'
    },
    xAxis: {
        type: 'category',
        data: xAxisData,
        axisTick: { show: false },
        axisLabel: {
            formatter: (v: string) => v.split("").join("\n")
        },
        axisLine: {
            lineStyle: { color: '#083B70' }
        },
    },
    yAxis: {
        type: 'value',
        splitLine: { show: false },
        axisLine: {
            show: true,
            lineStyle: { color: '#083B70' }
        },
    },
    grid: {
        left: 50,
        right: 30,
        top: 30,
        bottom: 60,
    },
    series: [{
        data: [num(50), num(50), num(50), num(50), num(50)],
        type: 'bar',
        barWidth: 36,
        itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#b72be8' },
                { offset: 1, color: '#6a70e7' }
            ])
        },
    }]
};

export function useRes() {
    const chart = useRef<echarts.ECharts>()
    const dom = useRef<any>()
    const [data] = useData<IData>(getData, 3000)

    useEffect(() => {
        if (!data) return
        let o = { ...option }
        o.xAxis.data = data.x
        o.series[0].data = data.series
        chart.current?.setOption(o)
    }, [data])


    useEffect(() => {
        chart.current = echarts.init(dom.current)
    }, [])

    return [dom]
}


function getData(): Promise<IData> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                x: xAxisData,
                series: [num(50), num(50), num(50), num(50), num(50)]
            })
        }, 500)
    })
}