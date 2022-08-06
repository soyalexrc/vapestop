import {Box, Chip, Container, Typography} from "@mui/material";
import { useState } from 'react';
import GeneralConfig from "./GeneralConfig";
import OrdersAndSales from "./OrdersAndSales";
import Receipt from "./Receipt";
import Payments from "./Payments";
import Delivery from "./Delivery";
import Integrations from "./Integrations";
import LoadingScreen from "../../components/LoadingScreen";

export default function MainConfig() {
  const [view, setView] = useState('General');

  function renderView(str) {
    switch (str) {
      case 'General':
        return <GeneralConfig />
      case 'Pedidos y Ventas':
        return <OrdersAndSales />
      case 'Recibo':
        return <Receipt />
      case 'Pagos':
        return <Payments />
      case 'Entrega y Retirada':
        return <Delivery />
      case 'Integraciones':
        return <Integrations />
      default:
        return;
    }
  }

  return (
    <Container>
      <Typography variant='h2' color='primary'>Configuracion</Typography>
      <Box display='flex' flexWrap='wrap' my={2}>
        {
          ['General', 'Pedidos y Ventas', 'Recibo', 'Pagos', 'Entrega y Retirada', 'Integraciones'].map((chip, index) => (
            <Chip color={chip === view ? 'secondary' : 'default'} sx={{ m:1 }} label={chip} onClick={() => setView(chip)}/>
          ))
        }
      </Box>
      {renderView(view)}
    </Container>
  )
}
