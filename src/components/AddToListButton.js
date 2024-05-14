import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const AddToListButton = ({ onPress, color }) => (
  <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center',  }}>
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M15 7C8.925 7 4 11.925 4 18c0 11 13 21 20 23.326C31 39 44 29 44 18c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 7m3 17h12m-6-6v12"
      />
    </Svg>
    <Text style={{ marginHorizontal: 8, color:color,fontWeight:'bold', fontSize:16 }}>Add to List</Text>

  </TouchableOpacity>
);

export default AddToListButton;
