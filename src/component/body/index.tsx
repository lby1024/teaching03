import { FC } from "react";
import styled from "styled-components";
import Part01 from "./part01";
import Part02 from "./part02";
import Part03 from "./part03";
import Part04 from "./part04";
import Part05 from "./part05";
import Part06 from "./part06";

interface IBody {
}

const Body: FC<IBody> = (props) => {

    return <Content >
        <div className="part01"><Part01 /></div>
        <div className="part02"><Part02 /></div>
        <div className="part03"><Part03 /></div>
        <div className="part04"><Part04 /></div>
        <div className="part05"><Part05 /></div>
    </Content>
}

export default Body

const Content = styled.div`
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1.1fr 200px 1fr 1fr;
    grid-gap: 18px;
    grid-template-areas: 
        "part01 part02 part03 part03"
        "part01 part02 part04 part04"
        "part01 part02 part05 part05";
    .part01{
        grid-area: part01;
        /* background-color: #142342; */
    }
    .part02{
        grid-area: part02;
        /* background-color: #142342; */
    }
    .part03{
        grid-area: part03;
        /* background-color: #142342; */
    }
    .part04{
        grid-area: part04;
        /* background-color: #142342; */
    }
    .part05{
        grid-area: part05;
        /* background-color: #142342; */
    }
`