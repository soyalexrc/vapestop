import {
  Box,
  Grid,
  Typography,
  Paper,
  InputAdornment,
  Tooltip,
  TextField,
  Button,
  IconButton,
  Switch, Radio
} from "@mui/material";
import generalConfig from '../../assets/img/general-config.png';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LockIcon from '@mui/icons-material/Lock';
import PhoneInput from "react-phone-input-2";
import {useState} from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/img/logo.jpg';
import Divider from "@mui/material/Divider";

export default function GeneralConfig() {
  const [phone1, setPhone1] = useState('')
  const [show, setShow] = useState(false);
  const [order, setOrder] = useState('');

  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={generalConfig} width={100} sx={{mb: 2}}/>
        <Typography color='primary' variant='h6'>Informaciones generales</Typography>
        <Typography>Ofrece detalles de tu negocio</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Typography variant='h6' color='primary' sx={{mb: 1}}>Identificacion</Typography>
            <TextField
              fullWidth
              sx={{mb: 2}}
              id="identification-textfield"
              label='Nombre del comercio'
              placeholder="Nombre del comercio"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title='Exhibido en su catalogo'>
                      <HelpOutlineIcon sx={{cursor: 'pointer'}}/>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              sx={{mb: 2}}
              id="identification-textfield"
              label='Nombre del responsable o de la empresa'
              placeholder="Nombre del responsable o de la empresa"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title='No sera exhibido'>
                      <LockIcon sx={{cursor: 'pointer'}}/>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              sx={{mb: 2}}
              id="identification-textfield"
              label='Cedula de identidad de la persona juridica'
              placeholder="Cedula de identidad de la persona juridica"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title='No sera exhibido'>
                      <LockIcon sx={{cursor: 'pointer'}}/>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
            <Box p={2} sx={{backgroundColor: '#e3f6f1'}}>
              <Typography variant='caption'>
                Informar una identificación legal es una medida para validar su cuenta, preservar su privacidad y
                garantizar la calidad de todos los catálogos de Kyte. <span style={{fontWeight: 'bold'}}> Los datos de identificación no se mostrarán en su
                catálogo en línea.</span>
              </Typography>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Typography variant='h6' color='primary'>Datos de contacto</Typography>
              <Tooltip title='Toda la informacion de esta seccion sera exhibida en su catalogo'>
                <HelpOutlineIcon sx={{cursor: 'pointer'}}/>
              </Tooltip>
            </Box>
            <Box>
              <Box mt={2}>
                <PhoneInput
                  inputStyle={{
                    width: '100%'
                  }}
                  specialLabel='Telefono'
                  country='ve'
                  preferredCountries={['us', 've', 'pe']}
                  value-={phone1}
                  onChange={(phone) => setPhone1(phone)}
                />
              </Box>
              <Box my={2}>
                <PhoneInput
                  inputStyle={{
                    width: '100%'
                  }}
                  specialLabel='Telefono'
                  country='ve'
                  preferredCountries={['us', 've', 'pe']}
                  value-={phone1}
                  onChange={(phone) => setPhone1(phone)}
                />
              </Box>
              <TextField
                fullWidth
                sx={{mb: 2}}
                id="identification-textfield"
                label='Instagram'
                placeholder="Instagram"
                variant="outlined"
              />
              <TextField
                fullWidth
                sx={{mb: 2}}
                id="identification-textfield"
                label='Email'
                placeholder="Email"
                variant="outlined"
              />
            </Box>
          </Paper>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Box display='flex' alignItems='center' justifyContent='space-between' mb={2}>
              <Typography variant='h6' color='primary'>Dirección</Typography>
              <Button size='small' color='secondary'>
                <LocationOnIcon sx={{mr: 1}}/>
                Ver en el mapa
              </Button>
            </Box>
            <TextField
              fullWidth
              sx={{mb: 2}}
              id="identification-textfield"
              label='Direccion'
              placeholder="Direccion"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title='Exhibido en su catalogo'>
                      <HelpOutlineIcon sx={{cursor: 'pointer'}}/>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              fullWidth
              sx={{mb: 2}}
              id="identification-textfield"
              label='Complemento'
              placeholder="Complemento"
              variant="outlined"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} mb={2} sx={{backgroundColor: '#eff1f3'}}>
            <Box display='flex' justifyContent='flex-end'>
              <Box display='flex' alignItems='center'>
                <IconButton>
                  <CloseIcon/>
                </IconButton>
                <Tooltip title='Exhibido en recibo y catalogo'>
                  <HelpOutlineIcon sx={{cursor: 'pointer'}}/>
                </Tooltip>
              </Box>
            </Box>
            <Box display='flex' justifyContent='center'>
              <Box component='img' src={logo} width={150}/>
            </Box>
          </Box>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Typography variant='h6' color='primary' sx={{mb: 2}}>Sobre el negocio</Typography>
            <TextField
              fullWidth
              multiline
              rows={5}
              label='Informaciones extras'
              placeholder='Informaciones extras'
              helperText='En este campo puede colocar la dirección de su negocio, horarios de funcionamiento y cualquier otra información.'
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip title='Exhibido en su catalogo'>
                      <HelpOutlineIcon sx={{cursor: 'pointer'}}/>
                    </Tooltip>
                  </InputAdornment>
                ),
              }}
            />
          </Paper>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Typography variant='h6' color='primary' sx={{mb: 2}}>Moneda</Typography>
            <TextField
              fullWidth
              label='Informaciones extras'
              placeholder='Informaciones extras'
            />
          </Paper>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Typography variant='h6' color='primary'>Opciones de exhibición</Typography>
            <Divider sx={{my: 2}}/>
            <Typography fontWeight='bold' color='primary'>Transacciones canceladas</Typography>
            <Box>
              <Box display='flex' justifyContent='space-between' alignItems='center' p={2} sx={{ cursor: 'pointer' }} onClick={() => setShow(true)}>
                <Typography>Mostrar tachadas</Typography>
                <Radio size='small' color='secondary' checked={show}/>
              </Box>
              <Box display='flex' justifyContent='space-between' alignItems='center' p={2} sx={{ cursor: 'pointer' }} onClick={() => setShow(false)}>
                <Typography>Esconder</Typography>
                <Radio size='small' color='secondary' checked={!show}/>
              </Box>
            </Box>
            <Divider sx={{my: 2}}/>
            <Typography fontWeight='bold' color='primary'>Ordenar productos en pantalla de vender</Typography>
            <Box>
              <Box display='flex' justifyContent='space-between' alignItems='center' p={2} sx={{ cursor: 'pointer' }} onClick={() => setOrder('date')}>
                <Typography>Fecha de registro</Typography>
                <Radio size='small' color='secondary' checked={order === 'date'}/>
              </Box>
              <Box display='flex' justifyContent='space-between' alignItems='center' p={2} sx={{ cursor: 'pointer' }} onClick={() => setOrder('alphabetic')}>
                <Typography>Orden alfabetica A - Z</Typography>
                <Radio size='small' color='secondary' checked={order === 'alphabetic'}/>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
