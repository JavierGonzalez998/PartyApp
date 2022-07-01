import React from 'react'
import { ListItems } from './list'
import { List, ListItem, ListItemIcon, Divider, ListItemText } from '@mui/material'
const RenderList = () => {
    return (
        <>
            <List>
                {ListItems.map((item, index) => {
                    return (
                        <ListItem button key={index}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    )
                })}
            </List>
            <Divider />
        </>
    )
}

export default RenderList