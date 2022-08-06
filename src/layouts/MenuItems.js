import {Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import {useState} from 'react';
import PersonIcon from '@mui/icons-material/Person';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BuildIcon from '@mui/icons-material/Build';
import BadgeIcon from '@mui/icons-material/Badge';

const data = [
  {
    title: 'Productos',
    path: '/productos',
    value: 'productos',
    icon: <WidgetsIcon style={{ color: 'white' }} />,
    id: 2,
  },
  {
    title: 'Catalogo online',
    path: '/catalogo',
    icon: <ShoppingCartIcon style={{ color: 'white' }} />,
    value: 'catalogo',
    id: 5,
  },
  {
    title: 'Pedidos',
    path: '/pedidos',
    icon: <ReceiptLongIcon style={{ color: 'white' }} />,
    value: 'pedidos',
    id: 4,
  },
  {
    title: 'Transacciones',
    path: '/transacciones',
    value: 'transacciones',
    icon: <AttachMoneyIcon style={{ color: 'white' }} />,
    id: 3,
  },
  {
    title: 'Clientes',
    path: '/clientes',
    value: 'clientes',
    icon: <PersonIcon style={{ color: 'white' }} />,
    id: 1,
  },
  // {
  //   title: 'Usuarios',
  //   path: '/usuarios',
  //   value: 'usuarios',
  //   icon: <BadgeIcon style={{ color: 'white' }} />,
  //   id: 10,
  // },
  {
    title: 'Estadisticas',
    path: '/estadisticas',
    icon: <SignalCellularAltIcon style={{ color: 'white' }} />,
    value: 'estadisticas',
    id: 6,
  },
  {
    title: 'Configuracion',
    path: '/configuracion',
    icon: <BuildIcon style={{ color: 'white' }} />,
    value: 'configuracion',
    id: 7,
  },
];

export default function MenuItems() {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate()
  const goTo = (path) => {
    setSelected(path.replace('/', ''));
    navigate(path)
  }

  return (
    <List sx={{color: 'white'}}>
      {
        data.map((route, index) => (
          <ListItemButton
            onClick={() => goTo(route.path)}
            sx={{
              minHeight: 48,
              justifyContent: 'initial',
              backgroundColor: selected === route.value && 'rgba(255,255,255, 0.1)',
              "&:hover": {
                backgroundColor: 'rgba(255,255,255, 0.1)',
              },
              p: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3,
                justifyContent: 'center',
              }}
            >
              {route.icon}
            </ListItemIcon>
            <ListItemText primary={route.title}/>
          </ListItemButton>
        ))
      }
      <Divider/>
    </List>
  )
}
