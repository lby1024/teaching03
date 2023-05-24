import { FC } from "react";
import styled from "styled-components";
import FlyBox from "../fly-box";

interface IXChartBox {
  title: string
  className?: string
  fly?: boolean
  children?: any
}

const XChartBox: FC<IXChartBox> = ({ title, children, className, fly }) => {
  return <FlyBox className={className} fly={fly}  >
    <Content>
      <div className="title" >{title}</div>
      <div className="pan">{children}</div>
    </Content>
  </FlyBox>
}

export default XChartBox

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
        color: #fff;
        border: 1px solid #0a5299;
        border-top: 0;
        border-radius: 0 0 3px 3px;
        height: 30.22px;
        line-height: 30.22px;
        box-sizing: border-box;
        padding: 0 18.5px;
        font-size: 14px;
    }
    .pan {
        min-height: 100px;
    }
`