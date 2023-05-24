import styled from "styled-components"
import { usePersonalBar } from "../../useData/use-personalBar"
import XChartBox from "../chart-box"

const Part03 = () => {

  const [chart] = usePersonalBar()

  return (
    <XChartBox title="个人增值">
      <Content>
        <div className="item" style={{ width: 900, height: 200 }} ref={chart} ></div>
      </Content>
    </XChartBox>
  )
}

export default Part03

const Content = styled.div`
    width: 780px;
    height: 229px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`