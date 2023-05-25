import Panel from "../panel"
import { useRead } from "../../useData/useRead"

const Part06 = () => {
  const [chart] = useRead()

  return (
    <Panel width={387} height={258} title="课外阅读">
      <div style={{ width: 380, height: 200 }} ref={chart} />
    </Panel>
  )
}

export default Part06
