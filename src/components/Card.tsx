import { View } from 'react-native';
import React from 'react'
import ToggleButton from './ToggleButton';
import { CardText, CardBodyText } from '../styles/text';
import { CardView } from '../styles/wrapper';
import { CardImage } from '../styles/image';

interface CardProps {
    title: string;
    text: string;
    time: string;
    imageUrl: any;
    cardType: string;
}

const Card: React.FC<CardProps> = ({ title, text, time, imageUrl, cardType }) => {
    return (
        <View style={{ padding: 10, width: '50%' }}>
            <CardText>{title}</CardText>
            <CardView type={cardType}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <CardBodyText type={cardType}>{text}</CardBodyText>
                        <CardBodyText type={cardType}>{time}</CardBodyText>
                    </View>
                    <View>
                        <CardImage source={imageUrl} type={cardType} />
                    </View>
                </View>
                <View>
                    <ToggleButton />
                </View>
            </CardView>
        </View>
    );
}

export default Card;
