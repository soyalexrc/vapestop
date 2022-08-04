import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
  useMediaQuery,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

import download from '../../assets/img/download.png';

export default function ImportProductsModal({setOpen, open}) {
  const fullScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="responsive-dialog-title"
    >
      <Box display='flex' justifyContent='flex-end' p={2}>
        <IconButton>
          <CloseIcon onClick={() => setOpen(false)}/>
        </IconButton>
      </Box>
      <DialogContent sx={{ padding: '1rem 3rem' }}>
        <Box display='flex' justifyContent='center'>
          <Box component='img' src={download} width={250} sx={{ mb: 4 }}/>
        </Box>
        <Typography variant='h4' color='primary' align='center'>
          Importar productos
        </Typography>
        <Typography  align='center'>
          Utilice esta función para registrar o actualizar varios productos a la vez.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button  variant='outlined' fullWidth  onClick={() => setOpen(false)}>
          importar nuevos
        </Button>
        <Button  variant='outlined' fullWidth onClick={() => setOpen(false)} autoFocus>
          Actualizar existentes
        </Button>
      </DialogActions>
    </Dialog>
  )
}
