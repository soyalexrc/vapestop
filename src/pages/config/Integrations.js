import {Box} from "@mui/material";
import integrationsConfig from "../../assets/img/integrations-config.png";
import Typography from "@mui/material/Typography";

export default function Integrations() {
  return (
    <Box>
      <Box display='flex' flexDirection='column' alignItems='center' my={5}>
        <Box component='img' src={integrationsConfig} width={100} sx={{ mb: 2 }} />
        <Typography color='primary' variant='h6'>Integraciones</Typography>
        <Typography >Configure sus canales de comunicación y aumente sus ventas</Typography>
      </Box>
    </Box>
  )
}
