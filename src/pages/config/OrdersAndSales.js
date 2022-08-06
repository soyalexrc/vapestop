import {Box} from "@mui/material";
import ordersSalesConfig from "../../assets/img/orders-sales-config.png";
import Typography from "@mui/material/Typography";


export default function OrdersAndSales() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={ordersSalesConfig} width={100} sx={{ mb: 2 }} />
        <Typography color='primary' variant='h6'>Pedidos y ventas</Typography>
        <Typography >Configura las tasas de ventas y estados de pedidos</Typography>
      </Box>
    </Box>
  )
}
