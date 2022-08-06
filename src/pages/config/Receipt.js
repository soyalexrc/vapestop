import {Box, Typography, Grid, Paper, Button, Switch, InputAdornment, Tooltip, TextField, Divider} from "@mui/material";
import receiptConfig from "../../assets/img/receipt-config.png";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from "@mui/icons-material/Edit";
import image from "../../assets/img/rufacode-logo.jpg";
import PersonIcon from "@mui/icons-material/Person";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SendIcon from "@mui/icons-material/Send";
import PrintIcon from "@mui/icons-material/Print";
import { styled } from '@mui/material/styles';

const RippedPaperBottom = styled(Box)({
  content: '""',
  position: 'absolute',
  right: 0,
  left: 0,
  top: '100%',
  height: '28px',
  backgroundSize: '24px 100%',
  backgroundImage: 'linear-gradient(135deg,#fff 25%,transparent 0),linear-gradient(225deg,#fff 25%,transparent 0)',
  backgroundPosition: '0 0',
})
const RippedPaperBottomTop = styled(Box)({
  transform: 'rotate(180deg)',
  content: '""',
  position: 'absolute',
  right: 0,
  left: 0,
  bottom: '100%',
  height: '28px',
  backgroundSize: '24px 100%',
  backgroundImage: 'linear-gradient(135deg,#fff 25%,transparent 0),linear-gradient(225deg,#fff 25%,transparent 0)',
  backgroundPosition: '0 0',
})

export default function Receipt() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={receiptConfig} width={100} sx={{mb: 2}}/>
        <Typography color='primary' variant='h6'>Mi Recibo</Typography>
        <Typography>Personaliza los datos impresos en el recibo</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
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
            <Button variant='outlined' size='small'
                    fullWidth sx={{my: 2}}>
              Editar datos del negocio
            </Button>
          </Paper>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Box display='flex' justifyContent='space-between'>
              <Box>
                <Typography variant='h6' color='primary'>Añadir datos del cliente</Typography>
                <Typography>Nombre, dirección y teléfono</Typography>
              </Box>
              <Switch color='secondary' size='small'/>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Typography variant='h6' color='primary' sx={{mb: 2}}>Encabezado y pié de página</Typography>
            <TextField
              fullWidth
              sx={{mb: 2}}
              id="identification-textfield"
              label='Texto del encabezado'
              placeholder="Texto del encabezado"
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
              label='Texto al pie de pagina'
              placeholder="Texto al pie de pagina"
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
          </Paper>
        </Grid>
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{p: 3, backgroundColor: '#eff1f3'}}>
            <Box display='flex' alignItems='center' flexDirection='column'>
              <Box display='flex' alignItems='center' mb={2}>
                <VisibilityIcon fontSize='small' sx={{mr: 1}}/>
                <Typography fontWeight='bold'>Vista previa del recibo</Typography>
              </Box>
              <Box p={2} sx={{maxWidth: '400px', backgroundColor: '#fff', position: 'relative'}}>
                <RippedPaperBottom />
                <RippedPaperBottomTop />
                <Box>
                  <Box display='flex' justifyContent='space-between' p={2}>
                    <Box component='img' src={image} width={60}/>
                    <Typography variant='h5'>RECIBO #4-27</Typography>
                  </Box>
                  <Box p={2}>
                    <Typography fontWeight='bold' sx={{mb: 1}}>Vape Stop Free Market</Typography>
                    <Typography>C.C. Free Market local D7, Naguanagua, Carabobo. ● +584 244 148 110 ●
                      J-41319794-4J-41319794-4</Typography>
                  </Box>
                  <Divider/>
                  <Box p={2}>
                    <Box display='flex' alignItems='center'>
                      <PersonIcon color='primary'/>
                      <Typography fontWeight='bold'>David Hunter</Typography>
                    </Box>
                    <Typography variant='caption' color='gray'>
                      +584 125 028 237
                    </Typography>
                  </Box>
                  <Divider/>
                  <Box p={2}>
                    <Box sx={{borderBottom: '2px solid #535d6e'}}>
                      <Typography variant='h5' color='primary' fontWeight='bold'>1 item (Cant.: 1)</Typography>
                    </Box>
                    {/*items*/}
                    <Box display='flex' alignItems='center' justifyContent='space-around'>
                      <Typography variant='caption'>1x</Typography>
                      <Typography variant='caption' sx={{p: 2}}>HQD Cuie Plus Ice 1200 Puffs HQD Cuie Plus Ice 1200
                        Puffs</Typography>
                      <Typography variant='caption'>$10.00</Typography>
                    </Box>
                    <Divider/>
                    {/*items*/}
                  </Box>
                  <Box p={2}>
                    <Box sx={{borderBottom: '2px solid #535d6e'}} p={2}>
                      <Box display='flex' alignItems='flex-end' flexDirection='column'>
                        <Typography variant='h6' color='primary'>Total: $10.00</Typography>
                        <Typography variant='caption' color='gray'>Efectivo: $10.00</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{textAlign: 'center'}}>
                    <Typography fontSize='12px' color='gray'>¡Muchas Gracias por su Compra!</Typography>
                    <Typography fontSize='12px' color='gray'>3 de agosto de 2022 15:35</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
