import {
  Box,
  LinearProgress,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  Button,
  TableHead,
  TableBody,
  Grid,
  Pagination, TextField, InputAdornment, IconButton, Paper, useMediaQuery, Drawer, Divider, Menu, MenuItem
} from "@mui/material";
import ReceiptIcon from '@mui/icons-material/Receipt';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import {mockTransactions} from '../../utils/mockData';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {formatPrice} from "../../utils/format";
import {openWhatsApp} from "../../utils/helpers";
import image from '../../assets/img/rufacode-logo.jpg'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import SendIcon from '@mui/icons-material/Send';
import PrintIcon from '@mui/icons-material/Print';

export default function Transactions() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const [data, setData] = useState(mockTransactions.data);
  const [length, setLength] = useState(mockTransactions.length);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')
  const [receiptDrawer, setReceiptDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  return (
    <>
      <Paper elevation={4} sx={{width: '100%', p: 2}}>
        <Box p={2}>
          <Typography variant='h2'>Historial de ventas</Typography>
          <Grid container my={2}>
            <Grid item xs={12} md={4}>
              <TextField
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)
                }
                sx={{width: '100%'}}
                id="search-textfield"
                placeholder="Codigo, nombre, producto o valor"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SearchIcon/>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            {/*<Grid item xs={12} md={4}>*/}
            {/*  <Button fullWidth={!largeScreen} variant='contained' color='secondary'*/}
            {/*          sx={{display: 'flex', mt: !largeScreen && 2}} onClick={() => navigate('registrar')}>*/}
            {/*    <AddIcon/>*/}
            {/*    Cliente*/}
            {/*  </Button>*/}
            {/*</Grid>*/}
          </Grid>
        </Box>
        <Box sx={{width: '100%'}}>
          {loading && <LinearProgress/>}
        </Box>
        <TableContainer>
          <Table>
            <TableHead sx={{backgroundColor: '#222e3c'}}>
              <TableRow>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Codigo</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Fecha</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Clientes</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Vendedor</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Items</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Valor</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Tipo</TableCell>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Obs.</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!loading && data && data.length > 0 && data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': {border: 0},
                    transition: "background .2s",
                    '&:hover': {
                      backgroundColor: 'rgba(0,0,0, 0.05)'
                    }
                  }}
                >
                  <TableCell>
                    <Button onClick={() => setReceiptDrawer(true)}>
                      <Box display='flex' alignItems='center'>
                        <ReceiptIcon fontSize='small' style={{color: 'gray', marginRight: '.5rem'}}/>
                        <Typography>#{row.code}</Typography>
                      </Box>
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {row.date}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {row.client}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>
                      {row.seller}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Button
                      color='secondary'
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup='true'
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                    >
                      {row.items.length} {row.items.length > 1 ? 'Items' : row.items.length === 1 ? 'Item' : ''}
                    </Button>
                  </TableCell>
                  <TableCell>{formatPrice(row.value)}</TableCell>
                  <TableCell></TableCell>
                  <TableCell>{row.obs && <IconButton><VisibilityIcon/></IconButton>}</TableCell>
                  {/*<TableCell>*/}
                  {/*  <IconButton>*/}
                  {/*    <DeleteForeverIcon />*/}
                  {/*  </IconButton>*/}
                  {/*</TableCell>*/}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/*{loading && <Box sx={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}><LoadingScreen /></Box>}*/}
        {
          (!data || data.length) < 1 &&
          <Box sx={{height: '50vh', display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
            <Typography>No hay clientes pendientes...</Typography>
          </Box>
        }
        <Box sx={{display: 'flex', justifyContent: 'end', pt: 5}}>
          <Pagination
            boundaryCount={1}
            count={Math.round(length / 25)}
            defaultPage={1}
            onChange={handleChangePage}
            page={page}
            showFirstButton
            showLastButton
          />
        </Box>
      </Paper>
      <Drawer
        anchor='right'
        open={receiptDrawer}
        onClose={() => setReceiptDrawer(false)}
      >
        <Box sx={{width: '360px'}}>
          <Box p={2}>
            <Typography variant='h6'>
              Recibo #4-27
            </Typography>
          </Box>
          <Button fullWidth>
            <EditIcon sx={{mr: 1}}/>
            Editar Mi recibo
          </Button>
          {/*  receipt*/}
          <Box>
            <Box display='flex' justifyContent='space-between' p={2}>
              <Box component='img' src={image} width={100}/>
              <Typography variant='h5'>RECIBO #4-27</Typography>
            </Box>
            <Box p={2}>
              <Typography fontWeight='bold' sx={{mb: 1}}>Vape Stop Free Market</Typography>
              <Typography>C.C. Free Market local D7, Naguanagua, Carabobo. ● +584 244 148 110 ●
                J-41319794-4J-41319794-4</Typography>
            </Box>
            <Divider/>
            <Box p={2}>
              <Box display='flex' alignItems='center'>
                <PersonIcon color='primary'/>
                <Typography fontWeight='bold'>David Hunter</Typography>
              </Box>
              <Typography variant='caption' color='gray'>
                +584 125 028 237
              </Typography>
            </Box>
            <Divider/>
            <Box p={2}>
              <Box sx={{borderBottom: '2px solid #535d6e'}}>
                <Typography variant='h5' color='primary' fontWeight='bold'>1 item (Cant.: 1)</Typography>
              </Box>
              {/*items*/}
              <Box display='flex' alignItems='center' justifyContent='space-around'>
                <Typography variant='caption'>1x</Typography>
                <Typography variant='caption' sx={{p: 2}}>HQD Cuie Plus Ice 1200 Puffs HQD Cuie Plus Ice 1200
                  Puffs</Typography>
                <Typography variant='caption'>$10.00</Typography>
              </Box>
              <Divider/>
              {/*items*/}
            </Box>
            <Box p={2}>
              <Box sx={{borderBottom: '2px solid #535d6e'}} p={2}>
                <Box display='flex' alignItems='flex-end' flexDirection='column'>
                  <Typography variant='h6' color='primary'>Total: $10.00</Typography>
                  <Typography variant='caption' color='gray'>Efectivo: $10.00</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{textAlign: 'center'}}>
              <Typography fontSize='12px' color='gray'>¡Muchas Gracias por su Compra!</Typography>
              <Typography fontSize='12px' color='gray'>3 de agosto de 2022 15:35</Typography>
            </Box>
          </Box>
          <Box mt={5}>
            <Box sx={{background: '#535d6e', py: 2, display: 'flex', alignItems: 'center', justifyContent:'space-around'}}>
              <Button sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <PictureAsPdfIcon style={{color: '#fff'}}/>
                <Typography variant='caption' style={{color: '#fff'}}>Descargar PDF</Typography>
              </Button>
              <Button sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <SendIcon style={{color: '#fff'}}/>
                <Typography variant='caption' style={{color: '#fff'}}>Enviar por Email</Typography>
              </Button>
              <Button sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <PrintIcon style={{color: '#fff'}}/>
                <Typography variant='caption' style={{color: '#fff'}}>Imprimir</Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      </Drawer>
      <Menu

        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Box sx={{width: 300}}>
          <Box display='flex' alignItems='center' justifyContent='space-between' px={2} pt={1}>
            <Typography fontWeight='bold' color='primary'>Articulos del pedido (1)</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon/>
            </IconButton>
          </Box>
          <Box px={2} pb={1}>
            <Box display='flex' alignItems='center' justifyContent='space-around'>
              <Typography variant='caption'>1x</Typography>
              <Typography variant='caption' sx={{p: 2}}>HQD Cuie Plus Ice 1200 Puffs HQD Cuie Plus Ice 1200
                Puffs</Typography>
              <Typography variant='caption'>$10.00</Typography>
            </Box>
            <Divider/>
          </Box>
        </Box>
      </Menu>
    </>
  )
}
