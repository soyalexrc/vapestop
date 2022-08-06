import {Box} from "@mui/material";
import deliveryConfig from "../../assets/img/delivery-config.png";
import Typography from "@mui/material/Typography";

export default function Delivery() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={deliveryConfig} width={100} sx={{ mb: 2 }} />
        <Typography color='primary' variant='h6'>Entrega y Retirada</Typography>
        <Typography >¿Qué opciones ofreces en tu negocio?</Typography>
      </Box>
    </Box>
  )
}
