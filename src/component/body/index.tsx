import { FC } from "react";
import styled from "styled-components";
import Part01 from "./part01";
import Part02 from "./part02";
import Part03 from "./part03";
import Part04 from "./part04";
import Part05 from "./part05";
import Part06 from "./part06";
import Part07 from "./part07";
import Part08 from "./part08";
import Part09 from "./part09";

interface IBody {
}

const Body: FC<IBody> = (props) => {

    return <Content >
        <div className="part01"><Part01 /></div>
        <div className="part02"><Part02 /></div>
        <div className="part03"><Part03 /></div>
        <div className="part04"><Part04 /></div>
        <div className="part05"><Part05 /></div>
        <div className="part06"><Part06 /></div>
        <div className="part07"><Part07 /></div>
        <div className="part08"><Part08 /></div>
        <div className="part09"><Part09 /></div>
    </Content>
}

export default Body

const Content = styled.div`
    position: relative;
    height: 99%;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 18px;
    grid-template-areas: 
        "part01 part04 part04 part07"
        "part02 part04 part04 part08"
        "part03 part05 part06 part09";
    .part01{
        grid-area: part01;
        /* background-color: #142342; */
        /* background-color: red; */
    }
    .part02{
        grid-area: part02;
        /* background-color: #142342; */
        /* background-color: red; */
    }
    .part03{
        grid-area: part03;
        /* background-color: #142342; */
        /* background-color: red; */
    }
    .part04{
        grid-area: part04;
        /* background-color: #142342; */
        /* background-color: red; */
    }
    .part05{
        grid-area: part05;
        /* background-color: #142342; */
        /* background-color: red; */
    }
    .part06{
        grid-area: part06;
        /* background-color: #142342; */
        /* background-color: red; */
    }
    .part07{
        grid-area: part07;
        /* background-color: #142342; */
        /* background-color: red; */
    }
    .part08{
        grid-area: part08;
        /* background-color: #142342; */
        /* background-color: red; */
    }
    .part09{
        grid-area: part09;
        /* background-color: #142342; */
        /* background-color: red; */
    }
`