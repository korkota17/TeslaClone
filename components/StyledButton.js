import React from "react";
import { View, Text, Pressable } from "react-native";
import stylesBtn from "./styledBtn";

const StyledButton = (props) => {

    const { type, content, onPress } = props

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20';
    return(
        <View style={stylesBtn.container}>
            <Pressable style={[stylesBtn.button, {backgroundColor: backgroundColor}]}
            onPress={() => onPress()}
            >
                <Text style={[stylesBtn.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    )
}
export default StyledButton