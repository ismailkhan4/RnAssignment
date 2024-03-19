import { View, Text, StyleSheet, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'
import { HeaderView, ImageView } from '../styles/wrapper'
import { HeaderText } from '../styles/text'

const Header = () => {
    return (
        <HeaderView>
            <StatusBar
                animated={true}
                backgroundColor="#182545"
            />
            <ImageView>
                <Image
                    source={require('../assets/images/home.png')}
                    style={{
                        height: 20,
                        width: 20
                    }}
                />
            </ImageView>
            <HeaderText>Routines</HeaderText>
            <ImageView>
                <Image
                    source={require('../assets/images/settings.png')}
                    style={{
                        height: 20,
                        width: 20
                    }}
                />
            </ImageView>
        </HeaderView>
    )
}

export default Header

const styles = StyleSheet.create({
    text: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 20
    }
})