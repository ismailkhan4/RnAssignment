import React from 'react'
import { ListButton } from '../styles/button'
import { ArrowImage, ListImage, TaskImage } from '../styles/image'
import { ItemView, TaskView } from '../styles/wrapper'
import { TaskTitle } from '../styles/text'

const ListItem = ({ type, name, image }: { type: string, name: string, image: string }) => {
    return (
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
    )
}

export default ListItem