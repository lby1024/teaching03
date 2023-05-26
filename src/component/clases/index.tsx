import { CSSProperties } from "react"
import styled from "styled-components"
import Glass from "../glass"

const Classes = () => {

  const style: CSSProperties = {
    zIndex: 1,
    position: "absolute",
    left: 20,
    bottom: 200,
    width: 120,
    height: 130
  }

  return <Glass style={style} >
    <ClassesContent>
      <div className="t">智慧课堂(节)</div>
      <div>2021学年: <span>13820</span></div>
      <div>2022学年: <span>10650</span></div>
      <div>2023学年: <span>5650</span></div>
    </ClassesContent>
  </Glass>
}

export default Classes

const ClassesContent = styled.div`
  font-size: 12px;
  line-height: 24px;
  padding-top: 9px;
  padding-left: 15px;
  .t{
    margin-bottom: 0px;
    color: #fff;
  }
  div{
    color: #79839E;
  }
  span{
    color: #13c1f7;
  }
`