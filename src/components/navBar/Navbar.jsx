import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled, useTheme } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Tooltip } from '@mui/material';
import CustomDrawer from './CustomDrawer';
import { dataContext } from '../../context/context';
import Login from './modals/login';
import { useNavigate } from 'react-router-dom';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

export default function Navbar(props) {
    const theme = useTheme();
    const navigate = useNavigate();
    const [openLogin, setOpenLogin] = React.useState(false)
    const { login, setLogin } = React.useContext(dataContext);
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const handleLogout = () => {
        setLogin(false)
        navigate("/")
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color='secondary' sx={{ top: 0 }}>
                <Toolbar sx={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    {login ?
                        <>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setOpenDrawer(!openDrawer)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Tooltip title="Cerrar sesion">
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => handleLogout()}
                            >
                                <LogoutIcon />
                            </IconButton>
                        </Tooltip>
                        </> : <Tooltip title="Iniciar sesion">
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setOpenLogin(true)}
                            >
                                <AccountCircleIcon />
                            </IconButton>
                        </Tooltip>
                    }
                </Toolbar>
            </AppBar>
            <CustomDrawer open={openDrawer} onClose={setOpenDrawer}/>
            {props.children}
            <Login open={openLogin} onClose={setOpenLogin} />
        </Box>
    );
}