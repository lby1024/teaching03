import mockjs from "mockjs"
import { num } from "../utils/api"

const option = {
  data: [],
  columnWidth: [100, 70],
  align: ['center', 'left', 'left'],
  oddRowBGC: 'rgba(0, 0, 0, 0)',
  evenRowBGC: '#142342'
}

function getTimeNumber() {
  let time = Date.now()
  let radom = num(1000 * 60 * 5, 0)
  return time - radom
}

function getTimeString(t: number) {
  let time = new Date(t)
  let hours: number | string = time.getHours()
  let min: number | string = time.getMinutes() + 1
  if (min === 60) {
    hours++
    min = 0
  }
  if (min < 10) {
    min = `0${min}`
  }
  if (hours < 10) {
    hours = `0${hours}`
  }
  return `${hours} : ${min}`
}


function getName() {
  return mockjs.mock({ name: '@cname' }).name
}

const classes = ['电动列车操作', '轨道交通自动运维', '车辆机械系统检修']

function getO() {
  let data = []

  for (let i = 0; i < 100; i++) {
    const time = getTimeNumber()
    const name = getName()
    data.push([time, name, `提交了作业: ${classes[num(3, 0)]}`])
  }

  // data.sort((a, b) => a[0] - b[0])
  data = data.map(item => {
    const time = item[0]
    item[0] = `<span style='color:#6690bc' >${getTimeString(time)}</span>`
    item[1] = `<span style='color:#6690bc' >${item[1]}</span>`
    item[2] = `<span style='color:#6690bc' >${item[2]}</span>`
    return [...item]
  })

  return {
    ...option,
    data
  }
}

export const useMsg = () => {

  return getO()
}

