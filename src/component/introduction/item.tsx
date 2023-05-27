import { FC } from "react"
import styled from "styled-components"

interface ItemProps {
  pic: any,
  title?: string,
  subTitle?: string,
  line1?: string,
  line2?: string,
}

const Item: FC<ItemProps> = (props) => {
  const { pic, title, subTitle, line1, line2 } = props

  return <ItemContent>

    <Glass>
      <div className="bg center" />
      <div className="glass center"><div className="pic" style={{ backgroundImage: `url(${pic})` }} /></div>
    </Glass>

    <div className="info">
      <div className="title">{title}</div>
      <div className="desc">{subTitle}</div>
    </div>

  </ItemContent>
}

export default Item

const ItemContent = styled.div`
  display: flex;
  .info{
    padding-left: 10px;
    padding-top: 10px;
    .title{
      font-size: 12px;
    }
    .desc{
      font-size: 28px;
      color: rgb(19 193 247);
    }
  }
`


const Glass = styled.div`
  position: relative;
  width: 70px;
  height: 70px;
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .glass {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(9px);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .pic{
      background-size: cover;
      background-repeat: no-repeat;
      width: 60%;
      height: 60%;
      border-radius: 50%;
    }
  }
  .bg {
    width: 80%;
    height: 80%;
    background: linear-gradient(rgb(56 96 179 / .8), rgb(56 96 179 / .3));
    border-radius: 50%;
  }
`;