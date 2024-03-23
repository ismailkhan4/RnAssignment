import React from 'react'
import { ListButton } from '../styles/button'
import { ArrowImage, ListImage, TaskImage } from '../styles/image'
import { ItemView, SwipeView, TaskView, Wrapper } from '../styles/wrapper'
import { CardText, HeaderText, TaskTitle } from '../styles/text'
import { Swipeable } from 'react-native-gesture-handler'
import { TouchableOpacity, View } from 'react-native'

const ListItem = ({ type, name, image, onDelete, onSwipeStart, isSwiped }: { type: string, name: string, image: string, onDelete: () => void, onSwipeStart: () => void, isSwiped: boolean }) => {
    const rightSwipe = () => {
        return (
            <SwipeView>
                <TouchableOpacity onPress={onDelete}>
                    <HeaderText>Delete</HeaderText>
                </TouchableOpacity>
            </SwipeView>)
    }
    return (
        <Swipeable
            renderRightActions={rightSwipe}
            onSwipeableOpen={onSwipeStart}
            overshootRight={false}
            overshootFriction={8}
            friction={2}
            useNativeAnimations={true}
            containerStyle={{ backgroundColor: isSwiped ? 'white' : '#ffffff20' }}
        >
            <ListButton>
                <ListImage
                    source={{ uri: image }}
                />
                <ItemView>
                    <TaskTitle>{name}</TaskTitle>
                    <TaskView>
                        <TaskImage
                            source={require('../assets/images/task.png')}
                        />
                        <TaskTitle>{type}</TaskTitle>
                    </TaskView>
                </ItemView>
                <ArrowImage
                    source={require('../assets/images/arrow.png')}
                />
            </ListButton>
        </Swipeable>
    )
}

export default ListItem