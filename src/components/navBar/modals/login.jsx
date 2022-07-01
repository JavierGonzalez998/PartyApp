import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import BadgeIcon from '@mui/icons-material/Badge';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';
import { Base64 } from 'js-base64';
import { dataContext } from '../../../context/context';
import { login } from '../../../connection/login';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    height: "50%",
    bgcolor: 'background.paper',
    borderRadius: "2%",
    boxShadow: 24,
    p: 4,
};


export default function Login(props) {
    const {setUserData, setLogin} = React.useContext(dataContext);

    const formik = useFormik({
        initialValues: {
            mail: '',
            password: ''
        },
        onSubmit: async(values) => {
            const formData = {
                ...values,
                password: Base64.encode(values.password)
            };
            if(values.mail !== "usuario@correo.com" && values.password !== Base64.encode("usuario123")){
                setError(true)
            }else{
                setError(false);
                setUserData({
                    mail: values.mail,
                    password: values.password
                });
                setLogin(true);
                navigate("/dashboard");
                handleClose();
            }
        },
    });
    const register = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            mail: '',
            password: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const navigate = useNavigate();
    const { open, onClose } = props;
    const handleClose = () => onClose(false)
    const [error, setError] = React.useState(false)
    const [openRegister, setOpenRegister] = React.useState(false)
    const containerRef = React.useRef(null);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} component="div">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Inicio de sesion
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Para ingresar a la plataforma de PartyApp, ingrese los siguientes datos
                    </Typography>
                    {error ? <Typography variant="caption" sx={{textAlign: "center"}} color="error">Error al iniciar sesión. Por favor, intente nuevamente</Typography>: null}
                    <Box component="form" onSubmit={formik.handleSubmit} sx={{
                        width: 1,
                        height: "70%",
                        position: "absolute",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        alignItems: "center",
                        visibility: openRegister ? "hidden" : "visible"
                    }}>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="mail">
                                Ingrese su correo
                            </InputLabel>
                            <Input
                                type='mail'
                                id="mail"
                                name="mail"
                                onChange={formik.handleChange}
                                value={formik.values.mail}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="password">
                                Ingrese su contraseña
                            </InputLabel>
                            <Input
                                type='password'
                                id="password"
                                name="password"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                startAdornment={
                                    <InputAdornment position="start">
                                        <PasswordIcon />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControl variant='standard'>
                            <Button variant='contained' color="secondary" type="submit">
                                Iniciar Sesion
                            </Button>
                        </FormControl>
                        <Box component="div" sx={{
                            width: 1,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginTop: 1 / 2
                        }}>
                            <Typography variant='caption'>¿No tiene una cuenta? </Typography><Typography variant='caption' color="secondary" sx={{ cursor: "pointer" }} onClick={() => setOpenRegister(true)}>¡Registrese aqui!</Typography>
                        </Box>
                    </Box>
                    <Slide direction="left" in={openRegister} container={containerRef.current} timeout={1970}>
                        <Box component="form" onSubmit={register.handleSubmit} sx={{
                            width: 1,
                            height: "70%",
                            position: "absolute",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-around",
                            alignItems: "center",
                            visibility: openRegister ? "visible" : "hidden"
                        }}>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="firstName">
                                    Ingrese su nombre
                                </InputLabel>
                                <Input
                                    type='text'
                                    id="firstName"
                                    name="firstName"
                                    onChange={register.handleChange}
                                    value={register.values.firstName}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <BadgeIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="lastName">
                                    Ingrese su apellido
                                </InputLabel>
                                <Input
                                    type='text'
                                    id="lastName"
                                    name="lastName"
                                    onChange={register.handleChange}
                                    value={register.values.lastName}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <BadgeIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="mail">
                                    Ingrese su correo
                                </InputLabel>
                                <Input
                                    type='mail'
                                    id="mail"
                                    name="mail"
                                    onChange={register.handleChange}
                                    value={register.values.mail}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl variant="standard">
                                <InputLabel htmlFor="password">
                                    Ingrese su contraseña
                                </InputLabel>
                                <Input
                                    type='password'
                                    id="password"
                                    name="password"
                                    onChange={register.handleChange}
                                    value={register.values.password}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <PasswordIcon />
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            <FormControl variant='standard'>
                                <Button variant='contained' color="secondary" type="submit">
                                    Registrarse
                                </Button>
                            </FormControl>
                            <Box component="div" sx={{
                                width: 1,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                marginTop: 1 / 2
                            }}>
                                <Typography variant='caption'>¿Tiene una cuenta? </Typography><Typography variant='caption' onClick={() => setOpenRegister(false)} color="secondary" sx={{ cursor: "pointer" }}>¡Iniciar sesion!</Typography>
                            </Box>
                        </Box>
                    </Slide>

                </Box>
            </Modal>
        </div>
    )
};

