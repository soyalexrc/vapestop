import {
  Box,
  LinearProgress,
  Grid,
  Typography,
  Button,
  Paper, TextField, Autocomplete, InputAdornment, Pagination
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import EditIcon from '@mui/icons-material/Edit';
import {mockProductTable} from '../../utils/mockData';
import {useState} from "react";
import IconButton from "@mui/material/IconButton";
import sampleImage from '../../assets/img/sample-product.jpg';


export default function ProductsList() {
  const [data, setData] = useState(mockProductTable.data);
  const [length, setLength] = useState(mockProductTable.length);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [userFilters, setUserFilters] = useState({
    userType: 'Admin',
    sucursal: 'Prebo 2',
    searchTerm: ''
  })

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const changeUserFilterData = (index, value) => {
    setUserFilters(prevState => ({...prevState, [index]: value}))
  }

  return (
    <Paper elevation={2} sx={{width: '100%', p: 2}}>
      <Box p={2}>
        <Box display='flex' alignItems='center' mb={2}>
          <Typography variant='h2'>Clientes</Typography>
          <Typography sx={{mx: 2}} color='gray'>24 clientes registrados</Typography>
        </Box>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <TextField
            value={userFilters.searchTerm}
            onChange={(e) =>
              changeUserFilterData("searchTerm", e.target.value)
            }
            fullWidth
            id="search-textfield"
            placeholder="Buscar por nombre o email"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonSearchIcon/>
                </InputAdornment>
              ),
            }}
          />
          <Button variant='contained' color='secondary' sx={{ display: 'flex' }}>
            <AddIcon />
            Cliente
          </Button>
        </Box>


      </Box>
      <Box sx={{width: '100%'}}>
        {loading && <LinearProgress/>}
      </Box>
      <Grid container spacing={2}>
        {
          data.map(product => (
            <Grid item xs={12} sm={4} md={3} key={product.id}>
              <Paper elevation={2} sx={{p: 2}}>
                <Box display='flex' justifyContent='center'>
                  <Box
                    component='img'
                    src={sampleImage}
                    sx={{
                      width: 250
                    }}
                  />
                </Box>
                <Typography variant='h6'>{product.title}</Typography>
                <Typography variant='h6'>${product.price}</Typography>
              </Paper>
            </Grid>
          ))
        }
      </Grid>
      {/*{loading && <Box sx={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center' }}><LoadingScreen /></Box>}*/}
      {
        (!data || data.length) < 1 &&
        <Box sx={{height: '50vh', display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
          <Typography>No hay clientes pendientes...</Typography>
        </Box>
      }
      <Box sx={{display: 'flex', justifyContent: 'center', pt: 5}}>
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
