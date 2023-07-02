import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "../hooks/use-data";
import { IData03, num } from "../utils/api";

const legends = ['析案例', '仿真练', '实景练', '竞赛练', '评表现']
const XAxis = ['任务一', '任务二', '任务三', '任务四', '任务五', '任务六', '任务七', '任务八']

const option: any = {
  textStyle: {
    fontSize: 6,
    color: '#79839E'
  },
  legend: {
    data: legends,
    bottom: 0,
    textStyle: { color: "#fff", fontSize: 9 },
    itemWidth: 15,
    itemHeight: 8,
  },
  grid: {
    left: 10,
    right: 16,
    top: 30,
    bottom: 30,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: XAxis,
    boundaryGap: false,
    splitLine: { show: true, lineStyle: { color: "#073e78" } },
    axisTick: { show: false },
    axisLine: { show: false },
    axisLabel: { interval: 0, fontSize: 9 },
  },
  yAxis: {
    type: 'value',
    splitLine: { show: true, lineStyle: { color: "#073e78" } },
    axisLabel: {
      fontSize: 9,
      formatter: (v: number) => v * 100 + "%"
    },
  },
  series: [
    {
      name: legends[0],
      data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08],
    },
    {
      name: legends[1],
      data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08],
    },
    {
      name: legends[2],
      data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08],
    },
    {
      name: legends[3],
      data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08],
    },
    {
      name: legends[4],
      data: [0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08],
    }
  ].map(o => ({
    ...o,
    type: 'line',
    symbol: "circle",
    symbolSize: 6,
    lineStyle: { width: 1 }
  }))
};

export function useIng() {
  const myChart = useRef<echarts.ECharts>()
  const dom = useRef<any>()
  const [data] = useData<IData03>(getData, 6000)

  useEffect(() => {
    if (!data) return
    let o = { ...option }
    o.xAxis.data = data.x
    data.series.map((item, index) => {
      o.series[index].data = item
    })
    myChart.current?.setOption(o)
  }, [data])

  useEffect(() => {
    myChart.current = echarts.init(dom.current)
  }, [])

  return [dom]
}


function getData(): Promise<IData03> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        x: [...XAxis],
        series: [
          [num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100],
          [num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100],
          [num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100],
          [num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100],
          [num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100, num(90) / 100],
        ],
      })
    }, 500)
  })
}