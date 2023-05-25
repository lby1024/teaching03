import { useBefore } from "../../useData/useBefore"
import Panel from "../panel"

const Part02 = () => {
  const [chart] = useBefore()

  return (
    <Panel title="课前认知学" width={387} height={258}>
      <div style={{ width: 390, height: 200 }} ref={chart} />
    </Panel>
  )
}

export default Part02
