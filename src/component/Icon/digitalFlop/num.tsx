/**
 * 这个组件是为了解决数字icon间距过大的问题
 */

import { FC } from "react"
import styled from "styled-components"
import Icon from "../Icon"

interface NumProps {
  num: number,
  fontSize?: number,
  color?: string,
}

const Num: FC<NumProps> = (props) => {
  const { num, fontSize = 12, color = '#009FE8' } = props

  return <NumContent style={{ fontSize }} >
    <Icon className="icon" name={`shuzi${num}`} color={color} fontSize={fontSize} />
  </NumContent>
}

export default Num

const NumContent = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: .7em;
  .icon{
    flex: none;
  }
`