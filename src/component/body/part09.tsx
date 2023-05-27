import Panel from "../panel"
import { useAfter } from "../../useData/useAfter"

const Part01 = () => {

  const [chart] = useAfter()

  return (
    <Panel width={385} height={258} title='过程评价'>
      <div style={{ width: 399, height: 200 }} ref={chart} />
    </Panel>
  )
}

export default Part01
