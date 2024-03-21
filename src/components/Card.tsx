import React from 'react'
import ToggleButton from './ToggleButton';
import { CardText, CardBodyText } from '../styles/text';
import { CardBody, CardSection, CardView, Wrapper } from '../styles/wrapper';
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
        <CardSection>
            <CardText>{title}</CardText>
            <CardView type={cardType}>
                <CardBody>
                    <Wrapper>
                        <CardBodyText type={cardType}>{text}</CardBodyText>
                        <CardBodyText type={cardType}>{time}</CardBodyText>
                    </Wrapper>
                    <Wrapper>
                        <CardImage source={imageUrl} type={cardType} />
                    </Wrapper>
                </CardBody>
                <ToggleButton />
            </CardView>
        </CardSection>
    );
}

export default Card;
