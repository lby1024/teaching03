import { CSSProperties } from "react"
import styled from "styled-components"
import Glass from "../glass"
import DigitalFlop from "../Icon/digitalFlop"

const Percent = () => {

  const style: CSSProperties = {
    zIndex: 1,
    position: "absolute",
    left: 250,
    bottom: 250,
    width: 120,
    height: 80
  }

  return <Glass style={style} >
    <PerContent>
      <div className="t">教师使用率(月)</div>
      {/* <div className="n">82.33%</div> */}
      <DigitalFlop n="82.33%" fontSize={21} />
    </PerContent>
  </Glass>
}

export default Percent

const PerContent = styled.div`
  font-size: 12px;
  line-height: 24px;
  padding-top: 9px;
  padding-left: 15px;
  .t{
    margin-bottom: 10px;
    color: #fff;
  }
`