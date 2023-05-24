import styled from "styled-components"
import XChartBox from "../chart-box"
import { RankItem, useRank } from "../../useData/use-rank"
import { FC } from "react"
import u1 from '../../static/u1.png'
import u2 from '../../static/u2.png'
import u3 from '../../static/u3.png'
import u4 from '../../static/u4.png'
import u5 from '../../static/u5.png'
import u6 from '../../static/u6.png'
import u7 from '../../static/u7.png'
import u8 from '../../static/u8.png'
import u9 from '../../static/u9.png'
import Scroll from "../scroll"

interface ImgProps {
  index: number
}
interface TableProps {
  names: RankItem[]
}

const Img: FC<ImgProps> = ({ index }) => {
  if (index % 10 === 1) return <img className="avatar" src={u1} alt="avatar" />
  if (index % 10 === 2) return <img className="avatar" src={u2} alt="avatar" />
  if (index % 10 === 3) return <img className="avatar" src={u3} alt="avatar" />
  if (index % 10 === 4) return <img className="avatar" src={u4} alt="avatar" />
  if (index % 10 === 5) return <img className="avatar" src={u5} alt="avatar" />
  if (index % 10 === 6) return <img className="avatar" src={u6} alt="avatar" />
  if (index % 10 === 7) return <img className="avatar" src={u7} alt="avatar" />
  if (index % 10 === 8) return <img className="avatar" src={u8} alt="avatar" />
  return <img className="avatar" src={u9} alt="avatar" />
}

const Table: FC<TableProps> = ({ names }) => {

  return <TableContainer>
    {names.map(item => <div className="raw" key={item.id}>
      <span className="index">{item.id}</span>
      <Img index={item.id} />
      <span className="name" >{item.name}</span>
    </div>)}
  </TableContainer>
}


const Before = () => {
  const names = useRank()

  return (
    <XChartBox title="增值前总成绩排名">
      <BeforeContainer>
        <Scroll height={350}>
          <Table names={names} />
        </Scroll>
      </BeforeContainer>
    </XChartBox>
  )
}

const After = () => {
  const names = useRank()

  return <XChartBox title="增值后综合成绩排名">
    <AfterContainer>
      <Scroll height={350}>
        <Table names={names} />
      </Scroll>
    </AfterContainer>
  </XChartBox>
}

const Part02 = () => {
  return <Part02Container>
    <Before />
    <After />
  </Part02Container>
}

export default Part02

const Part02Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const BeforeContainer = styled.div`
  padding-top: 10px;
  box-sizing: border-box;
  height: 370px;  
`

const AfterContainer = styled.div`
  padding-top: 10px;
  box-sizing: border-box;
  height: 370px;  
`


const TableContainer = styled.div`
  line-height: 39px;
  .raw{
    display: flex;
    align-items: center;
    .index{
      margin-right: 5px;
      display: inline-block;
      width: 30px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
    }
    .avatar {
      display: inline-block;
      width: 25px;
      height: 25px;
    }
    .name {
      margin-left: 20px;
    }
  }
`