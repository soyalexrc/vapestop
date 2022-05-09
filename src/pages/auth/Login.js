import useAuth from "../../hooks/useAuth";
import {Box, Button, Grid, TextField, Typography} from "@mui/material";
import LoginImg from '../../assets/img/login-img.webp';
import {useFormik} from 'formik';
import {sleep} from '../../utils/helpers';
import {useState} from 'react';

export default function Login() {
  const [loading, setLoading] = useState(false);
  const {login} = useAuth()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async () => {
      setLoading(true);
      await sleep(2000);
      await login()
      setLoading(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container sx={{height: '100%', px: 5}}>
        <Grid item xs={6}>
          <Box
            component='img'
            width='100%'
            height='100%'
            sx={{
              maxHeight: '650px'
            }}
            src={LoginImg}
          />
        </Grid>
        <Grid item xs={6} alignItems='center' justifyContent='center' alignContent='center' justifyItems='center'
              alignSelf='center' justifySelf='center'>
          <Typography variant='h4'>Login</Typography>
          <TextField
            sx={{width: '100%', my: 2}}
            label="Email"
            variant="outlined"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <TextField
            sx={{width: '100%', my: 2}}
            label="Contrasena"
            variant="outlined"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <Button disabled={loading} variant='contained' type='submit'>
            {loading ? 'Cargando...' : 'Login'}
          </Button>
        </Grid>
      </Grid>
    </form>
  )
}
