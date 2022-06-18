import {
  Box,
  LinearProgress,
  TableContainer,
  Table,
  Grid,
  TableRow,
  TableCell,
  Button,
  TableHead,
  TableBody,
  Pagination, Paper, TextField, Autocomplete, InputAdornment
} from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import EditIcon from '@mui/icons-material/Edit';
import {mockUserTable} from '../../utils/mockData';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";


export default function UsersList() {
  const [data, setData] = useState(mockUserTable.data);
  const [length, setLength] = useState(mockUserTable.length);
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

  const changeUserFilterData = (index, value ) => {
    setUserFilters(prevState => ({...prevState, [index]: value}))
  }

  return (
    <Paper elevation={2} sx={{width: '100%', p: 2}}>
      <Box p={2}>
        <Typography variant='h5' sx={{ mb: 2 }}>Lista de usuarios</Typography>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              value={userFilters.searchTerm}
              onChange={(e) =>
                changeUserFilterData("searchTerm", e.target.value)
              }
              sx={{ flex: 0.8 }}
              fullWidth
              id="search-textfield"
              size="small"
              placeholder="Buscar"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonSearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button sx={{ mt: 2 }} variant='contained'>Buscar</Button>
          </Grid>
          <Grid item xs={3}>
            <Autocomplete
              value={userFilters.userType}
              onChange={(e) => changeUserFilterData("userType", e.target.value)}
              sx={{ flex: 0.8 }}
              id="pais-autocomplete"
              options={["Admin", "..."]}
              renderInput={(params) => (
                <TextField {...params} size="small" placeholder="Tipo de usuario" />
              )}
            />
          </Grid>
          <Grid item xs={3}>
            <Autocomplete
              value={userFilters.sucursal}
              onChange={(e) => changeUserFilterData("sucursal", e.target.value)}
              sx={{ flex: 0.8 }}
              id="pais-autocomplete"
              options={["Prebo 2", "..."]}
              renderInput={(params) => (
                <TextField {...params} size="small" placeholder="Sucursal" />
              )}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ width: '100%' }}>
        {loading && <LinearProgress />}
      </Box>
      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: '#222e3c' }}>
            <TableRow>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Nombre</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Cedula</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Telefono</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Tipo de usuario</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Fecha de nacimiento</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Ultima compra</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Sucursal</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 'bold' }}>Redes sociales</TableCell>
              <TableCell align='center' sx={{ color: '#fff', fontWeight: 'bold' }} >Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading && data && data.length > 0 && data.map((row) => (
              <TableRow
                key={row.id}
                sx={{'&:last-child td, &:last-child th': {border: 0}}}
              >
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.document}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.userType}</TableCell>
                <TableCell>{row.birthdate}</TableCell>
                <TableCell>{row.lastPurchase}</TableCell>
                <TableCell>{row.sucursal}</TableCell>
                <TableCell>{row.socialMedia}</TableCell>
                <TableCell>
                  <IconButton>
                    <EditIcon  />
                  </IconButton>
                  <IconButton>
                    <DeleteForeverIcon style={{ color: 'red' }} />
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
        <Box sx={{ height: '50vh', display: 'flex', justifyContent: 'center', width: '100%' , alignItems: 'center' }}>
          <Typography>No hay clientes pendientes...</Typography>
        </Box>
      }
      <Box sx={{ display: 'flex', justifyContent: 'end', pt: 5 }}>
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
