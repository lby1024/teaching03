import styled, { CSSProperties } from "styled-components"
import Panel from "../panel"
import pic from '../../static/study.svg'
import { useRealBar } from "../../useData/useRealBar"
import { useAfter } from "../../useData/useAfter"
import Classes from "../clases"
import { PercentPond } from '@jiaminghi/data-view-react'
import Glass from "../glass"
import Percent from "../percent"

const Up = () => {
  return <UpContent></UpContent>
}

const Part04 = () => {
  const [chartBar] = useRealBar()
  const [chartLine] = useAfter()

  return (
    <Content>
      <Up />
      <Panel width={792} height={410} title='智慧课堂' >
        <Classes />
        <Percent />
        <div className="bar" ref={chartBar} />
        <div className="line" ref={chartLine} />
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
    .line{
      width: 390px;
      height: 170px;
      position: absolute;
      bottom: 0px;
      right: 50px;
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

const UpContent = styled.div`
  /* background-color: #0f113a; */
  background: linear-gradient(rgba(15,17,58,1) 50%, rgba(15,17,58,.5));
  height: 100px;
  width: 100%;
  position: relative;
  clip-path: polygon(
    0% 0%, 
    calc(100% - 30px) 0%, 
    100% 30px, 
    100% 100%,
    30px 100%,
    0% calc(100% - 30px)
  );
`
