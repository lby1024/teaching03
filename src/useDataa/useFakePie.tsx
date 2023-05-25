import { useEffect, useRef } from "react"
import * as echarts from "echarts";

const option: any = {
  legend: {
    orient: 'vertical',
    left: 20,
    bottom: 50,
    textStyle: { color: "#fff", fontSize: 10 },
    itemWidth: 11,
    itemHeight: 6,
    height: 210,
  },
  series: [
    {
      name: '成绩',
      type: 'pie',
      radius: '77%',
      center: ['65%', '44%'],
      labelLine: {
        show: false
      },
      label: {
        show: false,
      },
      data: [
        { value: 10, name: '优秀 10%' },
        { value: 30, name: '良好 30%' },
        { value: 25, name: '中 25%' },
        { value: 20, name: '合格 20%' },
        { value: 15, name: '不合格 15%' },
      ],
    }
  ]
};

export function useFakePie() {
  const myChart = useRef<echarts.ECharts>()
  const chart = useRef<any>()

  useEffect(() => {
    myChart.current = echarts.init(chart.current)
    myChart.current?.setOption(option)
  }, [])

  return [chart]
}
