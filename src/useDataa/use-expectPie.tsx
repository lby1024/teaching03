import { useEffect, useRef } from "react"
import * as echarts from "echarts";

const option = {
  // title: {
  //   text: "实景练",
  //   left: "center",
  //   top: "32%",
  //   textStyle: {
  //     color: "#32a4fa",
  //     fontSize: 20,
  //     align: "center"
  //   }
  // },
  // color: ["#b682ee", "#60d4f4"],
  legend: {
    bottom: 0,
    left: 'center',
    textStyle: { color: "#fff", fontSize: 10 },
    itemWidth: 15,
    itemHeight: 8,
  },
  series: [
    {
      // name: '实景练',
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
        { value: 90, name: '达标' },
        { value: 10, name: '未达标' },
      ]
    }
  ]
};

export function useExpectPie() {
  const myChart = useRef<echarts.ECharts>()
  const chart = useRef<any>()

  useEffect(() => {
    myChart.current = echarts.init(chart.current)
    myChart.current?.setOption(option)
  }, [])

  return [chart]
}
