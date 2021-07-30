import React, { useRef } from 'react';
import { View, Text, ImageBackground, StyleSheet} from "react-native";
import { topBannerStyle as styles } from './styles';
import Video from 'react-native-video';

const URL = 'https://d2rxf0sof329tl.cloudfront.net/137+Content+Promo+Website+Loop+10secs+V2B.mp4' ;

const TopBanner = () => {
    let player = useRef(null);
    return (
            <View style={styles.container}>
                <Video source={{ uri: URL }}
                ref={player.current}
                resizeMode={"contain"}
                // onBuffer={this.onBuffer}
                // onError={this.videoError}
                style={styles.backgroundVideo}
                repeat= {true}
                selectedVideoTrack={{
                    type: "resolution",
                    value: 1080
                    }} 
                /> 
                <View style={styles.textContainer}>
                    <Text style={styles.headingText}>
                        College Admissions Advising for Grade 9-12
                    </Text>
                </View>
            </View>
    )
};

export default TopBanner;