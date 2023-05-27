import { FC } from "react";
import styled from "styled-components";
import bg from "../../static/header.png"

const XHeader: FC<any> = ({ children }) => {

    return <Content>
        <Title>
            <span>{children}</span>
        </Title>
    </Content>
}

export default XHeader

const Content = styled.div`
    height: 100%;
    background-color: #000105;
    background-image: url(${bg});
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Title = styled.div`
    background-color: #000517;
    width: 500PX;
    height: 100%;
    color: #8abee4;
    font-size: 32px;
    text-align: center;
    padding-top: 5px;
    box-sizing: border-box;
    border-bottom: 1px solid #243b71;
    span {
        background: linear-gradient(to top, #243b71, #8abee4);
        background-clip: text;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        color: transparent;
    }
`