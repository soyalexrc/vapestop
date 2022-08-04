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
  Pagination, TextField, InputAdornment, IconButton, Paper, useMediaQuery, FormControlLabel, Switch,
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import {mockProducts} from '../../utils/mockData';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {formatPrice} from "../../utils/format";
import {openWhatsApp} from "../../utils/helpers";
import LabelIcon from '@mui/icons-material/Label';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

export default function Customers() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const [data, setData] = useState(mockProducts.data);
  const [length, setLength] = useState(mockProducts.length);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Paper elevation={4} sx={{width: '100%', p: 2}}>
      <Box p={2}>
        <Box display='flex' alignItems='center' mb={2}>
          <Typography variant='h2'>Productos</Typography>
          <Typography sx={{mx: 2}} color='gray'>217 articulos registrados</Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              value={searchTerm}
              onChange={(e) => setSearchTerm( e.target.value)
              }
              sx={{width: '100%'}}
              id="search-textfield"
              placeholder="Item, valor o codigo"
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
              <Button fullWidth={!largeScreen} size="small" sx={{display: 'flex', mt: !largeScreen && 2}} >
                <FilterAltIcon/>
                Filtros
              </Button>
          </Grid>
          <Grid item xs={12} md={4} display='flex' justifyContent='flex-end'>
            <Button size='small' fullWidth={!largeScreen} sx={{display: 'flex', alignItems: 'center', mt: !largeScreen && 2}} >
              <UnarchiveIcon/>
              Informes
            </Button>
            <Button size='small' fullWidth={!largeScreen} sx={{display: 'flex', alignItems: 'center', mt: !largeScreen && 2}} >
              <LabelIcon/>
              Categorias
            </Button>
            <Button size='small' fullWidth={!largeScreen} variant='contained' color='secondary' sx={{display: 'flex', alignItems: 'center', mt: !largeScreen && 2}} >
              <ArchiveIcon/>
            </Button>
          </Grid>
          <Grid item xs={12} md={2} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button fullWidth={!largeScreen} variant='contained' color='secondary' sx={{display: 'flex', mt: !largeScreen && 2}} onClick={() => navigate('registrar')}>
              <AddIcon/>
              Producto
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{width: '100%'}}>
        {loading && <LinearProgress/>}
      </Box>
      <Grid container spacing={2} my={2}>
        <Grid item xs={12} sm={2}>
          <Typography fontWeight='bold' color='primary'>$5,681,50</Typography>
          <Typography variant='caption'>Valor en stock</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography fontWeight='bold' color='primary'>$5,681,50</Typography>
          <Typography variant='caption'>Costo de stock</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography fontWeight='bold' color='primary'>$5,681,50</Typography>
          <Typography variant='caption'>Ganancia estimada</Typography>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography fontWeight='bold' color='primary'>0</Typography>
          <Box display='flex' alignItems='center'>
            <Box sx={{ width: 7, height: 7, backgroundColor: '#f5a623', borderRadius: 100, marginRight: '5px' }} />
            <Typography variant='caption'>Stock bajo</Typography>
          </Box>        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography fontWeight='bold' color='primary'>10</Typography>
          <Box display='flex' alignItems='center'>
            <Box sx={{ width: 7, height: 7, backgroundColor: '#fe0000', borderRadius: 100, marginRight: '5px' }} />
            <Typography variant='caption'>Sin stock</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography fontWeight='bold' color='primary'>823</Typography>
          <Typography variant='caption'>En stock</Typography>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead sx={{backgroundColor: '#222e3c'}}>
            <TableRow>
              <TableCell sx={{color: '#fff', fontWeight: 'bold'}}><StarBorderIcon /></TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Producto</TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Categoria</TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Stock</TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Precio</TableCell>
              <TableCell sx={{color: '#fff', fontWeight: 'bold'}}>Catalogo</TableCell>
              <TableCell></TableCell>
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
                  <IconButton>
                    {
                      row.isStarred ? <StarIcon style={{ color: '#f5a623' }} /> : <StarBorderIcon style={{ color: '#f5a623' }} />
                    }
                  </IconButton>
                </TableCell>
                <TableCell sx={{ cursor: 'pointer',}} onClick={() => navigate(`${row.id}`)}>{row.name}</TableCell>
                <TableCell>{row.category}</TableCell>
                <TableCell>{row.stock}</TableCell>
                <TableCell>{formatPrice(row.price)}</TableCell>
                <TableCell>
                  <FormControlLabel
                    value="start"
                    control={<Switch color="primary" checked={row.isInCatalogue}/>}
                    label={row.isInCatalogue ? 'SI' : "NO"}
                    labelPlacement="start"
                  />
                </TableCell>
                <TableCell>
                  <IconButton>
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
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
  )
}
