import Panel from "../panel"
import { ActiveRingChart } from '@jiaminghi/data-view-react'
import config from '../../useData/useScore'


const Part05 = () => {
  return (
    <Panel width={387} height={258} title='教学考评' >
      <ActiveRingChart config={config} style={{ width: '390px', height: '220px' }} />
    </Panel>
  )
}

export default Part05
