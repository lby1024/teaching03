import { useIng } from "../../useData/useIng"
import Panel from "../panel"

const Part09 = () => {
  const [chart] = useIng()

  return (
    <Panel width={385} height={258} title="课中递进学">
      <div style={{ width: 380, height: 200 }} ref={chart} />
    </Panel>
  )
}

export default Part09
