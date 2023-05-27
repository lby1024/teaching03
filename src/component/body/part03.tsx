import { useAll } from "../../useData/useAll"
import Panel from "../panel"

const Part03 = () => {
  const [chart] = useAll()

  return (
    <Panel width={387} height={258} title='整体分析' >
      <div style={{ width: 380, height: 230 }} ref={chart} />
    </Panel>
  )
}

export default Part03
