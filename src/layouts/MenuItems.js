import {Collapse, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {useNavigate} from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import {useState} from 'react';
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import InventoryIcon from '@mui/icons-material/Inventory';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function MenuItems() {
  const navigate = useNavigate()
  const [usersCollapse, setUsersCollapse] = useState(false);
  const [productsCollapse, setProductsCollapse] = useState(false);

  const goTo = (path) => {
    return navigate(path)
  }

  return (
    <>
      <List sx={{ color: 'white' }}>
        <ListItemButton
          onClick={() => setUsersCollapse(!usersCollapse)}
          sx={{
            minHeight: 48,
            justifyContent: 'initial',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: 'center',
            }}
          >
            <PersonIcon style={{ color: 'white' }}/>
          </ListItemIcon>
          <ListItemText primary='Usuarios' />
          {usersCollapse ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={usersCollapse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              onClick={() => goTo('/usuarios')}
              sx={{
                minHeight: 48,
                justifyContent: 'initial',
                px: 2.5,
                pl: '2rem'
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: 'center',
                }}
              >
                <ArrowRightAltIcon style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary='Lista de Usuarios' />
            </ListItemButton>
              <ListItemButton
                onClick={() => goTo('/usuarios/registrar')}
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 2.5,
                  pl: '2rem'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',
                  }}
                >
                  <ArrowRightAltIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Registrar Usuarios' />
              </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => setProductsCollapse(!productsCollapse)}
          sx={{
            minHeight: 48,
            justifyContent: 'initial',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: 3,
              justifyContent: 'center',
            }}
          >
            <InventoryIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary='Productos' />
          {productsCollapse ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
        <Collapse in={productsCollapse} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
              <ListItemButton
                onClick={() => goTo('/productos')}
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 2.5,
                  pl: '2rem'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',
                  }}
                >
                  <ArrowRightAltIcon  style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Lista de Productos' />
              </ListItemButton>
              <ListItemButton
                onClick={() => goTo('/productos/registrar')}
                sx={{
                  minHeight: 48,
                  justifyContent: 'initial',
                  px: 2.5,
                  pl: '2rem'
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: 3,
                    justifyContent: 'center',
                  }}
                >
                  <ArrowRightAltIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary='Registrar Producto' />
              </ListItemButton>
          </List>
        </Collapse>
      </List>
      <Divider/>
    </>
  )
}
