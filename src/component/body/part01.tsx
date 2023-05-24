import styled from "styled-components"
import { useIncrement } from "../../useData/use-increment"
import { useRes } from "../../useData/use-res"
import { useIng } from "../../useData/use-ing"
import XChartBox from "../chart-box"
import FlyBox from "../fly-box"

const Name = () => {
  return <FlyBox>
    <NameContainer>
      <div>课程名称：无人驾驶列车故障处理</div>
      <div>班级: 20交车1班</div>
      <div>班级人数: 39人</div>
    </NameContainer>
  </FlyBox>
}

const Res = () => {
  const [chart] = useRes()

  return (
    <XChartBox title="结果评价">
      <div style={{ width: 390, height: 160 }} ref={chart} />
    </XChartBox>
  )
}


const Ing = () => {
  const [chart] = useIng()

  return (
    <XChartBox title="过程评价">
      <div ref={chart} style={{ height: 200, width: 390 }} />
    </XChartBox>
  )
}

const Increment = () => {
  const [chart] = useIncrement()

  return (
    <XChartBox title="增值评价">
      <div ref={chart} style={{ height: 230, width: 390 }} />
    </XChartBox>
  )
}

const Part01 = () => {
  return <Part01Container>
    <Name />
    <Ing />
    <Res />
    <Increment />
  </Part01Container>
}

export default Part01

const NameContainer = styled.div`
  font-size: 14px;
  padding: 10px 12px;
  line-height: 24px;
`
const Part01Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`