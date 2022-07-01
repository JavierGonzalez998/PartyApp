import React from 'react';
import { Drawer, Divider } from '@mui/material'
import { styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import RenderList from './List/RenderList'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material';
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const drawerWidth = 240;

const CustomDrawer = (props) => {
    const {open, onClose} = props
    const theme = useTheme();
    const handleClose = (value) => onClose(value);
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
    anchor="left"
    open={open}
    onClose={handleClose}
    >
      <DrawerHeader>
          <IconButton onClick={() => handleClose(false)}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
    <RenderList/>
  </Drawer>
  )
}

export default CustomDrawer