import { StyleSheet, Platform } from 'react-native';
import { windowWidth, windowHeight } from '../../../utilities/Dimension';

export const topBannerStyle = StyleSheet.create({
    headingText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '900',
        marginHorizontal: 8,
    },
    textContainer: {
        marginTop: (20 / 100) * windowHeight,
        padding: 15,
        flex: 1,
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        flex: 1,
    },
    container: {
        width: windowWidth,
        height: (30 / 100) * windowHeight,
        marginVertical: 10,
    },
    header: {
        height: (5 / 100) * windowHeight,
        backgroundColor: 'black',
        width: '100%',
    }
});

