import React from 'react';
import { Svg, Path } from 'react-native-svg';

const WishlistIcon = ({ color, size = 21 }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 23" fill="none">
    <Path
      d="M12 23L10.26 21.3455C4.08 15.4921 0 11.6316 0 6.89373C0 3.03324 2.904 0 6.6 0C8.688 0 10.692 1.01526 12 2.61962C13.308 1.01526 15.312 0 17.4 0C21.096 0 24 3.03324 24 6.89373C24 11.6316 19.92 15.4921 13.74 21.358L12 23Z"
      fill={color}
    />
  </Svg>
);

export default WishlistIcon;
