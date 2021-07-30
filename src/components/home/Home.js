import React from 'react';
import { Text ,SafeAreaView, ScrollView } from "react-native";
import TopBanner from './HomeComponents/TopBanner';
import Header from './HomeComponents/Header';
import StoryCard from '../stream/StoryCard';
import LiveCard from '../live//StoryCard';
import UpcomingCard from '../upcoming/StoryCard';
import UpcomingCard1 from '../upcoming/StoryCard';
import { homeSafeAreaView as styles } from './HomeComponents/styles';


const Home = () => {
    return (
        <SafeAreaView style={{ backgroundColor: '#000119'}}>
            <Header/>
                <ScrollView>
                    <TopBanner/>
                    <StoryCard/>
                    <LiveCard/>
                    <UpcomingCard/>
                    <UpcomingCard1/>
                </ScrollView>
        </SafeAreaView>
    )
}

export default Home;