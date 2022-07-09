import {Container, Grid, Box, Paper, Typography, Select, MenuItem} from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, Sector, Pie, PieChart } from 'recharts';
import { useState} from 'react';

const data = [
  {
    name: 'En',
    ventas: 4000,
    compras: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    ventas: 3000,
    compras: 1398,
    amt: 2210,
  },
  {
    name: 'Mar',
    ventas: 2000,
    compras: 9800,
    amt: 2290,
  },
  {
    name: 'Abr',
    ventas: 2780,
    compras: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    ventas: 1890,
    compras: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    ventas: 2390,
    compras: 3800,
    amt: 2500,
  },
  {
    name: 'Jul',
    ventas: 3490,
    compras: 4300,
    amt: 2100,
  },
  {
    name: 'Ago',
    ventas: 4000,
    compras: 2400,
    amt: 2400,
  },
  {
    name: 'Sep',
    ventas: 3000,
    compras: 1398,
    amt: 2210,
  },
  {
    name: 'Oct',
    ventas: 2000,
    compras: 9800,
    amt: 2290,
  },
  {
    name: 'Nov',
    ventas: 2780,
    compras: 3908,
    amt: 2000,
  },
  {
    name: 'Dic',
    ventas: 1890,
    compras: 4800,
    amt: 2181,
  },
];

const pieData = [
  { name: 'Producto 1', value: 400, percentage: 25, color: '#0088FE' },
  { name: 'Producto 2', value: 300, percentage: 44, color: '#00C49F' },
  { name: 'Producto 3', value: 300, percentage: 11, color: '#FFBB28' },
  { name: 'Producto 4', value: 200, percentage: 32, color: '#FF8042' },
  { name: 'Producto 5', value: 50, percentage: 23, color: '#7d9a0b' },
  { name: 'Producto 6', value: 250, percentage: 25, color: '#5d2dd3' },
  { name: 'Producto 7', value: 340, percentage: 52, color: '#9677bb' },
  { name: 'Producto 8', value: 230, percentage: 63, color: '#ba3c07' },
];

const CustomTooltip = ({ payload }) => {

  return (
    <Paper elevation={2} sx={{ width: 120, height: 100, p: 2 }}>
      <div className="ant-popover-arrow" />
      <div >
        <b>{payload?.[0]?.payload?.name}</b>
        <span >
              <p>$ {payload?.[0]?.payload?.value}</p>
            <p>{payload?.[0]?.payload?.percentage} %</p>
          </span>
      </div>
    </Paper>
  );
};

export default function SalesDashboard() {
  const [month, setMonth] = useState('Enero');
  const [year, setYear] = useState('2022');

  const handleChangeMonth = (event) => {
    setMonth(event.target.value);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  return (
    <Container sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={{ borderRadius: '15px', p: 2 }}>
            <Box display='flex' alignItems='center'>
              <AttachMoneyIcon/>
              <Typography variant='h6'>Valor 1</Typography>
            </Box>
            <Typography variant='h4'>$24.000</Typography>
            <Typography variant='caption' style={{ color: 'gray' }}>Descripcion o texto de ejemplo</Typography>
          </Paper>
        </Grid>
         <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={{ borderRadius: '15px', p: 2 }}>
            <Box display='flex' alignItems='center'>
              <AttachMoneyIcon/>
              <Typography variant='h6'>Valor 2</Typography>
            </Box>
            <Typography variant='h4'>$24.000</Typography>
            <Typography variant='caption' style={{ color: 'gray' }}>Descripcion o texto de ejemplo</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={{ borderRadius: '15px', p: 2 }}>
            <Box display='flex' alignItems='center'>
              <AttachMoneyIcon/>
              <Typography variant='h6'>Valor 3</Typography>
            </Box>
            <Typography variant='h4'>$24.000</Typography>
            <Typography variant='caption' style={{ color: 'gray' }}>Descripcion o texto de ejemplo</Typography>
          </Paper>
        </Grid>
         <Grid item xs={12} md={3}>
          <Paper elevation={2} sx={{ borderRadius: '15px', p: 2 }}>
            <Box display='flex' alignItems='center'>
              <AttachMoneyIcon/>
              <Typography variant='h6'>Valor 4</Typography>
            </Box>
            <Typography variant='h4'>$24.000</Typography>
            <Typography variant='caption' style={{ color: 'gray' }}>Descripcion o texto de ejemplo</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant='h4'>Resumen anual</Typography>
      </Box>
      <Box sx={{ width: '100%', height: '500px', my: 5 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="compras" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="ventas" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Box>
      <Box sx={{ m: 3 }}>
        <Typography variant='h4'>Detalle por mes</Typography>
      </Box>
      <Grid container spacing={2} sx={{ my: 5 }} >
        <Grid item xs={12} md={3} sx={{ width: '250px', height: '300px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={800} height={400}>
              <Pie
                data={pieData}
                cx={120}
                cy={200}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </Grid>
        <Grid item xs={12} md={9}>
          <Box display='flex' alignItems='center'>
            <Select
              sx={{ mx: 2 }}
              value={month}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Mes"
              onChange={handleChangeMonth}
            >
              <MenuItem value={'Enero'}>Enero</MenuItem>
              <MenuItem value={'Febrero'}>Febrero</MenuItem>
              <MenuItem value={'Marzo'}>Marzo</MenuItem>
              <MenuItem value={'Abril'}>Abril</MenuItem>
              <MenuItem value={'Mayo'}>Mayo</MenuItem>
              <MenuItem value={'Junio'}>Junio</MenuItem>
              <MenuItem value={'Julio'}>Julio</MenuItem>
              <MenuItem value={'Agosto'}>Agosto</MenuItem>
              <MenuItem value={'Septiembre'}>Septiembre</MenuItem>
              <MenuItem value={'Octubre'}>Octubre</MenuItem>
              <MenuItem value={'Noviembre'}>Noviembre</MenuItem>
              <MenuItem value={'Diciembre'}>Diciembre</MenuItem>
            </Select>
            <Select
              sx={{ mx: 2 }}
              value={year}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Ano"
              onChange={handleChangeYear}
            >
              <MenuItem value={'2022'}>2022</MenuItem>
              <MenuItem value={'2021'}>2021</MenuItem>
              <MenuItem value={'2020'}>2020</MenuItem>
            </Select>
          </Box>
          <Box m={2}>
            {
              pieData.map((entry, index) => (
                <Box p={1} sx={{ backgroundColor: index % 2 === 0 ? 'lightgray' : '#fff' }} key={index + 1}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={3}>
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          backgroundColor: entry.color
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography>{entry.name}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography>$ {entry.value}</Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography>{entry.percentage}%</Typography>
                    </Grid>

                  </Grid>
                </Box>
              ))
            }
          </Box>
        </Grid>

      </Grid>
    </Container>
  )
}
