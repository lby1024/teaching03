import styled from "styled-components"
import { useRank } from "../../useData/useRank"
import { ScrollRankingBoard } from '@jiaminghi/data-view-react'

const Rank = () => {
  const config = useRank()

  return <RankContent>
    <div className="title">总成绩排名</div>
    <ScrollRankingBoard config={config} style={{ width: '320px', height: '120px' }} />
  </RankContent>
}

export default Rank

const RankContent = styled.div`
  position: absolute;
  right: 90px;
  bottom: 10px;
  .title{
    height: 21px;
    padding-bottom: 6px;
    font-size: 14px;
    transform: translateX(-12px);
  }
`