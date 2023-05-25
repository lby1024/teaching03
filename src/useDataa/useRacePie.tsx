import { useEffect, useRef } from "react"
import * as echarts from "echarts";

const option = {
  title: {
    text: "竞赛",
    left: "center",
    top: "32%",
    textStyle: {
      color: "#32a4fa",
      fontSize: 20,
      align: "center"
    }
  },
  color: ["#856bec", "#f46064", "#f28e1b", "#1bdb7c", "#32a4fa"],
  legend: {
    bottom: 0,
    left: 'center',
    textStyle: { color: "#fff", fontSize: 10 },
    itemWidth: 15,
    itemHeight: 8,
  },
  series: [
    {
      name: '竞赛',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ["50%", '40%'],
      label: {
        show: true,
        fontSize: 12,
        position: "inside",
        color: "#fff",
        formatter(v: any) {
          return v.value + "%"
        }
      },
      labelLine: {
        show: false
      },
      itemStyle: {
        borderRadius: 1,
        borderColor: '#0f113a',
        borderWidth: 2
      },
      data: [
        { value: 20, name: '优秀' },
        { value: 20, name: '良好' },
        { value: 25, name: '中等' },
        { value: 23, name: '合格' },
        { value: 12, name: '不合格' },
      ]
    }
  ]
};

export function useRacePie() {
  const myChart = useRef<echarts.ECharts>()
  const chart = useRef<any>()

  useEffect(() => {
    myChart.current = echarts.init(chart.current)
    myChart.current?.setOption(option)
  }, [])

  return [chart]
}
