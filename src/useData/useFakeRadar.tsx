import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { num } from "../utils/api";

const option: any = {
  color: ['#34ff6e'],
  textStyle: {
    fontSize: 9
  },
  radar: {
    animation: 'auto',
    indicator: [
      { name: '突发事件处理能力', max: 100 },
      { name: '岗位协调能力', max: 100 },
      { name: '故障处理能力', max: 100 },
      { name: '规范作业能力', max: 100 },
      { name: '结构认知能力', max: 100 },
      { name: '故障快处能力', max: 100 },
      { name: '数据分析能力', max: 100 },
    ]
  },
  series: [
    {
      name: 'Budget',
      type: 'radar',
      data: [
        {
          value: [num(100), num(100), num(100), num(100), num(100), num(100), num(100)],
          name: 'Allocated Budget',
        }
      ]
    }
  ]
};

export function useFakeRadar() {
  const myChart = useRef<echarts.ECharts>()
  const chart = useRef<any>()

  useEffect(() => {
    myChart.current = echarts.init(chart.current)
    myChart.current?.setOption(option)
  }, [])

  return [chart]
}