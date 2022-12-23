import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Link, Container, Typography, Divider, Stack, Button, Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
// hooks
import { useState } from 'react';
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';
// sections
import { LoginForm } from '../sections/auth/login';


// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    zIndex: -1,
  },
}));

const StyledContent = styled('div')(({ theme }) => ({
  position: 'absolute',
  right: 0,
  maxWidth: 480,
  margin: 'auto',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 15),
  backgroundColor: 'rgba(255, 255, 255, 0.8)'
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const navigate = useNavigate()

  const mdUp = useResponsive('up', 'md');

  
  const [snack, setSnack] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  }); 

  const { vertical, horizontal, open } = snack
  
  const handleClick = () => {
    if(form.user && form.password){
      navigate('/dashboard',{ replace:true});
    }
    else {
      setSnack({...snack, open:true});
    }  
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnack({...snack, open:false});
  };

  const [form, setForm] = useState({
    user: "",
    password: "",
    confirmPassword:"",
  })

  const handleUser = (e)=>{
    e.preventDefault();
    const value = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(value);
  }

  const handlePassword = (e) => {
    e.preventDefault();
    const value = {
      ...form,
      [e.target.name]: e.target.value
    }
    setForm(value);
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )



  return (
    <>
      <Helmet>
        <title> Login | Minimal UI </title>
      </Helmet>

      <StyledRoot>
        <div 
          style={{
            backgroundImage: "url('/assets/illustrations/fundo_login.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'flex-end'
          }}>
            <a href='#' style={{color: 'white', fontFamily: 'Arial', fontSize:'12px', marginLeft:'15%',  }}>Todos os direitos reservados a STAFEBANK | COPYRIGHT STAFEHOUSE ! 2021</a>
          </div>

        <Container maxWidth="sm">
          <StyledContent> 
            <Logo />
            <LoginForm handleClick={handleClick} handleUser={handleUser} handlePassword={handlePassword}/>
          </StyledContent>
        </Container>
      </StyledRoot>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={snack.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Usuário ou/e senha errado"
        action={action}
      />
    </>
  );
}
