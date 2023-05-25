const option = {
  radius: '60%',
  activeRadius: '70%',
  lineWidth: 32,
  digitalFlopStyle: {
    fontSize: 20,
  },
  data: [
    {
      name: '优秀',
      value: 55
    },
    {
      name: '良好',
      value: 120
    },
    {
      name: '中等',
      value: 78
    },
    {
      name: '合格',
      value: 66
    },
    {
      name: '不合格',
      value: 30
    }
  ]
}

export const useScore = () => {
  return option
}