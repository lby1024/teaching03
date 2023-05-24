import { FC } from "react";
import styled from "styled-components";
import { useScale } from "./use-scale";

const designWidth = 1600
const designHeight = 900

interface IXContainer {
    header: any
    body: any
}

const XContainer: FC<IXContainer> = (props) => {

    const [scale] = useScale()

    return <Content scale={scale} width={designWidth} height={designHeight} >
        <div className="c-header">{props.header}</div>
        <div className="body">{props.body}</div>
    </Content>
}

export default XContainer

const Content = styled.div<{
    scale: number,
    width: number,
    height: number,
}>`
    width: ${p => p.width}px;
    height: ${p => p.height}px;
    transform: translate(-50%, -50%) scale(${p => p.scale});
    background-color: #010310;
    position: fixed;
    left: 50%;
    top: 50%;
    display: flex;
    flex-direction: column;
    padding-bottom: 18px;
    .c-header{
        height: 65.45px;
        margin-bottom: 18px;
    }
    .body{
        flex: 1;
    }
`