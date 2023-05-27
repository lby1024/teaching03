import styled from "styled-components"
import Panel from "../panel"
import pic from '../../static/study.svg'
import { useRealBar } from "../../useData/useRealBar"
import Classes from "../clases"
import Percent from "../percent"
import Rank from "../rank"
import Introduction from "../introduction"

const Part04 = () => {
  const [chartBar] = useRealBar()

  return (
    <Content>
      <Introduction />
      <Panel width={792} height={410} title='智慧课堂' subtitle="课程名称: 无人驾驶列车故障处理, 班级: 20交车1班" >
        <Classes />
        <Percent />
        <div className="bar" ref={chartBar} />
        <Rank />
        <Pic></Pic>
      </Panel>
    </Content>
  )
}

export default Part04

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .bar{
      width: 310px;
      height: 200px;
      position: absolute;
      bottom: 150px;
      right: 20px;
    }
`

const Pic = styled.div`
  position: absolute;
  left: 30px;
  bottom: -30px;
  opacity: .88;
  background-image: url(${pic});
  background-size: contain;
  background-repeat: no-repeat;
  height: 300px;
  width: 300px;
`
