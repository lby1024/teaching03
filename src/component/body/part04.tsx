import styled from "styled-components"
import { useTeamBar } from "../../useData/use-teamBar"
import XChartBox from "../chart-box"

const Part04 = () => {

  const [chart] = useTeamBar()

  return (
    <XChartBox title="团队增值">
      <Content>
        <div className="item" style={{ width: 900, height: 200 }} ref={chart} ></div>
      </Content>
    </XChartBox>
  )
}

export default Part04

const Content = styled.div`
    width: 780px;
    height: 229px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`