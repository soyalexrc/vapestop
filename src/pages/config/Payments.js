import {
  Box,
  Grid,
  Typography,
  Paper,
  Switch,
  IconButton,
  TextField,
  InputAdornment,
  List,
  ListItemButton, ListItemText, Button, Drawer
} from "@mui/material";
import paymentsConfig from "../../assets/img/payments-config.png";
import PaymentsIcon from '@mui/icons-material/Payments';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckIcon from '@mui/icons-material/Check';
import Divider from "@mui/material/Divider";
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CloseIcon from '@mui/icons-material/Close';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import TvIcon from '@mui/icons-material/Tv';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import LinkIcon from '@mui/icons-material/Link';
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import AddIcon from "@mui/icons-material/Add";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import {useState} from 'react';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const integrations = [
  {
    id: 2,
    icon: <LinkIcon sx={{mx: 1}}/>,
    title: 'Link de pago',
    tpv: true,
    catalogue: true,
  },
  {
    id: 1,
    icon: <TvIcon sx={{mx: 1}}/>,
    title: 'Pagos online',
    tpv: false,
    catalogue: false,
  },
  {
    id: 3,
    icon: <PointOfSaleIcon sx={{mx: 1}}/>,
    title: 'Lectores de tarjeta',
    tpv: false,
    catalogue: false,
  },
]

const data = [
  {
    id: 1,
    icon: <PaymentsIcon sx={{mx: 1}}/>,
    title: 'Efectivo',
    tpv: true,
    catalogue: true,
  },
  {
    id: 2,
    icon: <CreditCardIcon sx={{mx: 1}}/>,
    title: 'Debito',
    tpv: true,
    catalogue: true,
  },
  {
    id: 3,
    icon: <CreditCardIcon sx={{mx: 1}}/>,
    title: 'Credito',
    tpv: true,
    catalogue: true,
  },
  {
    id: 4,
    icon: <CreditCardIcon sx={{mx: 1}}/>,
    title: 'Otros',
    tpv: true,
    catalogue: true,
  },
  {
    id: 5,
    icon: <SupervisedUserCircleIcon sx={{mx: 1}}/>,
    title: 'Saldo cliente',
    tpv: true,
    catalogue: false,
  },
]

export default function Payments() {
  const [drawer, setDrawer] = useState(false);
  const [editing, setEditing] = useState(false);
  const [creating, setCreating] = useState(false);
  const [listing, setListing] = useState(false);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const openDrawer = (title) => {
    setCategory(title);
    setDrawer(true);
  }

  return (
    <>
      <Box>
        <Box display='flex' flexDirection='column' alignItems='center' my={5}>
          <Box component='img' src={paymentsConfig} width={100} sx={{mb: 2}}/>
          <Typography color='primary' variant='h6'>Pagos</Typography>
          <Typography>Configura los métodos de pago que tu negocio acepta</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{p: 3, mb: 2}}>
              <Typography variant='h6' color='primary' sx={{mb: 2}}>Opciones por defecto</Typography>
              {/*menu item*/}
              {
                data.map(item => (
                  <Box key={item.id} onClick={() => openDrawer(item.title)} sx={{cursor: 'pointer'}}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                      <Box display='flex' alignItems='center'>
                        {item.icon}
                        <Box>
                          <Typography fontWeight='bold'>{item.title}</Typography>
                          <Box display='flex' alignItems='center'>
                            <Box display='flex' alignItems='center' mr={1}>
                              {item.tpv ? <CheckIcon fontSize='small' color='secondary'/> :
                                <CloseIcon fontSize='small' style={{color: 'lightgray'}}/>}
                              <Typography variant='caption' color={!item.tpv && 'lightgray'}>TPV</Typography>
                            </Box>
                            <Box display='flex' alignItems='center' mr={1}>
                              {item.catalogue ? <CheckIcon fontSize='small' color='secondary'/> :
                                <CloseIcon fontSize='small' style={{color: 'lightgray'}}/>}
                              <Typography variant='caption' color={!item.catalogue && 'lightgray'}>Catalogo</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <ArrowForwardIosIcon fontSize='small'/>
                    </Box>
                    <Divider sx={{my: 2}}/>
                  </Box>
                ))
              }
              {/*menu item*/}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{p: 3, mb: 2}}>
              <Typography variant='h6' color='primary' sx={{mb: 2}}>Integraciones</Typography>
              {/*menu item*/}
              {
                integrations.map(item => (
                  <Box key={item.id} sx={{cursor: 'pointer'}}>
                    <Box display='flex' alignItems='center' justifyContent='space-between'>
                      <Box display='flex' alignItems='center'>
                        {item.icon}
                        <Box>
                          <Typography fontWeight='bold'>{item.title}</Typography>
                          <Box display='flex' alignItems='center'>
                            <Box display='flex' alignItems='center' mr={1}>
                              {item.tpv ? <CheckIcon fontSize='small' color='secondary'/> :
                                <CloseIcon fontSize='small' style={{color: 'lightgray'}}/>}
                              <Typography variant='caption' color={!item.tpv && 'lightgray'}>TPV</Typography>
                            </Box>
                            <Box display='flex' alignItems='center' mr={1}>
                              {item.catalogue ? <CheckIcon fontSize='small' color='secondary'/> :
                                <CloseIcon fontSize='small' style={{color: 'lightgray'}}/>}
                              <Typography variant='caption' color={!item.catalogue && 'lightgray'}>Catalogo</Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <ArrowForwardIosIcon fontSize='small'/>
                    </Box>
                    <Divider sx={{my: 2}}/>
                  </Box>
                ))
              }
              {/*menu item*/}
            </Paper>
            <Paper elevation={3} sx={{p: 3, mb: 2}}>
              <Box display='flex' alignItems='center' justifyContent='space-between'>
                <Typography variant='h6' color='primary'>Permitir ventas a credito (Fiado)</Typography>
                <Switch color='secondary' size='small'/>
              </Box>
              <Typography variant='caption'>Desactive si no usa esta opcion</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Drawer
        anchor='right'
        open={drawer}
        onClose={() => setDrawer(false)}
      >
        <Box sx={{width: '360px'}}>
          <Box p={2} display='flex' justifyContent='space-between'>
            <Box display='flex' alignItems='center'>
              <Typography variant='h6' color='primary'>
                {category}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={() => setDrawer(false)}>
                <CloseIcon/>
              </IconButton>
            </Box>
          </Box>
          <Divider/>
          <Box p={2}>
            <TextField
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              fullWidth
              label='Descripcion'
              id="search-textfield"
              multiline
              rows={5}
              placeholder='Descripcion'
              variant="outlined"
            />
          </Box>
          <Divider sx={{ my: 2 }} />
          <Box p={2}>
            <Box display='flex' alignitems='center' justifyContent='space-between'>
              <Box display='flex'>
                <StorefrontIcon sx={{ mr: 1, color: 'gray' }} />
                <Typography color='gray'>TPV</Typography>
              </Box>
              <Switch color='secondary' size='small' defaultChecked  disabled/>
            </Box>
          </Box>
            <Divider />
          <Box p={2}>
            <Box display='flex' alignitems='center' justifyContent='space-between'>
              <Box display='flex'>
                <ShoppingCartIcon sx={{ mr: 1 }} />
                <Typography>Catalogo Online</Typography>
              </Box>
              <Switch color='secondary' size='small' defaultChecked />
            </Box>
          </Box>
            <Divider />
          <Box sx={{ position: 'absolute', bottom: 0, left: 0, right : 0 }}>
            <Divider />
            <Box display='flex' justifyContent='flex-end' m={2}>
              <Button variant='outlined' sx={{ mr: 1 }} onClick={() => setDrawer(false)}>Descartar</Button>
              <Button variant='contained' color='secondary' onClick={() => setDrawer(false)}>Guardar cambios</Button>
            </Box>
          </Box>

          {
            listing &&
            <Box>
              <List>
                <ListItemButton sx={{p: 2}}>
                  <ListItemText primary="Resistencias"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}}>
                  <ListItemText primary="Pods"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}}>
                  <ListItemText primary="Accesorios"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}}>
                  <ListItemText primary="E liquids"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}}>
                  <ListItemText primary="Salts"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}}>
                  <ListItemText primary="Desechables"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}}>
                  <ListItemText primary="Vidrios / Pyrex"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
              </List>
            </Box>
          }

        </Box>
      </Drawer>
    </>
  )
}
