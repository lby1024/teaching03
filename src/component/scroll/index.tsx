import React from "react"
import { CSSProperties, FC, useEffect, useState } from "react"
import styled from "styled-components"

interface ScrollProps {
  height: number,
  children: any
}

const Scroll: FC<ScrollProps> = ({ height, children }) => {

  const [style, setStyle] = useState<CSSProperties>({})

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyle({ animation: 'move 220s linear infinite' })
      clearTimeout(timer)
    }, 300)
  }, [])


  const newChildren = React.Children.map(children, (child) => {
    return React.cloneElement(child);
  });

  return <ScrollContainer style={{ height }}>
    <div className="inner-container" style={style} >
      {children}
      {newChildren}
    </div>
  </ScrollContainer>
}

export default Scroll


const ScrollContainer = styled.div`
width: 150px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  .inner-container{
    width: 90%;
    position: absolute;
    top: 0;
    left: 0;
  }
  @keyframes move {
    0%{
        transform: translateY(0);
    }
    100%{
        transform: translateY(-50%);
    }
  }
`