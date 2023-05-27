import { number } from "echarts"
import { FC, useMemo } from "react"
import styled, { CSSProperties } from "styled-components"
import Icon from "../Icon"
import Num from "./num"

interface DigitalFlopProps {
  n: string
  fontSize?: number,
  color?: string
}

const DigitalFlop: FC<DigitalFlopProps> = (props) => {

  const { n, fontSize, color } = props

  const style: CSSProperties = {
    fontSize,
    color: '#049be3',
  }

  const num = useMemo(() => {
    let numbers: any[] = n.split('')

    numbers = numbers.map(item => {
      if (isNaN(Number(item))) return item
      return Number(item)
    })

    numbers = numbers.map((item, index) => {
      if (typeof item === 'string') return <span key={index} style={style} >{item}</span>
      return <Num color={color} num={item} fontSize={fontSize} />
    })

    return <Content>
      {numbers}
    </Content>
  }, [n])

  return num
}

export default DigitalFlop

const Content = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
`