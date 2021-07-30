import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

const CommonFlatList = (props) => {
    return (
        <FlatList {...props}/>
    )
};

CommonFlatList.defaultProps = {
  horizontal: false,
  showsHorizontalScrollIndicator: false,
  numColumns: 1,
  keyExtractor: (item, index) => index.toString()
};

export default CommonFlatList;