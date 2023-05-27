import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "../hooks/use-data";
import { IData, num } from "../utils/api";
import { stringify } from "uuid";

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
    bottom: 56,
  },
  series: [{
    data: [
      { value: num(50), itemStyle: { color: '#faea82' } },
      { value: num(50), itemStyle: { color: '#11c8b4' } },
      { value: num(50), itemStyle: { color: '#4f59ff' } },
      { value: num(50), itemStyle: { color: '#a37cf9' } },
      { value: num(50), itemStyle: { color: '#16f1f7' } },
    ],
    type: 'bar',
    barWidth: 36,
  }]
};

export function useBefore() {
  const chart = useRef<echarts.ECharts>()
  const dom = useRef<any>()


  useEffect(() => {
    chart.current = echarts.init(dom.current)
    chart.current?.setOption(option)
  }, [])

  return [dom]
}