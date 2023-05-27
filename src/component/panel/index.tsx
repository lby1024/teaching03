import { FC } from "react"
import styled, { CSSProperties } from "styled-components"
import XBorder from "./border";

interface PanelProps {
  width: number,
  height: number,
  title: string,
  subtitle?: string,
  children?: any
}

const Panel: FC<PanelProps> = (props) => {
  const { width, height, children, title, subtitle } = props

  const styl: CSSProperties = {
    width,
    height,
  }

  return <Content style={styl}>
    <h3 className="title">
      <span className="title-left">{title}</span>
      <div className="sub-title">{subtitle}</div>
    </h3>
    {children}
    <XBorder className="border" width={width} height={height} />
  </Content>
}

export default Panel

const Content = styled.div`
  background: linear-gradient(rgba(15,17,58,1) 50%, rgba(15,17,58,.5));
  /* background-color: red; */
  position: relative;
  .border {
    position: absolute;
    top: 0;
    left: 0;
  }  
  .title {
    margin: 0 12px;
    height: 39px;
    border-bottom: 2px solid rgba(10,82,153,.4);
    position: relative;
    .title-left{
      position: absolute;
      bottom: -2px;
      font-size: 14px;
      font-weight: normal;
      border-bottom: 2px solid rgba(10,82,153,1.000);
      padding-bottom: 6px;
      display: inline-block;
    }
    .sub-title{
      position: absolute;
      bottom: 7px;
      right: 0;
      font-size: 12px;
      opacity: .3;
      color: #fff;
    }
  }
`