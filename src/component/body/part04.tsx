import styled from "styled-components"
import Panel from "../panel"

const Up = () => {
  return <UpContent></UpContent>
}

const Part04 = () => {


  return (
    <Content>
      <Up />
      <Panel width={792} height={410} ></Panel>
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