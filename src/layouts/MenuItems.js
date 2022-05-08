import {Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText, Tooltip} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import {useState} from 'react';
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import ViewListIcon from '@mui/icons-material/ViewList'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import InventoryIcon from '@mui/icons-material/Inventory';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function MenuItems({open}) {
  const navigate = useNavigate()
  const [usersCollapse, setUsersCollapse] = useState(false);
  const [productsCollapse, setProductsCollapse] = useState(false);

  const goTo = (path) => {
    return navigate(path)
  }

  return (
    <>
      <List>
        <ListItemButton
          onClick={() => setUsersCollapse(!usersCollapse)}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <PersonIcon/>
          </ListItemIcon>
          <ListItemText primary='Usuarios' sx={{opacity: open ? 1 : 0}}/>
          {usersCollapse ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={usersCollapse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Tooltip title={!open ? 'Lista de  Usuarios': ''} placement='right'>
              <ListItemButton
                onClick={() => goTo('/usuarios')}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  pl: '2rem'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ViewListIcon/>
                </ListItemIcon>
                <ListItemText primary='Lista de Usuarios' sx={{opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </Tooltip>
            <Tooltip title={!open ? 'Registrar Usuario': ''} placement='right'>
              <ListItemButton
                onClick={() => goTo('/usuarios/registrar')}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  pl: '2rem'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <PersonAddIcon/>
                </ListItemIcon>
                <ListItemText primary='Registrar Usuarios' sx={{opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </Tooltip>
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => setProductsCollapse(!productsCollapse)}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <InventoryIcon/>
          </ListItemIcon>
          <ListItemText primary='Productos' sx={{opacity: open ? 1 : 0}}/>
          {productsCollapse ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={productsCollapse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Tooltip title={!open ? 'Lista de  Productos': ''} placement='right'>
              <ListItemButton
                onClick={() => goTo('/productos')}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  pl: '2rem'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <ViewListIcon/>
                </ListItemIcon>
                <ListItemText primary='Lista de Productos' sx={{opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </Tooltip>
            <Tooltip title={!open ? 'Registrar Productos': ''} placement='right'>
              <ListItemButton
                onClick={() => goTo('/productos/registrar')}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  pl: '2rem'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AddCircleIcon/>
                </ListItemIcon>
                <ListItemText primary='Registrar Producto' sx={{opacity: open ? 1 : 0}}/>
              </ListItemButton>
            </Tooltip>
          </List>
        </Collapse>
      </List>
      <Divider/>
      <List>

      </List>
    </>
  )
}
