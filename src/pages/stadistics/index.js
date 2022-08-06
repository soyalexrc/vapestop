import {
  Container,
  Grid,
  Box,
  Paper,
  Typography,
  Select,
  MenuItem,
  TableContainer,
  Table, useMediaQuery,
  TableHead, TableRow, TableCell, TableBody, IconButton, TextField, Button
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Sector,
  Pie,
  PieChart
} from 'recharts';
import {useState} from 'react';
import {formatPrice} from "../../utils/format";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import {MobileDatePicker} from '@mui/x-date-pickers/MobileDatePicker';
import Divider from "@mui/material/Divider";
import {stadisticsData} from '../../utils/mockData';

const dataLine = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];


const pieData = [
  {name: 'Producto 1', value: 400, percentage: 25, color: '#0088FE'},
  {name: 'Producto 2', value: 300, percentage: 44, color: '#00C49F'},
  {name: 'Producto 3', value: 300, percentage: 11, color: '#FFBB28'},
  {name: 'Producto 4', value: 200, percentage: 32, color: '#FF8042'},
  {name: 'Producto 5', value: 50, percentage: 23, color: '#7d9a0b'},
  {name: 'Producto 6', value: 250, percentage: 25, color: '#5d2dd3'},
  {name: 'Producto 7', value: 340, percentage: 52, color: '#9677bb'},
  {name: 'Producto 8', value: 230, percentage: 63, color: '#ba3c07'},
];

const CustomTooltip = ({payload}) => {

  return (
    <Paper elevation={2} sx={{width: 120, height: 100, p: 2}}>
      <div className="ant-popover-arrow"/>
      <div>
        <b>{payload?.[0]?.payload?.name}</b>
        <span>
              <p>$ {payload?.[0]?.payload?.value}</p>
            <p>{payload?.[0]?.payload?.percentage} %</p>
          </span>
      </div>
    </Paper>
  );
};

export default function Stadistics() {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [date, setDate] = useState(null);
  const [month, setMonth] = useState('Enero');
  const [year, setYear] = useState('2022');
  const [detailData, setDetailData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentChart, setCurrentChart] = useState(stadisticsData[0]);

  const shortText = (txt) => {
    if (txt.length > 12) {
      return txt.substring(0, 13).concat('...');
    } else {
      return txt
    }
  }

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  return (
    <Container sx={{width: '100%'}}>
      <Box sx={{mt: 4}}>
        <Typography variant='h2' color='primary'>Estadisticas</Typography>
      </Box>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{p: 2}}>
            <Typography variant='h6' color='primary'>Estadisticas</Typography>
            <Box display='flex' alignItems='center' mt={2}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                {
                  largeScreen &&
                  <>
                    <DesktopDatePicker
                      label="Desde"
                      inputFormat="MM/dd/yyyy"
                      value={date}
                      onChange={(e) => setDate(e)}
                      renderInput={(params) => <TextField sx={{mx: 1}} {...params} />}
                    />

                    <DesktopDatePicker
                      label="Hasta"
                      inputFormat="MM/dd/yyyy"
                      value={date}
                      onChange={(e) => setDate(e)}
                      renderInput={(params) => <TextField sx={{mx: 1}} {...params} />}
                    />
                  </>
                }

                {
                  !largeScreen &&
                  <>
                    <MobileDatePicker
                      label="Desde"
                      inputFormat="MM/dd/yyyy"
                      value={date}
                      onChange={(e) => setDate(e)}
                      renderInput={(params) => <TextField sx={{mx: 1}} {...params} />}
                    />

                    <MobileDatePicker
                      label="Hasta"
                      inputFormat="MM/dd/yyyy"
                      value={date}
                      onChange={(e) => setDate(e)}
                      renderInput={(params) => <TextField sx={{mx: 1}} {...params} />}
                    />
                  </>
                }

              </LocalizationProvider>
            </Box>
            <Button disabled size='small' sx={{mt: 2}} variant='contained' color='secondary' fullWidth>Filtrar</Button>
          </Paper>
          <Paper elevation={3} sx={{mt: 2, overflowY: 'auto', overflowX: 'hidden',  height: '73vh'}}>
            {
              stadisticsData.map(dataType => (
                <Box key={dataType.id} sx={{cursor: 'pointer'}} onClick={() => setCurrentChart(dataType)}>
                  <Box display='flex' justifyContent='space-between' p={2} sx={{ backgroundColor:  currentChart === dataType && '#e3f6f1', borderLeft:  currentChart === dataType &&'3px solid #2dd1ac'}}>
                    <Box>
                      <Typography>{dataType.title}</Typography>
                      <Typography variant='h3' color='secondary'>{shortText(dataType.preview)}</Typography>
                      <Typography variant='caption'>Mejor hora 10h</Typography>
                    </Box>
                    {/*line graph*/}
                    {
                      dataType.type === 'line' &&
                      <Box width='100px' height='100px'>
                        <ResponsiveContainer width='100%' height='100%'>
                          <LineChart width={50} height={100} data={dataType.resumeLine}>
                            <Line
                              type="monotone"
                              dot={false}
                              dataKey="pv"
                              stroke="#8884d8"
                              strokeWidth={2}
                            />
                          </LineChart>
                        </ResponsiveContainer>
                      </Box>
                    }
                    {/*  chart graph*/}
                    {
                      dataType.type === 'chart' &&
                      <Box width='100px' height='100px'>
                        <PieChart width={130} height={130}>
                          <Pie
                            data={dataType.resumeLine}
                            cx='50%'
                            cy='50%'
                            innerRadius={25}
                            outerRadius={35}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color}/>
                            ))}
                          </Pie>
                        </PieChart>
                      </Box>
                    }
                  </Box>
                  <Divider/>
                </Box>
              ))
            }
            {/*<Box display='flex' justifyContent='space-between' p={2}>*/}
            {/*  <Box>*/}
            {/*    <Typography>Facturacion</Typography>*/}
            {/*    <Typography variant='h3' color='secondary'>$63.00</Typography>*/}
            {/*    <Typography variant='caption'>Mejor hora 10h</Typography>*/}
            {/*  </Box>*/}
            {/*  <Box width='100px' height='100px'>*/}
            {/*    <ResponsiveContainer width='100%' height='100%'>*/}
            {/*      <LineChart width={50} height={100} data={dataLine}>*/}
            {/*        <Line*/}
            {/*          type="monotone"*/}
            {/*          dot={false}*/}
            {/*          dataKey="pv"*/}
            {/*          stroke="#8884d8"*/}
            {/*          strokeWidth={2}*/}
            {/*        />*/}
            {/*      </LineChart>*/}
            {/*    </ResponsiveContainer>*/}
            {/*  </Box>*/}
            {/*</Box>*/}
            {/*  <Divider />*/}
            {/*<Box display='flex' justifyContent='space-between' p={2} sx={{ backgroundColor: '#e3f6f1', borderLeft: '3px solid #2dd1ac'}}>*/}
            {/*  <Box>*/}
            {/*    <Typography>Facturacion</Typography>*/}
            {/*    <Typography variant='h3' color='secondary'>$63.00</Typography>*/}
            {/*    <Typography variant='caption'>Mejor hora 10h</Typography>*/}
            {/*  </Box>*/}
            {/*  <Box width='100px' height='100px'>*/}
            {/*    <ResponsiveContainer width='100%' height='100%'>*/}
            {/*      <LineChart width={50} height={100} data={dataLine}>*/}
            {/*        <Line*/}
            {/*          type="monotone"*/}
            {/*          dot={false}*/}
            {/*          dataKey="pv"*/}
            {/*          stroke="#8884d8"*/}
            {/*          strokeWidth={2}*/}
            {/*        />*/}
            {/*      </LineChart>*/}
            {/*    </ResponsiveContainer>*/}
            {/*  </Box>*/}
            {/*</Box>*/}
            {/*<Divider />*/}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{p: 2}}>
            <Box mb={2}>
              <Typography variant='h6' color='primary'>{currentChart.title}</Typography>
            </Box>
            <Box sx={{width: '100%', height: '300px', my: 5}}>
              {
                currentChart.type === 'chart' &&
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={800} height={400}>
                    <Pie
                      data={currentChart.data}
                      cx='48%'
                      cy='48%'
                      innerRadius={90}
                      outerRadius={120}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color}/>
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip/>}/>
                  </PieChart>
                </ResponsiveContainer>
              }
              {
                currentChart.type === 'line' &&
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={currentChart.data}
                    margin={{
                      top: 5,
                      right: 20,
                      left: 0,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    {/*<Line type="monotone" dataKey="compras" stroke="#8884d8" activeDot={{r: 8}}/>*/}
                    <Line type="monotone" dataKey="ventas" stroke="#82ca9d"/>
                  </LineChart>
                </ResponsiveContainer>
              }
            </Box>

            <TableContainer>
              <Table>
                <TableHead sx={{backgroundColor: '#eff1f3'}}>
                  <TableRow>
                    <TableCell sx={{color: 'primary', fontWeight: 'bold'}}>Tipo</TableCell>
                    <TableCell sx={{color: 'primary', fontWeight: 'bold'}}>Ctd.</TableCell>
                    <TableCell sx={{color: 'primary', fontWeight: 'bold'}}>Valor</TableCell>
                    <TableCell sx={{color: 'primary', fontWeight: 'bold'}}>%</TableCell>
                    <TableCell sx={{color: 'primary', fontWeight: 'bold'}}></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {!loading && detailData && detailData.length > 0 && detailData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        '&:last-child td, &:last-child th': {border: 0},
                        transition: "background .2s",
                        '&:hover': {
                          backgroundColor: 'rgba(0,0,0, 0.05)'
                        }
                      }}
                    >
                      <TableCell>{row.type}</TableCell>
                      <TableCell>{row.quantity}</TableCell>
                      <TableCell>{formatPrice(row.value)}</TableCell>
                      <TableCell>{row.percentage}</TableCell>
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
              (!loading && detailData.length) < 1 &&
              <Box
                sx={{height: '50vh', display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center'}}>
                <Typography>No hay mas detalle...</Typography>
              </Box>
            }
          </Paper>
        </Grid>
      </Grid>


      {/*<Box sx={{ m: 3 }}>*/}
      {/*  <Typography variant='h4'>Detalle por mes</Typography>*/}
      {/*</Box>*/}
      {/*<Grid container spacing={2} sx={{ my: 5 }} >*/}
      {/*  <Grid item xs={12} md={3} sx={{ width: '250px', height: '300px' }}>*/}
      {/*    <ResponsiveContainer width="100%" height="100%">*/}
      {/*      <PieChart width={800} height={400}>*/}
      {/*        <Pie*/}
      {/*          data={pieData}*/}
      {/*          cx={120}*/}
      {/*          cy={200}*/}
      {/*          innerRadius={60}*/}
      {/*          outerRadius={80}*/}
      {/*          fill="#8884d8"*/}
      {/*          paddingAngle={5}*/}
      {/*          dataKey="value"*/}
      {/*        >*/}
      {/*          {pieData.map((entry, index) => (*/}
      {/*            <Cell key={`cell-${index}`} fill={entry.color} />*/}
      {/*          ))}*/}
      {/*        </Pie>*/}
      {/*        <Tooltip content={<CustomTooltip />} />*/}
      {/*      </PieChart>*/}
      {/*    </ResponsiveContainer>*/}
      {/*  </Grid>*/}
      {/*  <Grid item xs={12} md={9}>*/}
      {/*    <Box display='flex' alignItems='center'>*/}
      {/*      <Select*/}
      {/*        sx={{ mx: 2 }}*/}
      {/*        value={month}*/}
      {/*        labelId="demo-simple-select-label"*/}
      {/*        id="demo-simple-select"*/}
      {/*        label="Mes"*/}
      {/*        onChange={handleChangeMonth}*/}
      {/*      >*/}
      {/*        <MenuItem value={'Enero'}>Enero</MenuItem>*/}
      {/*        <MenuItem value={'Febrero'}>Febrero</MenuItem>*/}
      {/*        <MenuItem value={'Marzo'}>Marzo</MenuItem>*/}
      {/*        <MenuItem value={'Abril'}>Abril</MenuItem>*/}
      {/*        <MenuItem value={'Mayo'}>Mayo</MenuItem>*/}
      {/*        <MenuItem value={'Junio'}>Junio</MenuItem>*/}
      {/*        <MenuItem value={'Julio'}>Julio</MenuItem>*/}
      {/*        <MenuItem value={'Agosto'}>Agosto</MenuItem>*/}
      {/*        <MenuItem value={'Septiembre'}>Septiembre</MenuItem>*/}
      {/*        <MenuItem value={'Octubre'}>Octubre</MenuItem>*/}
      {/*        <MenuItem value={'Noviembre'}>Noviembre</MenuItem>*/}
      {/*        <MenuItem value={'Diciembre'}>Diciembre</MenuItem>*/}
      {/*      </Select>*/}
      {/*      <Select*/}
      {/*        sx={{ mx: 2 }}*/}
      {/*        value={year}*/}
      {/*        labelId="demo-simple-select-label"*/}
      {/*        id="demo-simple-select"*/}
      {/*        label="Ano"*/}
      {/*        onChange={handleChangeYear}*/}
      {/*      >*/}
      {/*        <MenuItem value={'2022'}>2022</MenuItem>*/}
      {/*        <MenuItem value={'2021'}>2021</MenuItem>*/}
      {/*        <MenuItem value={'2020'}>2020</MenuItem>*/}
      {/*      </Select>*/}
      {/*    </Box>*/}
      {/*    <Box m={2}>*/}
      {/*      {*/}
      {/*        pieData.map((entry, index) => (*/}
      {/*          <Box p={1} sx={{ backgroundColor: index % 2 === 0 ? 'lightgray' : '#fff' }} key={index + 1}>*/}
      {/*            <Grid container spacing={3}>*/}
      {/*              <Grid item xs={12} md={3}>*/}
      {/*                <Box*/}
      {/*                  sx={{*/}
      {/*                    width: 20,*/}
      {/*                    height: 20,*/}
      {/*                    backgroundColor: entry.color*/}
      {/*                  }}*/}
      {/*                />*/}
      {/*              </Grid>*/}
      {/*              <Grid item xs={12} md={3}>*/}
      {/*                <Typography>{entry.name}</Typography>*/}
      {/*              </Grid>*/}
      {/*              <Grid item xs={12} md={3}>*/}
      {/*                <Typography>$ {entry.value}</Typography>*/}
      {/*              </Grid>*/}
      {/*              <Grid item xs={12} md={3}>*/}
      {/*                <Typography>{entry.percentage}%</Typography>*/}
      {/*              </Grid>*/}

      {/*            </Grid>*/}
      {/*          </Box>*/}
      {/*        ))*/}
      {/*      }*/}
      {/*    </Box>*/}
      {/*  </Grid>*/}

      {/*</Grid>*/}
    </Container>
  )
}
