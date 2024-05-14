import React from 'react';
import { Svg, Path } from 'react-native-svg';

const HomeIcon = ({ color, size = 24 }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <Path fill={color} d="M13.45 2.533a2.25 2.25 0 0 0-2.9 0L3.8 8.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V9.947a2.25 2.25 0 0 0-.8-1.72z"/>
  </Svg>
);

export default HomeIcon;
