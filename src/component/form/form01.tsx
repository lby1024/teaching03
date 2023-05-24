import { FC } from "react";
import styled from "styled-components";
import { num } from "../../utils/api";
import XChartBox from "../chart-box";

interface IXRow {
    n: number
}

const XRow: FC<IXRow> = ({n}) => {
    return <Row>
        <td>{2021-n}</td>
        <td>{num(20)}</td>
        <td>{num(20)}</td>
        <td>{num(20)}</td>
        <td>{num(20)}</td>
        <td>{num(20)}</td>
        <td>82</td>
        <td>93</td>
    </Row>
}

const Row = styled.div`
    td {
        height: 29.75px;
        line-height: 29.75px;
        width: 59.34px;
        text-align: center;
        border: 1px solid #1a3571;
        font-size: 12px;
    }
`

const XHead: FC = () => {
    return <Head>
        <th>年份</th>
        <th>破案数</th>
        <th>抓获嫌疑人</th>
        <th>并串案件</th>
        <th>现勘录入</th>
        <th>视侦录入</th>
        <th>合成案件数</th>
        <th>合计</th>
    </Head>
}

const Head = styled.div`
    th {
        width: 59.34px;
        height: 46.27px;
        font-size: 12px;
        border: 1px solid #1a3571;
        vertical-align: middle;
        box-shadow: 0px 0px 20px #1a3571 inset;
    }
`

const XForm01:FC = () => {

    return (
        <XChartBox title="往年战果数对比">
            <Content>
                <table>
                    <XHead />
                    {
                        [0, 1, 2].map(item => <XRow n={item} key={item} />)
                    }
                </table>
            </Content>
        </XChartBox>
    )
}

export default XForm01

const Content = styled.div`
    width: 480px;
    height: 210px;
    padding-top: 30px;
    box-sizing: border-box;
    table {
        border-collapse:collapse;
        background-color: #1c2456;
    }
`