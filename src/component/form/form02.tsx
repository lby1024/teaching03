import { FC, useMemo } from "react";
import styled from "styled-components";
import XChartBox from "../chart-box";

const data = [
    {
        col01: '入室盗窃',
        col02: ['翻窗入室', '撬门入室', '技术开锁', '撬防护栏'],
        col03: [10,10,10,10],
        col04: 40
    },{
        col01: '抢夺',
        col02: ['摩托车飞车抢夺', '徒手抢夺'],
        col03: [12,11],
        col04: 23
    },{
        col01: '扒窃',
        col02: ['公交车扒窃', '车站扒窃', '街面扒窃	'],
        col03: [15,15,15],
        col04: 45
    },{
        col01: '诈骗',
        col02: ['甩票子诈骗', '买手机诈骗'],
        col03: [15,25,15],
        col04: 40
    }
]

const XForm02:FC = () => {

    return (
        <XChartBox title="作案手段分析">
            <Content>
                <table>
                    <tr>
                        <th colSpan={2}>类型</th>
                        <th>单数</th>
                        <th>总计</th>
                    </tr>
                    {
                        data.map(row => {
                            return row.col02.map((item, index) => {
                                const rowNum = row.col02.length
                                return <tr>
                                    { index === 0 && <td rowSpan={rowNum} >{row.col01}</td>}
                                    <td>{item}</td>
                                    <td>{row.col03[index]}</td>
                                    { index === 0 && <td rowSpan={rowNum} >{row.col04}</td> }
                                </tr>
                            })
                        })
                    }
                </table>
            </Content>
        </XChartBox>
    )
}

export default XForm02

const Content = styled.div`
    width: 480px;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
    table {
        border-collapse:collapse;
        background-color: #1c2456;
        font-size: 12px;
        transform: translateY(-3px);
        th {
            width: 112px;
            height: 46px;
            font-size: 12px;
            border: 1px solid #1a3571;
            vertical-align: middle;
            box-shadow: 0px 0px 20px #1a3571 inset;
        }
        td {
            height: 18px;
            line-height: 18px;
            width: 112px;
            text-align: center;
            border: 1px solid #1a3571;
            font-size: 12px;
        }
    }
`