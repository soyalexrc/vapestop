import {
  Autocomplete,
  Box,
  Container,
  Grid,
  Paper,
  IconButton,
  TextareaAutosize,
  TextField,
  Typography,
  Button
} from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {useState} from "react";
import {PhotoCamera} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import exampleImage from '../../assets/img/rufacode-logo.jpg';
import Divider from "@mui/material/Divider";
import moment from 'moment';

const Input = styled('input')({
  display: 'none',
});


export default function UserRegister() {
  const [userData, setUserData] = useState ({
    name: '',
    lastName: '',
    document: null,
    phone: null,
    mail: '',
    instagram: '',
    password: '',
    country: '',
    state: '',
    zone: '',
    municipality: '',
    address: '',
    date: null,
    photo: '',
    sucursal: '',
    userType: ''
  })

  function changeUserData(type, value) {
    console.log(type, value)
    setUserData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }


  return (
    <Container>
      <Typography variant='h5' sx={{ mb: 2 }}>Registro Usuario</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Paper elevation={2} sx={{p: 2}}>
            <Typography variant='h6'>Datos del usuario</Typography>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Nombre:</Typography>
              <TextField value={userData.name} onChange={e => changeUserData('name', e.target.value)} sx={{flex: 0.8}} fullWidth id="user-name-textfield" size='small' placeholder='Nombre'
                         variant="outlined"/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Apellido:</Typography>
              <TextField value={userData.lastName} onChange={e => changeUserData('lastName', e.target.value)} sx={{flex: 0.8}} fullWidth id="user-name-textfield" size='small' placeholder='Apellido'
                         variant="outlined"/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Cedula:</Typography>
              <TextField value={userData.document} onChange={e => changeUserData('document', e.target.value)} sx={{flex: 0.8}} type='number' fullWidth id="user-name-textfield" size='small'
                         placeholder='Cedula' variant="outlined"/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Telefono:</Typography>
              <TextField value={userData.phone} onChange={e => changeUserData('phone', e.target.value)} sx={{flex: 0.8}} type='number' fullWidth id="user-name-textfield" size='small'
                         placeholder='Telefono' variant="outlined"/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Email:</Typography>
              <TextField value={userData.mail} onChange={e => changeUserData('mail', e.target.value)} sx={{flex: 0.8}} fullWidth id="user-name-textfield" size='small' placeholder='Email'
                         variant="outlined"/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Instagram:</Typography>
              <TextField value={userData.instagram} onChange={e => changeUserData('instagram', e.target.value)} sx={{flex: 0.8}} fullWidth id="user-name-textfield" size='small' placeholder='Instagram'
                         variant="outlined"/>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Password:</Typography>
              <TextField value={userData.password} onChange={e => changeUserData('password', e.target.value)} sx={{flex: 0.8}} type='password' fullWidth id="user-name-textfield" size='small'
                         placeholder='Password' variant="outlined"/>
            </Box>

            <Typography variant='h6'>Direccion</Typography>

            <Grid container spacing={1} sx={{my: 2}}>
              <Grid item xs={12} sm={3}>
                <Typography>Pais</Typography>
                <Autocomplete
                  value={userData.country}
                  onChange={e => changeUserData('country', e.target.value)}
                  id='pais-autocomplete'
                  options={['venezuela', '...']}
                  renderInput={(params) => <TextField {...params} size='small' placeholder='Pais'/>}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Estado</Typography>
                <Autocomplete
                  value={userData.state}
                  onChange={e => changeUserData('state', e.target.value)}
                  id='pais-autocomplete'
                  options={['Carabobo', '...']}
                  renderInput={(params) => <TextField {...params} size='small' placeholder='Estado'/>}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Municipio</Typography>
                <Autocomplete
                  value={userData.municipality}
                  onChange={e => changeUserData('municipality', e.target.value)}
                  id='pais-autocomplete'
                  options={['Valencia', '...']}
                  renderInput={(params) => <TextField {...params} size='small' placeholder='Municipio'/>}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Typography>Zona</Typography>
                <Autocomplete
                  value={userData.zone}
                  onChange={e => changeUserData('zone', e.target.value)}
                  id='pais-autocomplete'
                  options={['Prebo', '...']}
                  renderInput={(params) => <TextField {...params} size='small' placeholder='Zona'/>}
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Typography>Direccion</Typography>
                <TextareaAutosize
                  value={userData.address}
                  onChange={e => changeUserData('address', e.target.value)}
                  style={{ width: '100%', padding: '1rem' }}
                  minRows={6}
                  placeholder="Direccion"
                />
              </Grid>
            </Grid>
            <Box sx={{ my: 3 }}>
              <Typography>Fecha de cumpleanos</Typography>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  value={userData.date}
                  onChange={e => changeUserData('date', e)}
                  renderInput={(params) => <TextField  {...params} />}
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography>Seleccionar foto</Typography>
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Sucursal:</Typography>
              <Autocomplete
                value={userData.sucursal}
                onChange={e => changeUserData('sucursal', e.target.value)}
                sx={{ flex: 0.8 }}
                id='pais-autocomplete'
                options={['sucursal 1', '...']}
                renderInput={(params) => <TextField {...params} size='small' placeholder='Sucursal'/>}
              />
            </Box>

            <Box sx={{display: 'flex', alignItems: 'center', my: 3}}>
              <Typography sx={{pl: 4, flex: 0.2}}>Tipo de usuario:</Typography>
              <Autocomplete
                value={userData.userType}
                onChange={e => changeUserData('userType', e.target.value)}
                sx={{ flex: 0.8 }}
                id='pais-autocomplete'
                options={['Usuario 1', '...']}
                renderInput={(params) => <TextField {...params} size='small' placeholder='Usuario'/>}
              />
            </Box>
            <Button variant='contained' sx={{ mt: 4 }} fullWidth>Registrar</Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={5}>
          <Paper elevation={2} sx={{p: 2}}>
            <Typography variant='h6'>Vista previa</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Box
                component='img'
                src={exampleImage}
                sx={{width: 150}}
              />
              <Typography>Nombre: {userData.name}</Typography>
              <Typography>Apellido: {userData.lastName}</Typography>
              <Typography>Cedula: {userData.document}</Typography>
              <Typography>Tipo de usuario: {userData.userType}</Typography>
            </Box>
              <Divider sx={{ my: 5 }} />
            <Box>
              <Typography>Correo: {userData.mail}</Typography>
              <Typography>Telefono: {userData.phone}</Typography>
            </Box>
            <Divider sx={{ my: 5 }} />
            <Box>
              <Typography variant='h6'>Informacion</Typography>
              <Typography>Direccion: {userData.address}</Typography>
              <Typography>Fecha de cunpleanos: {moment(userData.date).format('L')}</Typography>
              <Typography>Sucursal: {userData.sucursal}</Typography>
            </Box>
            <Divider sx={{ my: 5 }} />

            <Box>
              <Typography variant='h6'>Redes sociales</Typography>
              <Typography>Instagram: {userData.instagram}</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
