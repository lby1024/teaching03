import { useEffect, useRef } from "react"
import * as echarts from "echarts";
import { useData } from "../hooks/use-data";
import { IData03, num } from "../utils/api";

const legends = ['电动列车操作', '轨道交通自动运维', '车辆机械系统检修', '本课程前导项目1', '本课程前导项目2', '本课程前导项目3', '本课程前导项目4']
const xData = ['曾茂鹏', '敬学秀', '甘艳萍', '唐晓杰', '彭程']

const option: any = {
  // title: {
  //   text: '学生成绩',
  //   left: 230,
  //   top: 0,
  //   textStyle: {
  //     fontSize: 14,
  //     fontWeight: 'normal',
  //     color: '#fff'
  //   }
  // },
  // color: ['pink', 'orange', '#fff', '#91CC75', '#fff066', '#2eee2e', '#4dabe2ede'],
  textStyle: {
    fontSize: 6,
    color: '#79839E'
  },
  legend: {
    data: legends,
    left: 3,
    right: 2,
    bottom: 5,
    textStyle: { color: "#fff", fontSize: 9 },
    itemWidth: 15,
    itemHeight: 8,
  },
  grid: {
    left: 20,
    right: 20,
    top: 20,
    bottom: 60,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: xData,
    axisTick: { show: false },
    splitLine: { show: true, lineStyle: { color: "#073e78" } },
    axisLine: { show: false },
    axisLabel: { interval: 0, fontSize: 9 },
  },
  yAxis: {
    type: 'value',
    splitLine: { show: true, lineStyle: { color: "#073e78" } },
    axisLabel: {
      fontSize: 9,
      // formatter: (v: number) => v * 100 + "%"
    },
  },
  series: [
    {
      name: legends[0],
      data: [num(100, 55), num(100, 55), num(100, 55), num(100, 55), num(100, 55)],
      type: 'line',
      symbol: "circle",
      symbolSize: 6,
      lineStyle: { width: 1 },
    },
    {
      name: legends[1],
      data: [num(100, 55), num(100, 55), num(100, 55), num(100, 55), num(100, 55)],
      type: 'line',
      symbol: "circle",
      symbolSize: 6,
      lineStyle: { width: 1 },
    },
    {
      name: legends[2],
      data: [num(100, 55), num(100, 55), num(100, 55), num(100, 55), num(100, 55)],
      type: 'line',
      symbol: "circle",
      symbolSize: 6,
      lineStyle: { width: 1 },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          { type: 'min', name: '最小值' }
        ],
      }
    },
    {
      name: legends[3],
      data: [num(100, 55), num(100, 55), num(100, 55), num(100, 55), num(100, 55)],
      type: 'bar',
      barWidth: 6,
    },
    {
      name: legends[4],
      data: [num(100, 55), num(100, 55), num(100, 55), num(100, 55), num(100, 55)],
      type: 'bar',
      barWidth: 6,
    },
    {
      name: legends[5],
      data: [num(100, 55), num(100, 55), num(100, 55), num(100, 55), num(100, 55)],
      type: 'bar',
      barWidth: 6,
    },
    {
      name: legends[6],
      data: [num(100, 55), num(100, 55), num(100, 55), num(100, 55), num(100, 55)],
      type: 'bar',
      barWidth: 6,
    }
  ]
};

export function useIncrement() {
  const myChart = useRef<echarts.ECharts>()
  const dom = useRef<any>()
  const [data] = useData<IData03>(getData)

  useEffect(() => {
    myChart.current = echarts.init(dom.current)
    myChart.current?.setOption(option)
  }, [])

  return [dom]
}


function getData(): Promise<IData03> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        x: xData,
        series: [
          [num(90), num(90), num(90), num(90), num(90)],
          [num(90), num(90), num(90), num(90), num(90)],
          [num(90), num(90), num(90), num(90), num(90)],
          [num(90), num(90), num(90), num(90), num(90)],
          [num(90), num(90), num(90), num(90), num(90)],
        ],
      })
    }, 500)
  })
}