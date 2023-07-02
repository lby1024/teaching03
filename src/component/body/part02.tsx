import Panel from "../panel"
import { CapsuleChart } from '@jiaminghi/data-view-react'

const Part02 = () => {

  return (
    <Panel title="课中递进学" width={387} height={258}>
      <CapsuleChart config={config} style={{ width: 390, height: 200, paddingRight: 30, paddingTop: 20 }} />
    </Panel>
  )
}

export default Part02


const config = {
  data: [
    {
      name: '测试活动',
      value: 167
    },
    {
      name: '问卷',
      value: 67
    },
    {
      name: '讨论',
      value: 123
    },
    {
      name: '头脑风暴',
      value: 55
    },
    {
      name: '投票',
      value: 98
    }
  ]
}