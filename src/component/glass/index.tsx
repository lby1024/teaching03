import { CSSProperties, FC } from "react";
import styled from "styled-components";

interface PanelProps {
  children: any;
  style?: CSSProperties;
}

const Glass: FC<PanelProps> = (props) => {
  const { children, style } = props;
  return (
    <Content style={style}>
      <div className="bg center "></div>
      <div className="glass center">{children}</div>
    </Content>
  );
};

export default Glass;

const Content = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  .center {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .glass {
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.0005);
    backdrop-filter: blur(5px);
    border-top: 3px solid rgb(56 96 179 / .5 );
  }
  .bg {
    width: 96%;
    height: 96%;
    top: 46.9%;
    background: linear-gradient(rgb(56 96 179 / .8), rgb(56 96 179 / .3))
  }
`;
