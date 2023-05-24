import { FC } from "react"
import styled from "styled-components"

interface IContent {
    head: any,
    left01: any,
    left02: any,
    left03: any,
}

const XContent:FC<IContent> = (props) => {

    return <Content>
        <div className="inner" >
            <div className="header">{props.head}</div>
            <div className="box1">{props.left01}</div>
            <div className="box2"></div>
            <div className="box3"></div>
            <div className="box4"></div>
            <div className="box5"></div>
            <div className="box6"></div>
            <div className="foot"></div>
        </div>
    </Content>
}

export default XContent

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .inner {
        background-color: #010310;
        width: 24.2rem;
        height: 13.6125rem;
        display: grid;
        grid-template-rows: 0.99rem 7.53rem 3.63rem 1fr;
        grid-template-columns: 3.74rem 3.67rem 8.64rem 1fr;
        grid-template-areas: 
            'head head head head'
            'box1 box2 box3 box4'
            'box5 box5 box6 box4'
            'foot foot foot foot';
        grid-gap: .2rem;
        .header {
            grid-area: head;
            /* background-color: #253e77; */
        }
        .box1 {
            grid-area: box1;
            /* background-color: #253e77; */
        }
        .box2 {
            grid-area: box2;
            /* background-color: #253e77; */
        }
        .box3 {
            grid-area: box3;
            /* background-color: #253e77; */
        }
        .box4 {
            grid-area: box4;
            /* background-color: #253e77; */
        }
        .box5 {
            grid-area: box5;
            /* background-color: #253e77; */
        }
        .box6 {
            grid-area: box6;
            /* background-color: #253e77; */
        }
        .foot {
            grid-area: foot;
            /* background-color: #253e77; */
        }
    }
`
