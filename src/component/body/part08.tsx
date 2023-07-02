import { useTeamBar } from "../../useData/useTeamBar"
import Panel from "../panel"

const Part08 = () => {
  const [chart] = useTeamBar()

  return (
    <Panel width={385} height={258} title="增值评价">
      <div style={{ width: 380, height: 200 }} ref={chart} />
    </Panel>
  )
}

export default Part08
