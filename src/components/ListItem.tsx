import React from 'react'
import { ListButton } from '../styles/button'
import { ArrowImage, ListImage, TaskImage } from '../styles/image'
import { ItemView, TaskView } from '../styles/wrapper'
import { TaskTitle } from '../styles/text'

const ListItem = () => {
    return (
        <ListButton>
            <ListImage
                source={require('../assets/images/image1.png')}
            />
            <ItemView>
                <TaskTitle>Play a game</TaskTitle>
                <TaskView>
                    <TaskImage
                        source={require('../assets/images/task.png')}
                    />
                    <TaskTitle>Running Now</TaskTitle>
                </TaskView>
            </ItemView>
            <ArrowImage
                source={require('../assets/images/arrow.png')}
            />
        </ListButton>
    )
}

export default ListItem