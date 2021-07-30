import React from  'react';
import { View, Text, Image } from 'react-native';

const Item = (props) => {
    return (
        <View style ={{ marginHorizontal: 2}}>
            <Image
                source={{uri: props.item.img}}
                resizeMode="contain"
                imageStyle={{borderRadius: 40}}
                style={{flex: 1,height: 100, width: 140, borderRadius: 20}}
            />
            <Text style={{ color: 'white', fontWeight: 'bold', marginHorizontal: 4}}>
                {props.item.title}
            </Text>
        </View>
    )
};

export default Item;