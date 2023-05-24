import styled from "styled-components"
import { useRaceBar } from "../../useData/useRaceBar"
import { useRaceLine } from "../../useData/useRaceLine"
import { useRacePie } from "../../useData/useRacePie"
import XChartBox from "../chart-box"

const Part06 = () => {

  const [chartLeft] = useRaceBar()
  const [chartMiddle] = useRacePie()
  const [chartRight] = useRaceLine()

  return (
    <XChartBox title="竞赛练数据">
      <Content>
        <div className="item" style={{ width: 250, height: 200 }} ref={chartLeft} ></div>
        <div className="item" style={{ width: 200, height: 200 }} ref={chartMiddle} ></div>
        <div className="item" style={{ width: 200, height: 200 }} ref={chartRight} ></div>
      </Content>
    </XChartBox>
  )
}

export default Part06


const Content = styled.div`
    width: 780px;
    height: 229px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`