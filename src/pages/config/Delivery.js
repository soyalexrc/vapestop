import {Box, Grid, Paper, Switch} from "@mui/material";
import deliveryConfig from "../../assets/img/delivery-config.png";
import Typography from "@mui/material/Typography";
import statusConfig from "../../assets/img/status-config.png";

export default function Delivery() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={deliveryConfig} width={100} sx={{ mb: 2 }} />
        <Typography color='primary' variant='h6'>Entrega y Retirada</Typography>
        <Typography >¿Qué opciones ofreces en tu negocio?</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Box>
                <Typography variant='h6' color='primary'>Trabajo con entregas</Typography>
                <Typography>Un campo obligatorio de dirección será solicitado a sus clientes.</Typography>
              </Box>
              <Switch color='secondary' size='small' />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Box>
                <Typography variant='h6' color='primary'>Trabajo con retiradas en el local</Typography>
                <Typography>Su dirección será informada:</Typography>
              </Box>
              <Switch color='secondary' size='small' />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
