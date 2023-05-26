import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { useData } from "../hooks/use-data";
import { IData02, num } from "../utils/api";

const yData = ['曾茂鹏', '敬学秀', '甘艳萍', '唐晓杰', '彭程']
const legends = ['电动列车操作', '轨道交通自动运维']
// const legends = ['电', '轨']

const option: any = {
  title: {
    text: '实景练数据',
    left: 0,
    top: 0,
    textStyle: {
      fontSize: 14,
      fontWeight: 'normal',
      color: '#fff'
    }
  },
  textStyle: {
    fontSize: 12,
    color: '#79839E'
  },
  legend: {
    data: legends,
    // orient: 'vertical', // horizontal
    left: 100,
    top: 0,
    itemWidth: 12,
    itemHeight: 8,
    textStyle: { color: "#fff", fontSize: 11 }
  },
  grid: {
    left: 10,
    right: 10,
    bottom: 40,
    top: 39,
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01],
    axisLabel: { show: false },
    splitLine: { show: false },
  },
  yAxis: {
    type: 'category',
    data: yData,
    axisLine: {
      show: true,
      lineStyle: {
        color: "#79839E",
        width: 3
      }
    },
    axisTick: { show: false },
  },
  series: [
    {
      name: legends[0],
      type: 'bar',
      data: [10, 20, 36, 41, 15],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#1e3bf9' },
          { offset: 1, color: '#039dff' }
        ])
      },
    },
    {
      name: legends[1],
      type: 'bar',
      data: [10, 20, 36, 41, 15],
      itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: '#b72be8' },
          { offset: 1, color: '#6a70e7' }
        ])
      },
    }
  ]
};

export function useRealBar() {
  const myChart = useRef<echarts.ECharts>()
  const dom = useRef<any>()
  const [data] = useData<IData02>(getData)

  useEffect(() => {
    if (!data) return
    let o = { ...option }
    o.series[0].data = data.series
    o.series[1].data = data.series02
    myChart.current?.setOption(o)
  }, [data])

  useEffect(() => {
    myChart.current = echarts.init(dom.current)
  }, [])

  return [dom]
}


function getData(): Promise<IData02> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        x: yData,
        series: [num(100, 50), num(100, 50), num(100, 50), num(100, 50), num(100, 50)],
        series02: [num(100, 50), num(100, 50), num(100, 50), num(100, 50), num(100, 50)]
      })
    }, 500)
  })
}
