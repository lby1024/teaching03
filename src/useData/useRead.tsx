import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const legends = ['入馆学生', '借阅图书']
const xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const option = {
  color: ['#80FFA5', '#00DDFF'],
  legend: {
    data: legends,
    bottom: 0,
    textStyle: { color: "#fff", fontSize: 9 },
    itemWidth: 15,
    itemHeight: 8,
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '15%',
    top: '15%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: xData
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: { show: false, lineStyle: { color: "#073e78" } },
    }
  ],
  series: [
    {
      name: legends[0],
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgb(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [140, 232, 101, 264, 90, 340, 250]
    },
    {
      name: legends[1],
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.8,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgb(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [120, 282, 111, 234, 220, 340, 310]
    },
  ]
};


export function useRead() {
  const myChart = useRef<echarts.ECharts>()
  const dom = useRef<any>()

  useEffect(() => {
    myChart.current = echarts.init(dom.current)
    myChart.current?.setOption(option)
  }, [])

  return [dom]
}
