import styled from "styled-components"
import { useTeamBar } from "../../useData/use-teamBar"

const Part04 = () => {

  const [chart] = useTeamBar()

  return (
    <Content>
      <div className="item" style={{ width: 900, height: 200 }} ref={chart} ></div>
    </Content>
  )
}

export default Part04

const Content = styled.div`
    width: 780px;
    height: 229px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`