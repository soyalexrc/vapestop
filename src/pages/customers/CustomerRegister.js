import {
  MenuItem,
  Box,
  Container,
  Grid,
  Paper,
  IconButton,
  Chip,
  TextField,
  Typography,
  Button,
  Switch
} from "@mui/material";
import ReactCountryFlag from "react-country-flag";
import countries from '../../utils/countries';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import {DatePicker} from '@mui/x-date-pickers/DatePicker';
// import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
// import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {useState, useEffect} from "react";
// import {PhotoCamera} from "@mui/icons-material";
import {styled} from "@mui/material/styles";
import exampleImage from '../../assets/img/rufacode-logo.jpg';
import {useNavigate, useLocation, useParams} from 'react-router-dom';
import Divider from "@mui/material/Divider";
import moment from 'moment';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
// import {mockOptions} from '../../utils/mockData';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DeleteIcon from '@mui/icons-material/Delete';
import {openWhatsApp} from "../../utils/helpers";


export default function CustomerRegister() {
  const location = useLocation();
  let {id} = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({
    name: '',
    id: '',
    obs: '',
    lastName: '',
    document: null,
    phone1: null,
    phone2: null,
    mail: '',
    instagram: '',
    password: '',
    country: '',
    state: '',
    zone: '',
    municipality: '',
    address: '',
    addressComplement: '',
    date: null,
    photo: '',
    sucursal: '',
    userType: ''
  })

  useEffect(() => {
    console.log(id);
  }, [])


  function changeUserData(type, value) {
    console.log(type, value)
    setUserData(prevState => ({
      ...prevState,
      [type]: value
    }))
  }


  return (
    <Container>
      <Box display='flex' alignItems='center' mb={2}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIosIcon/>
        </IconButton>
        <Typography variant='h2'> {id ? `Cliente ${id}` : 'Registrar cliente'}</Typography>
      </Box>
      <Paper
        elevation={3}
        sx={{
          width: '100%',
          p: 3,
          display: 'flex',
          justifyContent: id ? 'space-between' : 'flex-end',
          alignItems: 'center',
          mb: 2
        }}>
        {
          id &&
          <Button onClick={() => openWhatsApp('+58 999 999 999')}>
            <Box display='flex' alignItems='center'>
              <WhatsAppIcon color='secondary' sx={{mr: 1}}/>
              <Typography color='secondary'>+58 999 999 999 </Typography>
            </Box>
          </Button>
        }
        <Box display='flex' alignItems='center'>
          <Typography>Permitir ventas a credito</Typography>
          <Switch color='secondary' disabled={!id}/>
          {
            id &&
            <IconButton>
              <DeleteIcon style={{color: 'red'}}/>
            </IconButton>
          }
        </Box>
      </Paper>
      {
        id &&
        <Box display='flex' justifyContent='center' my={2}>
          {
            ['Datos', 'Ventas', 'Pedidos', 'Cuenta'].map((chip, index) => (
              <Chip color={index === step ? 'secondary' : 'default'} sx={{ mx:1 }} label={chip} onClick={() => setStep(index)}/>
            ))
          }
        </Box>
      }
      {
        step === 0 &&
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <Box
                component='img'
                src={exampleImage}
                sx={{width: 150}}
              />
              <TextField
                value={userData.name}
                onChange={e => changeUserData('name', e.target.value)}
                fullWidth
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Nombre'
                label='Nombre'
                variant="outlined"
              />
              <TextField
                value={userData.id}
                onChange={e => changeUserData('id', e.target.value)}
                fullWidth
                sx={{mt: 2}}
                id="user-id-textfield"
                placeholder='Nº ID'
                label='Nº ID'
                variant="outlined"
              />
              <TextField
                value={userData.obs}
                onChange={e => changeUserData('id', e.target.value)}
                fullWidth
                sx={{mt: 2}}
                multiline
                rows={5}
                id="user-id-textfield"
                placeholder='Observaciones'
                label='Observaciones'
                variant="outlined"
              />

            </Paper>
          </Grid>
          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{p: 4}}>
              <Typography variant='h6'>Contacto</Typography>
              <TextField
                value={userData.mail}
                onChange={e => changeUserData('mail', e.target.value)}
                fullWidth
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Email'
                label='Email'
                variant="outlined"
              />
              <Box mt={2}>
                <PhoneInput
                  inputStyle={{
                    width: '100%'
                  }}
                  country='ve'
                  preferredCountries={['us', 've', 'pe']}
                  value-={userData.phone1}
                  onChange={(phone) => changeUserData('phone1', phone)}
                />
              </Box>
              <Box mt={2}>
                <PhoneInput
                  inputStyle={{
                    width: '100%'
                  }}
                  country='ve'
                  preferredCountries={['us', 've', 'pe']}
                  value-={userData.phone2}
                  onChange={(phone) => changeUserData('phone2', phone)}
                />
              </Box>
            </Paper>
            <Paper elevation={3} sx={{p: 4, mt: 2}}>
              <Typography variant='h6'>Direccion</Typography>
              <TextField
                value={userData.address}
                onChange={e => changeUserData('address', e.target.value)}
                fullWidth
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Direccion'
                label='Direccion'
                variant="outlined"
              />
              <TextField
                value={userData.addressComplement}
                onChange={e => changeUserData('addressComplement', e.target.value)}
                fullWidth
                multiline
                rows={5}
                sx={{mt: 2}}
                id="user-name-textfield"
                placeholder='Complemento'
                label='Complemento'
                variant="outlined"
              />
            </Paper>
          </Grid>
        </Grid>
      }
    </Container>
  )
}
