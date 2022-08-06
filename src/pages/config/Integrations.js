import {Box, Grid, Paper, Switch, Divider} from "@mui/material";
import integrationsConfig from "../../assets/img/integrations-config.png";
import Typography from "@mui/material/Typography";
import igIcon from '../../assets/img/ig-icon.png';
import fbIcon from '../../assets/img/fb-icon.png';
import googleIcon from '../../assets/img/google-icon.png';
import tiktokIcon from '../../assets/img/tk-icon.png';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Integrations() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={integrationsConfig} width={100} sx={{mb: 2}}/>
        <Typography color='primary' variant='h6'>Integraciones</Typography>
        <Typography>Configure sus canales de comunicación y aumente sus ventas</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{mb: 2}}>
            <Box sx={{backgroundColor: '#eff1f3', display: 'flex', p: 1}}>
              <Box component='img' src={igIcon} width={25}/>
              <Box component='img' src={fbIcon} width={25} sx={{mx: 1}}/>
              <Typography fontWeight='bold'> Facebook / Instagram</Typography>
            </Box>
            <Box p={2}>
              <Box display='flex' alignItems='center' justifyContent='space-between' p={1} sx={{cursor: 'pointer'}}>
                <Box>
                  <Typography fontWeight='bold' color='primary'>Compras</Typography>
                  <Typography variant='caption'>Conecta tu catálogo de productos a las tiendas de Facebook e
                    Instagram</Typography>
                </Box>
                <ArrowForwardIosIcon fontSize='small'/>
              </Box>
              <Divider sx={{ my: 1 }}/>
              <Box display='flex' alignItems='center' justifyContent='space-between' p={1} sx={{cursor: 'pointer'}}>
                <Box>
                  <Typography fontWeight='bold' color='primary'>Pedidos de comida</Typography>
                  <Typography variant='caption'>Recibe pedidos en tu menú digital por Facebook e Instagram</Typography>
                </Box>
                <ArrowForwardIosIcon fontSize='small'/>
              </Box>
              <Divider sx={{ my: 1 }}/>
              <Box display='flex' alignItems='center' justifyContent='space-between' p={1} sx={{cursor: 'pointer'}}>
                <Box>
                  <Typography fontWeight='bold' color='primary'>Facebook Pixel</Typography>
                  <Typography variant='caption'>Conoce el impacto de tus anuncios</Typography>
                </Box>
                <ArrowForwardIosIcon fontSize='small'/>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{mb: 2}}>
            <Box sx={{backgroundColor: '#eff1f3', display: 'flex', alignItems: 'center', p: 1}}>
              <Box component='img' src={googleIcon} width={25} sx={{mr: 1}}/>
              <Typography fontWeight='bold'> Google</Typography>
            </Box>
            <Box p={2}>
              <Box display='flex' alignItems='center' justifyContent='space-between' p={1} sx={{cursor: 'pointer'}}>
                <Box>
                  <Typography fontWeight='bold' color='primary'>Compras</Typography>
                  <Typography variant='caption'>Alcanza clientes en Google</Typography>
                </Box>
                <ArrowForwardIosIcon fontSize='small'/>
              </Box>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{mb: 2}}>
            <Box sx={{backgroundColor: '#eff1f3', display: 'flex', alignItems: 'center', p: 1}}>
              <Box component='img' src={tiktokIcon} width={25} sx={{mr: 1}}/>
              <Typography fontWeight='bold'> Tik Tok</Typography>
            </Box>
            <Box p={2}>
              <Box display='flex' alignItems='center' justifyContent='space-between' p={1} sx={{cursor: 'pointer'}}>
                <Box>
                  <Typography fontWeight='bold' color='primary'>Comercio</Typography>
                  <Typography variant='caption'>Muestre sus productos al público a través de TikTok</Typography>
                </Box>
                <ArrowForwardIosIcon fontSize='small'/>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
