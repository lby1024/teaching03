
import { useEffect, useRef } from "react";
import { num } from "../utils/api";
import * as echarts from "echarts";

const students = ['曾茂鹏', '梁瑾锐', '何孟敏', '徐子盈']
const legends = ['电动列车操作', '轨道交通自动运维', '车辆机械系统检修']
const bar = {
  type: 'bar',
  barWidth: 15,
  label: {
    show: true,
    position: 'inside'
  },
  // emphasis: {
  //   focus: 'series'
  // },
}

const n = () => {
  const res = num(10, 5)
  // if (res > -10 && res < 10) return 12
  return res
}

const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  // legend: {
  //   data: legends,
  //   left: 10,
  //   top: 10,
  //   textStyle: { color: "#fff", fontSize: 9 },
  //   itemWidth: 15,
  //   itemHeight: 8,
  // },
  grid: {
    top: 20,
    bottom: 20,
    right: 10,
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        show: false
      },
      data: students
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: { show: true, lineStyle: { color: "#073e78" } },
    }
  ],
  series: [
    {
      name: legends[0],
      data: [n(), n(), n(), n()],
      ...bar,
    },
    {
      name: legends[1],
      data: [n(), n(), n(), n()],
      ...bar
    },
    {
      name: legends[2],
      data: [n(), n(), n(), n()],
      ...bar
    }
  ]
};

export function useTeamBar() {
  const chart = useRef<echarts.ECharts>()
  const dom = useRef<any>()

  useEffect(() => {
    chart.current = echarts.init(dom.current)
    chart.current?.setOption(option)
  }, [])

  return [dom]
}
