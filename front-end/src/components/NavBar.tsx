import * as React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import { Toolbar, Box, Button, Typography, IconButton, useScrollTrigger, Slide } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { CgMenuGridO } from "react-icons/cg";

import { Link } from 'react-router-dom'

import { drawerWidth } from '../styles/nav'
import {theme} from '../styles/theme'

interface NavProps {
  title: string,
  user: any,
  handleLogout: () => void,
  open?: boolean,
  handleDrawerOpen: () => void
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function NavBar(props: NavProps) {
  const { title, user, handleLogout, open, handleDrawerOpen } = props;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <HideOnScroll {...props}>
      <AppBar elevation={0} position="fixed" color="transparent" open={open}>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <CgMenuGridO fontSize={30} style={{ color:'#E26372'}}/>
          </IconButton>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap 
          sx={{ flex: 1, letterSpacing: '5px', fontWeight:500 }}
        >
            {title}
        </Typography>
        {user? <Button variant="outlined" size="small" component={Link} to='' onClick={handleLogout}>
          Log Out
        </Button> : <Button variant="outlined" size="small" component={Link} to='/signup'>
          Sign up
        </Button>}
        
      </Toolbar>
      
      </AppBar>
      </HideOnScroll>
      </Box>
  );
}