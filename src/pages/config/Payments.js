import {Box} from "@mui/material";
import paymentsConfig from "../../assets/img/payments-config.png";
import Typography from "@mui/material/Typography";

export default function Payments() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={paymentsConfig} width={100} sx={{ mb: 2 }} />
        <Typography color='primary' variant='h6'>Pagos</Typography>
        <Typography >Configura los métodos de pago que tu negocio acepta</Typography>
      </Box>
    </Box>
  )
}
