import mockjs from "mockjs"
import { getName, num } from "../utils/api"

const option = {
  sort: true,
  rowNum: 3,
  waitTime: 2500,
  data: [
    {
      name: '周口',
      value: 55
    },
    {
      name: '南阳',
      value: 120
    },
    {
      name: '西峡',
      value: 78
    },
    {
      name: '驻马店',
      value: 66
    },
    {
      name: '新乡',
      value: 80
    },
    {
      name: '信阳',
      value: 45
    },
    {
      name: '漯河',
      value: 29
    }
  ]
}

function getData() {
  const data = []
  for (let i = 0; i < 39; i++) {
    data.push({
      name: getName(),
      value: num(100, 50)
    })
  }
  return data
}

export const useRank = () => {
  return {
    ...option,
    data: getData()
  }
}