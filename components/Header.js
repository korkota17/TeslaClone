import React from "react";
import { View, Image } from "react-native";
import stylesHeader from "./stylesHeader";

const Header = (props) =>{
    return(
        <View style={stylesHeader.container}>
            <Image style={stylesHeader.logo} source={require('../assets/images/logo.png')} />
            <Image style={stylesHeader.menu} source={require('../assets/images/menu.png')} />
        </View>
    )
}
export default Header