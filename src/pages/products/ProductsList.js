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
  Checkbox, List, ListItemButton, ListItemIcon, ListItemText,
  Pagination, TextField, InputAdornment, IconButton, Paper, useMediaQuery, FormControlLabel, Switch, Drawer, Divider,
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import {mockProducts} from '../../utils/mockData';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import {useNavigate} from 'react-router-dom'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import {formatPrice} from "../../utils/format";
import {openWhatsApp} from "../../utils/helpers";
import LabelIcon from '@mui/icons-material/Label';
import ArchiveIcon from '@mui/icons-material/Archive';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import productExample from '../../assets/img/sample-product.jpg';
import EditIcon from "@mui/icons-material/Edit";
import image from "../../assets/img/rufacode-logo.jpg";
import PersonIcon from "@mui/icons-material/Person";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SendIcon from "@mui/icons-material/Send";
import PrintIcon from "@mui/icons-material/Print";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import CloseIcon from '@mui/icons-material/Close';
import ImportProductsModal from "../../components/products/ImportProductsModal";

export default function Customers() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const [data, setData] = useState(mockProducts.data);
  const [length, setLength] = useState(mockProducts.length);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')
  const [searchCategories, setSearchCategories] = useState('')
  const [filtersDrawer, setFiltersDrawer] = useState(false);
  const [categoryDrawer, setCategoryDrawer] = useState(false);
  const [listing, setListing] = useState(true);
  const [editing, setEditing] = useState(false);
  const [creating, setCreating] = useState(false);
  const [importDialog, setImportDialog] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const goToEdit = (value) => {
    setListing(false);
    setEditing(true);
    setSearchCategories(value)
  };

  function goToListing() {
    setListing(true);
    setEditing(false);
    setCreating(false);
    setSearchCategories('')
  }

  function goToCreate() {
    setListing(false)
    setCreating(true)
    setEditing(false)
    setSearchCategories('');
  }

  return (
    <>
      <Paper elevation={4} sx={{width: '100%', p: 2}}>
        <Box p={2}>
          <Box display='flex' alignItems='center' mb={2} flexWrap='wrap'>
            <Typography variant='h2'>Productos</Typography>
            <Typography sx={{mx: 1}} color='gray'>217 articulos registrados</Typography>
          </Box>
          <Grid container>
            <Grid item xs={12} md={6} sx={{display: 'flex', alignItems: 'center', flexWrap: !largeScreen && 'wrap'}}>
              <TextField
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)
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
              <Button fullWidth={!largeScreen} size="small" onClick={() => setFiltersDrawer(true)}
                      sx={{display: 'flex', mt: !largeScreen && 2}}>
                <FilterAltIcon/>
                Filtros
              </Button>
            </Grid>
            <Grid item xs={12} md={4} display='flex' justifyContent='flex-end' alignItems='center' flexWrap='wrap'>
              <Button size='small' fullWidth={!largeScreen} onClick={() => setImportDialog(true)}
                      sx={{display: 'flex', alignItems: 'center', mt: !largeScreen && 2}}>
                <UnarchiveIcon/>
                Informes
              </Button>
              <Button size='small' fullWidth={!largeScreen} onClick={() => setCategoryDrawer(true)}
                      sx={{display: 'flex', alignItems: 'center', mt: !largeScreen && 2}}>
                <LabelIcon/>
                Categorias
              </Button>
              <Button size='small' fullWidth={!largeScreen} variant='contained' color='secondary'
                      onClick={() => setImportDialog(true)}
                      sx={{display: 'flex', alignItems: 'center', mt: !largeScreen && 2}}>
                <ArchiveIcon/>
              </Button>
            </Grid>
            <Grid item xs={12} md={2} sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <Button fullWidth={!largeScreen} variant='contained' color='secondary'
                      sx={{display: 'flex', mt: !largeScreen && 2}} onClick={() => navigate('registrar')}>
                <AddIcon/>
                Producto
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{width: '100%'}}>
          {loading && <LinearProgress/>}
        </Box>
        <Grid container spacing={2} my={2} sx={{ textAlign: 'center' }}>
          <Grid item xs={4} sm={2}>
            <Typography fontWeight='bold' color='primary'>$5,681,50</Typography>
            <Typography variant='caption'>Valor en stock</Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography fontWeight='bold' color='primary'>$5,681,50</Typography>
            <Typography variant='caption'>Costo de stock</Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography fontWeight='bold' color='primary'>$5,681,50</Typography>
            <Typography variant='caption'>Ganancia estimada</Typography>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography fontWeight='bold' color='primary'>0</Typography>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <Box sx={{width: 7, height: 7, backgroundColor: '#f5a623', borderRadius: 100, marginRight: '5px'}}/>
              <Typography variant='caption'>Stock bajo</Typography>
            </Box> </Grid>
          <Grid item xs={4} sm={2}>
            <Typography fontWeight='bold' color='primary' >10</Typography>
            <Box display='flex' alignItems='center' justifyContent='center'>
              <Box sx={{width: 7, height: 7, backgroundColor: '#fe0000', borderRadius: 100, marginRight: '5px'}}/>
              <Typography variant='caption'>Sin stock</Typography>
            </Box>
          </Grid>
          <Grid item xs={4} sm={2}>
            <Typography fontWeight='bold' color='primary'>823</Typography>
            <Typography variant='caption'>En stock</Typography>
          </Grid>
        </Grid>
        <TableContainer>
          <Table>
            <TableHead sx={{backgroundColor: '#222e3c'}}>
              <TableRow>
                <TableCell sx={{color: '#fff', fontWeight: 'bold'}}><StarBorderIcon/></TableCell>
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
                        row.isStarred ? <StarIcon style={{color: '#f5a623'}}/> :
                          <StarBorderIcon style={{color: '#f5a623'}}/>
                      }
                    </IconButton>
                  </TableCell>
                  <TableCell sx={{cursor: 'pointer',}} onClick={() => navigate(`${row.id}`)}>
                    <Box display='flex' alignItems='center'>
                      <Box component='img' src={productExample} width={40} sx={{mr: 1}} alt=""/>
                      {row.name}
                    </Box>
                  </TableCell>
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
                      <DeleteForeverIcon/>
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
      <Drawer
        anchor='right'
        open={filtersDrawer}
        onClose={() => setFiltersDrawer(false)}
      >
        <Box sx={{width: '360px'}}>
          <Box p={2} display='flex' alignItems='center' justifyContent='space-between'>
            <Typography variant='h6' color='primary'>
              Filtros
            </Typography>
            <IconButton onClick={() => setFiltersDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider/>
          <Box p={2}>
            <Typography variant='h6' color='primary'>Stock</Typography>
            <Box display='flex' flexDirection='column'>
              <FormControlLabel control={<Checkbox/>} label="Agotado"/>
              <FormControlLabel control={<Checkbox/>} label="Minimo"/>
              <FormControlLabel control={<Checkbox/>} label="Arriba del minimo"/>
              <FormControlLabel control={<Checkbox/>} label="Sin control de stock"/>
              <FormControlLabel control={<Checkbox/>} label="otros"/>
            </Box>
          </Box>
          <Divider/>
          <Box p={2}>
            <Typography variant='h6' color='primary'>Categorias</Typography>
            <Box display='flex' flexDirection='column'>
              <FormControlLabel control={<Checkbox/>} label="Resistencias"/>
              <FormControlLabel control={<Checkbox/>} label="Pods"/>
              <FormControlLabel control={<Checkbox/>} label="Mods"/>
              <FormControlLabel control={<Checkbox/>} label="Accesorios"/>
              <FormControlLabel control={<Checkbox/>} label="E liquids"/>
              <FormControlLabel control={<Checkbox/>} label="Salts"/>
              <FormControlLabel control={<Checkbox/>} label="Desechables"/>
              <FormControlLabel control={<Checkbox/>} label="Vidrios / Pyrex"/>
            </Box>
          </Box>
          <Box sx={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
            <Button fullWidth size='large' variant='contained' color='secondary'
                    onClick={() => setFiltersDrawer(false)}>
              Filtrar
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Drawer
        anchor='right'
        open={categoryDrawer}
        onClose={() => setCategoryDrawer(false)}
      >
        <Box sx={{width: '360px'}}>
          <Box p={2} display='flex' justifyContent='space-between'>
            <Box display='flex' alignItems='center'>
              {
                (editing || creating) &&
                <IconButton onClick={() => goToListing()}>
                  <ChevronLeftIcon/>
                </IconButton>
              }
              <Typography variant='h6' color='primary'>
                {listing && 'Categorias'}
                {editing && 'Editar Categoria'}
                {creating && 'Crear Categoria'}
              </Typography>
            </Box>
            <Box>
              {
                listing  &&
                <IconButton onClick={goToCreate}>
                  <AddIcon color='secondary'/>
                </IconButton>
              }
              {
                editing &&
                <IconButton onClick={() => setCategoryDrawer(false)}>
                  <DeleteForeverIcon style={{ color: 'red' }} />
                </IconButton>
              }
              <IconButton onClick={() => setCategoryDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider/>
          <Box p={2}>
            <TextField
              value={searchCategories}
              onChange={(e) => setSearchCategories(e.target.value)
              }
              sx={{width: '100%'}}
              label={!listing ? 'Complete el nombre de la categoria' : "Buscar en todos los items"}
              id="search-textfield"
              placeholder={!listing ? 'Complete el nombre de la categoria' : "Buscar en todos los items"}
              helperText={!listing && 'Max. 20 caracteres'}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton >
                      <SearchIcon/>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Divider/>
          {
            listing &&
            <Box>
              <List>
                <ListItemButton sx={{p: 2}} onClick={() => goToEdit('something...')}>
                  <ListItemText primary="Resistencias"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}} onClick={() => goToEdit('something...')}>
                  <ListItemText primary="Pods"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}} onClick={() => goToEdit('something...')}>
                  <ListItemText primary="Accesorios"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}} onClick={() => goToEdit('something...')}>
                  <ListItemText primary="E liquids"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}} onClick={() => goToEdit('something...')}>
                  <ListItemText primary="Salts"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}} onClick={() => goToEdit('something...')}>
                  <ListItemText primary="Desechables"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
                <ListItemButton sx={{p: 2}}>
                  <ListItemText primary="Vidrios / Pyrex"/>
                  <EditIcon/>
                </ListItemButton>
                <Divider/>
              </List>
            </Box>
          }
          {
            (editing || creating) &&
            <Box display='flex' justifyContent='flex-end' m={2}>
              <Button variant='contained' color='secondary'>Guardar</Button>
            </Box>
          }
        </Box>
      </Drawer>
      <ImportProductsModal open={importDialog} setOpen={setImportDialog} />
    </>
  )
}
