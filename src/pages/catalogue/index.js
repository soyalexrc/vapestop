import {Box, Button, Grid, IconButton, Paper, Radio, Switch, TextField, Tooltip, useMediaQuery} from "@mui/material";
import Typography from "@mui/material/Typography";
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import palette from '../../assets/img/palette.png';
import {suggestedColors} from '../../utils/mockData';
import {styled} from '@mui/material/styles';
import {tooltipClasses} from '@mui/material/Tooltip';
import CheckIcon from '@mui/icons-material/Check';
import {useState} from 'react';
import Divider from "@mui/material/Divider";
import listType from '../../assets/img/list-type.png';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react-router-dom';

const LightTooltip = styled(({className, ...props}) => (
  <Tooltip {...props} classes={{popper: className}}/>
))(({theme}) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

export default function Catalogue() {
  const navigate = useNavigate();
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [currentColor, setCurrentColor] = useState('');
  const [catalogueType, setCatalogueType] = useState('');
  const [noStockOptions, setNoStockOptions] = useState('');
  const [editCatalogueUrl, setEditCatalogueUrl] = useState(false);

  const openCatalogue = () => {
    window.open('https://google.com', '_blank');
  }

  return (
    <Box>
      <Paper elevation={3} sx={{p: 3}}>
        <Typography variant='h2' color='primary'>Catalogo Online</Typography>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box display='flex' alignItems='center' my={2}>
              <ShareIcon sx={{fontSize: '2rem', mr: 1}} color='primary'/>
              <Box>
                <Typography>Link del catalogo</Typography>
                <Typography variant='caption'>vapestop.catalogo.com</Typography>
              </Box>
              <Button size='small' sx={{ml: 1}} color='secondary'>
                <ContentCopyIcon sx={{mr: 1}}/>
                Copiar link
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button fullWidth={!largeScreen} size='small' variant='contained' color='secondary' onClick={openCatalogue}>
              <ExitToAppIcon sx={{mr: 1}}/>
              Ver en otra pestana
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 2}}>
            <Box display='flex' flexDirection='column' alignItems='center'>
              <Box component='img' src={palette} width={100}/>
              <Typography variant='h6' color='primary' sx={{mt: 2}}>Personalización</Typography>
              <Typography>¡Personaliza tu catálogo online!</Typography>
            </Box>
            <Box mt={5}>
              <Typography sx={{mb: 2}} variant='h6'>Color principal</Typography>
              <Box p={2} sx={{backgroundColor: '#f7f7f8'}}>
                <Typography>Elige un color para tu catálogo</Typography>
                <Box display='flex' flexWrap='wrap' mt={2}>
                  {
                    suggestedColors.map(color => (
                      <LightTooltip key={color.id} title={color.color}>
                        <Box onClick={() => setCurrentColor(color.color)} sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          cursor: 'pointer',
                          backgroundColor: color.color,
                          width: 30,
                          height: 30,
                          m: 1,
                          borderRadius: .5
                        }}>
                          {currentColor === color.color && <CheckIcon style={{color: '#fff'}}/>}
                        </Box>
                      </LightTooltip>
                    ))
                  }
                </Box>
              </Box>
              <Divider sx={{py: 2}}/>
            </Box>
            <Box p={2}>
              <Typography sx={{mb: 2}} variant='h6' color='primary'>Modo de exhibición principal</Typography>
              <Box p={2} sx={{backgroundColor: '#f7f7f8'}}>
                <Box display='flex' justifyContent='center'>
                  <Box component='img' src={listType} width={200}/>
                </Box>
                <Box display='flex' alignItems='center' justifyContent='space-between' py={2}
                     onClick={() => setCatalogueType('list')} sx={{cursor: 'pointer'}}>
                  <Box>
                    <Typography variant='h6' color='primary'>Modo Lista</Typography>
                    <Typography variant='caption'>Navegación más rápida, ideal para grandes cantidades de
                      productos.</Typography>
                  </Box>
                  <Radio color='secondary' size='small' checked={catalogueType === 'list'}/>
                </Box>
                <Divider sx={{my: 1}}/>
                <Box display='flex' alignItems='center' justifyContent='space-between' py={2}
                     onClick={() => setCatalogueType('insta')} sx={{cursor: 'pointer'}}>
                  <Box>
                    <Typography variant='h6' color='primary'>Modo InstaView</Typography>
                    <Typography variant='caption'>Mejor ver el producto, ideal para fotos bien producidas.</Typography>
                  </Box>
                  <Radio color='secondary' size='small' checked={catalogueType === 'insta'}/>
                </Box>
              </Box>
              <Divider sx={{py: 2}}/>
            </Box>
            <Box p={2}>
              <Typography sx={{mb: 2}} variant='h6' color='primary'>Productos sin stock</Typography>
              <Box p={2} sx={{backgroundColor: '#f7f7f8'}}>
                <Box display='flex' alignItems='center' justifyContent='space-between'
                     onClick={() => setNoStockOptions('notShow')} sx={{cursor: 'pointer'}}>
                  <Box>
                    <Typography fontWeight='bold' color='primary'>No mostrar en el catalogo</Typography>
                  </Box>
                  <Radio color='secondary' size='small' checked={noStockOptions === 'notShow'}/>
                </Box>
                <Divider sx={{my: 1}}/>
                <Box display='flex' alignItems='center' justifyContent='space-between'
                     onClick={() => setNoStockOptions('notAvailable')} sx={{cursor: 'pointer'}}>
                  <Box>
                    <Typography fontWeight='bold' color='primary'>Mostrar como no disponible</Typography>
                  </Box>
                  <Radio color='secondary' size='small' checked={noStockOptions === 'notAvailable'}/>
                </Box>
                <Divider sx={{my: 1}}/>
                <Box display='flex' alignItems='center' justifyContent='space-between'
                     onClick={() => setNoStockOptions('show')} sx={{cursor: 'pointer'}}>
                  <Box>
                    <Typography fontWeight='bold' color='primary'>Exhibir normalmente</Typography>
                  </Box>
                  <Radio color='secondary' size='small' checked={noStockOptions === 'show'}/>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{mb: 2, p: 2}}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Box>
                <Typography variant='h6'>Publicar Catalogo Online</Typography>
                <Typography
                  variant='caption'
                >
                  https://vapestop.com
                  <Typography
                    variant='caption'
                    fontWeight='bold'
                    onClick={() => setEditCatalogueUrl(!editCatalogueUrl)}
                    sx={{cursor: 'pointer', mx: 1}}
                    color='secondary'
                  >
                    {editCatalogueUrl ? 'Cerrar' : 'Editar'}
                  </Typography>
                </Typography>
              </Box>
              <Switch color='secondary'/>
            </Box>
            {
              editCatalogueUrl &&
              <Box>
                <TextField
                  sx={{my: 2}}
                  fullWidth
                  size='small'
                  label='Editar URL de catalogo'
                  placeholder='Editar URL de catalogo'
                />
                <Button size='small' onClick={() => setEditCatalogueUrl(false)} variant='contained' color='secondary'
                        fullWidth>
                  Guardar
                </Button>
              </Box>
            }
          </Paper>
          <Paper elevation={3} sx={{mb: 2, p: 2}}>
            <Typography variant='h6' color='primary'>Datos de la tienda</Typography>
            <Typography>¡Completa los datos de tu tienda y deja tu catálogo profesional!</Typography>
            <Grid container spacing={2} my={1}>
              <Grid item xs={12} md={6}>
                <Box display='flex' alignItems='center'>
                  <CheckIcon color='secondary' fontSize='small' sx={{mr: 1}}/>
                  <Typography>Nombre del comercio</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display='flex' alignItems='center'>
                  <CheckIcon color='secondary' fontSize='small' sx={{mr: 1}}/>
                  <Typography>Logo</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display='flex' alignItems='center'>
                  <CheckIcon color='secondary' fontSize='small' sx={{mr: 1}}/>
                  <Typography>Telefono</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display='flex' alignItems='center'>
                  <CheckIcon color='secondary' fontSize='small' sx={{mr: 1}}/>
                  <Typography>Whatsapp</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display='flex' alignItems='center'>
                  <CheckIcon color='secondary' fontSize='small' sx={{mr: 1}}/>
                  <Typography>Direccion</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display='flex' alignItems='center'>
                  <CheckIcon color='secondary' fontSize='small' sx={{mr: 1}}/>
                  <Typography>Redes Sociales</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box display='flex' alignItems='center'>
                  <CloseIcon style={{color: 'gray'}} fontSize='small' sx={{mr: 1}}/>
                  <Typography>Sobre el Negocio</Typography>
                </Box>
              </Grid>
            </Grid>
            <Button variant='contained' onClick={() => navigate('/configuracion')} size='small' color='secondary'
                    fullWidth sx={{my: 2}}>
              Completar los datos de la tienda
            </Button>
          </Paper>
          <Paper elevation={3} sx={{mb: 2, p: 2}}>
            <Typography variant='h6' color='primary'>Pedidos</Typography>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Typography fontWeight='bold' color='primary'>Aceptar pedidos online</Typography>
              <Switch color='secondary'/>
            </Box>
            <Typography variant='caption'>
              Tus pedidos llegarán como <span style={{fontWeight: 'bold'}}>Pendente</span> hasta que los aceptes
              como <span style={{fontWeight: 'bold'}}>Confirmado</span>. *Pedidos pagados van a llegar como <span style={{ fontWeight: 'bold' }}>Pagado</span>.
            </Typography>
          </Paper>
          <Paper elevation={3} sx={{mb: 2, p: 2}}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Typography variant='h6' color='primary'>Pagos integrados</Typography>
              <IconButton onClick={() => navigate('/configuracion')}>
                <ExitToAppIcon  />
              </IconButton>
            </Box>
            <Typography>Personaliza los métodos de pago de tu negocio</Typography>
            <Box my={2}>
              <Box display='flex' alignItems='center'>
                <CheckIcon color='secondary' sx={{ mr: 1 }} size='small' />
                <Typography>Efectivo</Typography>
              </Box>
              <Box display='flex' alignItems='center'>
                <CheckIcon color='secondary' sx={{ mr: 1 }} size='small' />
                <Typography>Debito</Typography>
              </Box>
              <Box display='flex' alignItems='center'>
                <CheckIcon color='secondary' sx={{ mr: 1 }} size='small' />
                <Typography>Credito</Typography>
              </Box>
              <Box display='flex' alignItems='center'>
                <CheckIcon color='secondary' sx={{ mr: 1 }} size='small' />
                <Typography>Otros</Typography>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{mb: 2, p: 2}}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Typography variant='h6' color='primary'>Entrega y retirada</Typography>
              <IconButton onClick={() => navigate('/configuracion')}>
                <ExitToAppIcon  />
              </IconButton>
            </Box>
            <Typography>Configura las opciones que tu negocio ofrece</Typography>
            <Button variant='outlined' fullWidth size='small' sx={{ my: 2 }} onClick={() => navigate('/configuracion')}>
              Configurar entrega y retirada
            </Button>
          </Paper>
          <Paper elevation={3} sx={{mb: 2, p: 2}}>
            <Box display='flex' alignItems='center' justifyContent='space-between'>
              <Typography variant='h6' color='primary'>Canales de venta</Typography>
              <IconButton onClick={() => navigate('/configuracion')}>
                <ExitToAppIcon  />
              </IconButton>
            </Box>
            <Typography>Integración con Google, Facebook, Instagram y TikTok</Typography>
          </Paper>

        </Grid>
      </Grid>
    </Box>
  )
}
