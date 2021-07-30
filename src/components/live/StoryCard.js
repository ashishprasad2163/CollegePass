import React from 'react';
import { View, Text, Flatlist } from 'react-native';
import storyCards from './data';
import StoryItem from './components/Item';
import CommonFlatList from '../../commonViews/CommonFlatList';

const StoryCard = () => {

    const renderItem =(item, index) => (
        <StoryItem item={item} />
    )
    return (
        <View style={{ height: 140 , marginVertical: 10}}>
            <Text style={{ color: '#FFD700', fontWeight: '600', margin: 4, fontSize: 20}}>
                Upcoming Live Classes
            </Text>
           <CommonFlatList
            data={storyCards}
            horizontal={true}
            renderItem={({item, index}) => renderItem(item, index)}
           />
        </View>
    )
};

export default StoryCard;