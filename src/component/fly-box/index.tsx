import { FC, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import XBorder from "./border";
import FlyBoder from "./fly-border";

const Content = styled.div`
  background-color: #0f113a;
  position: relative;
  .border {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

interface IFlybox {
  className?: string
  fly?: boolean
  children?: any
}

const FlyBox: FC<IFlybox> = ({ children, className, fly }) => {
  const content = useRef<any>();
  const [size, setSize] = useState({
    width: 0,
    height: 0
  });

  function sizeInit() {
    const { clientHeight, clientWidth } = content.current;
    setSize({
      width: clientWidth,
      height: clientHeight,
    });
  }

  useEffect(() => {
      const timer = setTimeout(() => {
          sizeInit();
          clearTimeout(timer)
      }, 200)
  }, [children]);

  return (
    <Content ref={content} className={className} >
      {children}
      {
        fly 
        ? <FlyBoder className="border" width={size.width} height={size.height} />
        : <XBorder className="border" width={size.width} height={size.height} /> 
      }
    </Content>
  );
};

FlyBox.defaultProps = {
  fly: false
}

export default FlyBox;
