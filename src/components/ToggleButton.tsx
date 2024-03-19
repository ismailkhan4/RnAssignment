import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleSwitch = () => {
        setIsToggled((prevState) => !prevState);
    };
    return (
        <View>
            <TouchableOpacity
                style={[styles.toggleButton, isToggled ? styles.toggleButtonOn : styles.toggleButtonOff]}
                onPress={toggleSwitch}
            >
                <View style={[styles.toggleInner, isToggled ? styles.toggleInnerOn : styles.toggleInnerOff]} />
            </TouchableOpacity>
        </View>
    )
}

export default ToggleButton

const styles = StyleSheet.create({
    toggleButton: {
        width: 57,
        height: 29,
        borderRadius: 15,
        justifyContent: 'center',
    },
    toggleButtonOn: {
        backgroundColor: '#72CEBC',
    },
    toggleButtonOff: {
        backgroundColor: '#72777F',
    },
    toggleInner: {
        width: 26,
        height: 26,
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
    },
    toggleInnerOn: {
        left: 28,
        backgroundColor: '#fff'
    },
    toggleInnerOff: {
        left: 4,
    },
})