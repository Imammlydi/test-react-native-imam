import React from 'react';
import { Svg, Path } from 'react-native-svg';

const WishlistIcon = ({ color }) => (
  <Svg width="22" height="22" viewBox="0 0 44 38" fill="none">
    <Path
      d="M2 13C2 6.925 6.925 2 13 2C14.7653 1.99875 16.5049 2.42289 18.0715 3.23649C19.6382 4.05009 20.9857 5.22921 22 6.674C23.99 3.847 27.28 2 31 2C37.075 2 42 6.925 42 13C42 24 29 34 22 36.326C15 34 2 24 2 13Z"
      stroke={color}
      strokeWidth="2.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default WishlistIcon;
