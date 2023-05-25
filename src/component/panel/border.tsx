import { FC, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

interface IFlyBorder {
  width: number;
  height: number;
  className?: string;
}

const XBorder: FC<IFlyBorder> = ({ width, height, className }) => {
  const path = `M0 0 L${width} 0 L${width} ${height} L0 ${height} Z`;
  const [{ colorId, rectId, maskId }, setId] = useState({
    colorId: "colorId",
    rectId: "rectId",
    maskId: "maskId"
  });

  const init = () => {
    const id = uuid();
    setId({
      colorId: `color-${id}`,
      rectId: `rect-${id}`,
      maskId: `mask-${id}`
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <svg width={width} height={height} className={className}>
      <defs>
        {/* 蒙版圆形的渐变色 */}
        <radialGradient
          id={colorId}
          cx="50%"
          cy="50%"
          fx="50%"
          fy="50%"
          r="50%"
        >
          <stop offset="0%" stopColor="#fff" stopOpacity="1"></stop>
          <stop offset="100%" stopColor="#fff" stopOpacity="0"></stop>
        </radialGradient>
        {/* 矩形路径 */}
        <path id={rectId} d={path} fill="none" />
        {/* 蒙版 */}
        <mask id={maskId}>
          <circle cx="0" cy="0" r={(width + height) / 8} fill={`url(#${colorId})`} />
          <circle cx={width} cy="0" r={(width + height) / 8} fill={`url(#${colorId})`} />
          <circle cx={width} cy={height} r={(width + height) / 8} fill={`url(#${colorId})`} />
          <circle cx="0" cy={height} r={(width + height) / 8} fill={`url(#${colorId})`} />
        </mask>
      </defs>
      {/*  */}
      <use href={`#${rectId}`} strokeWidth="2" stroke="#0d3666" />
      <use
        href={`#${rectId}`}
        strokeWidth="3"
        stroke="#4fd2dd"
        mask={`url(#${maskId})`}
      />
    </svg>
  );
};

XBorder.defaultProps = {
  width: 200,
  height: 100
};

export default XBorder;
