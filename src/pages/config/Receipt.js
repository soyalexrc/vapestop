import {Box} from "@mui/material";
import receiptConfig from "../../assets/img/receipt-config.png";
import Typography from "@mui/material/Typography";

export default function Receipt() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={receiptConfig} width={100} sx={{ mb: 2 }} />
        <Typography color='primary' variant='h6'>Mi Recibo</Typography>
        <Typography >Personaliza los datos impresos en el recibo</Typography>
      </Box>
    </Box>
  )
}
