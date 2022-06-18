import {useState} from 'react';
import {alpha, styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Outlet} from 'react-router-dom';
import MenuItems from "./MenuItems";
import useAuth from "../hooks/useAuth";
import {MHidden} from "../components/@material-extend";

const drawerWidth = 240;

const Search = styled('div')(({theme}) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function Sidebar() {
  const {logout} = useAuth()
  const [anchorEl, setAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = useState(true);

  const handleDrawerChange = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    logout();
  }


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
      <MenuItem onClick={handleLogout}>Cerrar sesion</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar position="fixed" open={open} sx={{   backgroundColor: '#222e3c'}}>
        <Toolbar>
          <IconButton
            onClick={handleDrawerChange}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{mr: 2}}
          >
            <MenuIcon/>
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{'aria-label': 'search'}}
            />
          </Search>
          <Box sx={{flexGrow: 1}}/>
          <Box sx={{display: {xs: 'none', md: 'flex'}}}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon/>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle/>
            </IconButton>
          </Box>
          {renderMenu}
        </Toolbar>
      </AppBar>
      <MHidden width='mdDown'>
        <Drawer
          variant="persistent"
          open={open}
          sx={{
            width: open ? drawerWidth : 0,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              backgroundColor: '#222e3c',
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}>
          <DrawerHeader sx={{justifyContent: 'center'}}>
            {/*<IconButton onClick={handleDrawerClose}>*/}
            {/*  {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}*/}
            {/*</IconButton>*/}
            <Typography variant='h5' align='center' color='#fff'>Administracion</Typography>
          </DrawerHeader>
          <Divider/>
          <MenuItems open={open}/>
        </Drawer>
      </MHidden>
      <MHidden width='mdUp'>
        <Drawer
          variant="temporary"
          ModalProps={{keepMounted: true}}
          onClose={handleDrawerChange}
          open={open}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              backgroundColor: '#222e3c',
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}>
          <DrawerHeader sx={{justifyContent: 'center'}}>
            {/*<IconButton onClick={handleDrawerClose}>*/}
            {/*  {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}*/}
            {/*</IconButton>*/}
            <Typography variant='h5' align='center' color='#fff'>Administracion</Typography>
          </DrawerHeader>
          <Divider/>
          <MenuItems/>
        </Drawer>
      </MHidden>
      <Box component="main" sx={{p: 3, width: '100%', flexGrow: 1}}>
        <DrawerHeader/>
        <Outlet/>
      </Box>
    </Box>
  );
}
