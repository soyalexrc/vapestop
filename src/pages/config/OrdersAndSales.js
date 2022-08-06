import {Box, Button, Grid, IconButton, InputAdornment, Paper, Switch, TextField, Tooltip} from "@mui/material";
import ordersSalesConfig from "../../assets/img/orders-sales-config.png";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/img/logo.jpg";
import statusConfig from '../../assets/img/status-config.png';


export default function OrdersAndSales() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={ordersSalesConfig} width={100} sx={{ mb: 2 }} />
        <Typography color='primary' variant='h6'>Pedidos y ventas</Typography>
        <Typography >Configura las tasas de ventas y estados de pedidos</Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Typography variant='h6' color='primary' sx={{mb: 1}}>Usar tasa de venta</Typography>
              <Switch color='secondary' size='small' />
            </Box>
          </Paper>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Box display='flex' justifyContent='space-between' alignItems='center'>
              <Typography variant='h6' color='primary' sx={{mb: 1}}>Datos de contacto</Typography>
              <Switch color='secondary' size='small' />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{p: 3, mb: 2}}>
            <Box display='flex' justifyContent='center'>
              <Box component='img' src={statusConfig} width={100} />
            </Box>
            <Typography variant='h6' align='center' color='primary' >Estados de pedido</Typography>
            <Typography align='center' sx={{mb: 2}}>Realice un seguimiento de sus pedidos en cada paso de su operacion con estados personalizados</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
