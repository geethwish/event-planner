import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface SvgIconProps {
    width?: string;
    height?: string;
    fill?: string;
    [key: string]: any;
}

const ActionIcon = ({ width = "32", height = "32", fill = "black", ...rest }: SvgIconProps) => (
    <Svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        {...rest}
    >
        <Path d="M13,16c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,14.346,13,16z" id="XMLID_294_" fill={fill} />
        <Path d="M13,26c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,24.346,13,26z" id="XMLID_295_" fill={fill} />
        <Path d="M13,6c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3S13,4.346,13,6z" id="XMLID_297_" fill={fill} />
    </Svg>
);

export default ActionIcon;