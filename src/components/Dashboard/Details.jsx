import React from 'react';
import { Drawer, Divider, Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const drawerWidth = 450;

const Details = (props) => {
    const { open, onClose, event } = props
    const [detail, setDetail] = React.useState("")
    const handleClose = (value) => onClose(value);
    React.useEffect(() => {
        setDetail(event[0])
    }, [event])
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="right"
            open={open}
            onClose={handleClose}
        >
            <DrawerHeader>
                <IconButton onClick={() => handleClose(false)}>
                    <ChevronRightIcon />
                </IconButton>
            </DrawerHeader>
            <Divider />
            <Box component="div" sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                alignItems: "center"
            }}>
                {typeof detail === "object" ? 
                <>
                    <Typography variant="h5">{detail.eventName}</Typography>
                </> : null}
            </Box>
        </Drawer>
    )
}

export default Details