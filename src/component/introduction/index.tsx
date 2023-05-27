import { FC } from "react";
import styled from "styled-components";
import XBorder from "./borer";
import Item from "./item";
import engineer from '../../static/engineer.png'
import teacher from '../../static/teacher.png'
import student from '../../static/student.png'
import Percent from "./percent";

const Introduction = () => {
  return <UpContent>
    <div className="left">
      <Item pic={engineer} title='市级技能大师' subTitle="3" />
      <Item pic={teacher} title="老师人数" subTitle="12" />
      <Item pic={student} title="学生人数" subTitle="39" />
    </div>

    <div className="right">
      <div className="title">师生占比</div>
      <Percent />
    </div>

    <XBorder className="border" width={792} height={100} />
  </UpContent>
}

export default Introduction

const UpContent = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(15,17,58,1) 50%, rgba(15,17,58,.5));
  height: 100px;
  width: 100%;
  position: relative;
  .border {
    position: absolute;
    top: 0;
    left: 0;
  }  
  clip-path: polygon(
    0% 0%, 
    calc(100% - 30px) 0%, 
    100% 30px, 
    100% 100%,
    30px 100%,
    0% calc(100% - 30px)
  );
  .left{
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 70%;
    border-right: 5px solid #010310;
  }
  .right{
    width: 250px;
    .title{
      font-size: 12px;
      text-align: center;
      margin-bottom: 9px;
    }
  }
`
