import { FC, useEffect, useRef, useState } from "react"
import styled, { CSSProperties } from "styled-components"
import XBorder from "./border";

interface PanelProps {
  width: number,
  height: number,
}

const Panel: FC<PanelProps> = (props) => {
  const { width, height } = props

  const styl: CSSProperties = {
    width,
    height,
  }

  return <Content style={styl}>
    <h3 className="title">
      <span className="title-left">课堂评价</span>
    </h3>
    <XBorder className="border" width={width} height={height} />
  </Content>
}

export default Panel

const Content = styled.div`
  background-color: '#0f113a';
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
  }
`