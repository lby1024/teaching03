import Panel from "../panel"
import { ScrollBoard } from '@jiaminghi/data-view-react'
import { useMsg } from "../../useData/useMsg"

const Part07 = () => {

  const config = useMsg()

  return (
    <Panel width={385} height={258} title='课堂动态' >
      <ScrollBoard config={config} style={{ width: '383px', height: '220px' }} />
    </Panel>
  )
}

export default Part07


