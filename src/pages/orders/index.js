import {
  Box,
  LinearProgress,
  Grid, TextField, InputAdornment, IconButton, Paper, useMediaQuery
} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
import {mockTransactions} from '../../utils/mockData';
import {useState} from "react";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom'
import emptyBasket from '../../assets/img/empty-basket.png';


export default function Orders() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const navigate = useNavigate();
  const [data, setData] = useState(mockTransactions.data);
  const [length, setLength] = useState(mockTransactions.length);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('')


  return (
    <>
      <Paper elevation={4} sx={{width: '100%', p: 2}}>
        <Box p={2}>
          <Typography variant='h2'>Pedidos abiertos</Typography>
          <Grid container my={2}>
            <Grid item xs={12} md={4}>
              <TextField
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)
                }
                sx={{width: '100%'}}
                id="search-textfield"
                placeholder="Item, cliente o codigo"
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
          </Grid>
        </Box>
        <Box sx={{width: '100%'}}>
          {loading && <LinearProgress/>}
        </Box>
      </Paper>
      <Box sx={{ height: '50vh', display: 'grid', placeItems: 'center' }}>
        <Box>
          <Box
            component='img'
            src={emptyBasket}
          />
          <Typography variant='h5' color='primary'>Todavia no hay pedidos</Typography>
        </Box>
      </Box>
    </>
  )
}
