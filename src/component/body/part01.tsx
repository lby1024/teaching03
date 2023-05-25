import Panel from "../panel"
import { ScrollRankingBoard } from '@jiaminghi/data-view-react'
import { useRank } from "../../useData/useRank"

const Part01 = () => {

  const config = useRank()

  return (
    <Panel width={387} height={258} title='总成绩排名'>
      <div style={{ paddingLeft: 12 }} >
        <ScrollRankingBoard config={config} style={{ width: '360px', height: '220px' }} />
      </div>
    </Panel>
  )
}

export default Part01
