import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "../hooks/use-data";
import { IData03, num } from "../utils/api";

const option: any = {
  title: {
    text: '课后拓展学',
    left: 100,
    top: 0,
    textStyle: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#fff'
    }
  },
  xAxis: {
    type: 'category',
    data: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
    splitLine: { show: true, lineStyle: { color: "#073e78" } },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { interval: 0, fontSize: 9 },
    boundaryGap: false,
  },
  yAxis: {
    type: 'value',
    axisTick: { show: false },
    axisLine: { show: false },
    splitLine: { show: true, lineStyle: { color: "#073e78" } },
    axisLabel: {
      fontSize: 9,
      formatter: (v: number) => v * 100 + "%"
    },
  },
  series: [{
    data: [0.3, 0.2, 0.7, 0.5, 0.3, 0.2, 0.7, 0.5, 0.3, 0.2, 0.7, 0.5, 0.3],
    type: 'line',
    symbol: "circle",
    symbolSize: 6,
    lineStyle: { width: 1 },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(58,77,233,0.8)' },
        { offset: 1, color: 'rgba(58,77,233,0.3)' }
      ])
    }
  }],
  grid: {
    left: 20,
    right: 20,
    top: 30,
    bottom: 30,
    containLabel: true
  },
};

export function useAfter() {
  const myChart = useRef<echarts.ECharts>()
  const chart = useRef<any>()
  const [data] = useData<IData03>(getData, 7000)

  useEffect(() => {
    if (!data) return
    let o = { ...option }
    o.xAxis.data = data.x
    o.series[0].data = data.series[0]
    myChart.current?.setOption(o)
  }, [data])

  useEffect(() => {
    myChart.current = echarts.init(chart.current)
  }, [])

  return [chart]
}

function getData(): Promise<IData03> {
  const start = num(90) / 100
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        x: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
        series: [
          [start, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, start],
        ],
      })
    }, 500)
  })
}