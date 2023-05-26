import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "../hooks/use-data";
import { num } from "../utils/api";

const option: any = {
  color: ['#FFE434'],
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
          value: [52, 80, 60, 75, 90, 98, 88],
          name: 'Allocated Budget',
          areaStyle: {
            color: 'rgba(255, 228, 52, 0.6)'
          }
        }
      ]
    }
  ]
};

export function useAll() {
  const myChart = useRef<echarts.ECharts>()
  const chart = useRef<any>()
  const [data] = useData<number[]>(getData)

  useEffect(() => {
    if (!data) return
    let o = { ...option }
    o.series.data = data
    myChart.current?.setOption(o)
  }, [data])

  useEffect(() => {
    myChart.current = echarts.init(chart.current)
  }, [])

  return [chart]
}


function getData(): Promise<number[]> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        [num(100, 50), num(100, 50), num(100, 50), num(100, 50), num(100, 50), num(100, 50), num(100, 50)],
      )
    }, 500)
  })
}