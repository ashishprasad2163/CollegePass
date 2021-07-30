import React from 'react';
import { View, Text, Image, StyleSheet} from "react-native";
import { topBannerStyle as styles } from './styles';

const HEADER_IMAGE = require("../../../assets/image/GoldNLogo.jpeg");

const TopBanner = () => {
    return (
            <Image source={ HEADER_IMAGE } style={styles.header} resizeMode={"contain"}/>
    )
};

export default TopBanner;