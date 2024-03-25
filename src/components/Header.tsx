import { StatusBar } from 'react-native'
import React from 'react'
import { HeaderView, ImageView } from '../styles/wrapper'
import { HeaderText } from '../styles/text'
import { HeaderImage } from '../styles/image'

const Header = () => {
    return (
        <HeaderView>
            <StatusBar
                animated={true}
                backgroundColor="#182545"
            />
            <ImageView>
                <HeaderImage
                    source={require('../assets/images/home.png')}
                />
            </ImageView>
            <HeaderText>Routines</HeaderText>
            <ImageView>
                <HeaderImage
                    source={require('../assets/images/settings.png')}
                />
            </ImageView>
        </HeaderView>
    )
}

export default Header