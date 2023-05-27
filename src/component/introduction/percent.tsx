import { PercentPond } from '@jiaminghi/data-view-react'
import styled from 'styled-components'
const fullWidth = 300
const borderGap = 1
const borderWidth = 1
const usefulWidth = fullWidth - (borderGap + borderWidth) * 2

const pieceLength = [0.39, 0.12]
const pieceGap = 2

const lineDash = pieceLength
  .map(l => [usefulWidth * l, pieceGap])
  .reduce((all, current) => [...all, ...current], [])

const config = {
  value: 100,
  colors: ['#01c4f9', '#c135ff'],
  lineDash
}

const Percent = () => {
  return <Content>
    <div className="num" style={{ color: '#01c4f9' }} >39</div>
    <PercentPond config={config} style={{ width: '160px', height: '20px' }} />
    <div className="num" style={{ color: '#c135ff' }} >12</div>
  </Content>
}

export default Percent

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  text{
    display: none;
  }
`