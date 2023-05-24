import styled from "styled-components"
import { useExpectPie } from "../../useData/use-expectPie"
import XChartBox from "../chart-box"
import { useExpectBar } from "../../useData/use-expectBar"

const Part05 = () => {

  const [chartLeft] = useExpectBar()
  const [chartMiddle] = useExpectPie()

  return (
    <XChartBox title="预期增值">
      <Content>
        <div className="item" style={{ width: 600, height: 200 }} ref={chartLeft} ></div>
        <div className="item" style={{ width: 200, height: 200 }} ref={chartMiddle} ></div>
      </Content>
    </XChartBox>
  )
}

export default Part05


const Content = styled.div`
    width: 780px;
    height: 229px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`