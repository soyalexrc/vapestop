import {Box} from "@mui/material";
import generalConfig from '../../assets/img/general-config.png';
import Typography from "@mui/material/Typography";

export default function GeneralConfig() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={generalConfig} width={100} sx={{ mb: 2 }} />
        <Typography color='primary' variant='h6'>Informaciones generales</Typography>
        <Typography >Ofrece detalles de tu negocio</Typography>
      </Box>
    </Box>
  )
}
