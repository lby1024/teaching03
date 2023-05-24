import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "../hooks/use-data";
import { IData03, num } from "../utils/api";

const xData = ['曾茂鹏', '敬学秀', '甘艳萍', '唐晓杰', '彭程']

const option: any = {
  textStyle: {
    color: '#79839E'
  },
  grid: {
    left: 10,
    right: 10,
    bottom: 10,
    top: 20,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisTick: { show: false },
    axisLine: {
      show: true,
      lineStyle: { color: '#083B70' }
    },
    axisLabel: {
      interval: 0,
      fontSize: 9,
      formatter: (v: string) => {
        let arr = v.split("");
        arr.splice(2, 0, "\n");
        return arr.join("");
      }
    },
    data: xData
  },
  yAxis: {
    type: 'value',
    splitLine: { show: false },
    axisLine: {
      show: true,
      lineStyle: { color: '#083B70' }
    },
  },
  series: [{
    data: [num(100, 50), num(100, 50), num(100, 50), num(100, 50), num(100, 50)],
    type: 'bar',
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#039dff' },
        { offset: 1, color: '#1e3bf9' },
      ])
    },
  }]
};

export function useRaceBar() {
  const myChart = useRef<echarts.ECharts>()
  const chart = useRef<any>()
  const [data] = useData<IData03>(getData)

  useEffect(() => {
    if (!data) return
    let o = { ...option }
    o.xAxis.data = data.x
    o.series[0].data = data.series[0]
    myChart.current?.setOption(o)
  }, [data])

  useEffect(() => {
    myChart.current = echarts.init(chart.current)
    myChart.current?.setOption(option)
  }, [])

  return [chart]
}


function getData(): Promise<IData03> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        x: xData,
        series: [
          [num(100, 50), num(100, 50), num(100, 50), num(100, 50), num(100, 50)],
        ],
      })
    }, 500)
  })
}