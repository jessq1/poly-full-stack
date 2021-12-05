import * as React from 'react';
import { Link } from 'react-router-dom'

import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Box, List, Divider, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PeopleIcon from '@mui/icons-material/People';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import { drawerWidth, openedMixin, closedMixin, DrawerHeader } from '../styles/nav'

interface NavProps {
    user: any,
    open?: boolean,
    handleDrawerClose: () => void,
    children?: JSX.Element | JSX.Element[],
  }

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideNavBar(props: NavProps) {
  const theme = useTheme();
  const { user, open, handleDrawerClose, children } = props;


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer elevation={0} variant="permanent" open={open}>
        <DrawerHeader>
            {open? 
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            : <IconButton />}
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem button key='Users'component={Link} to='/users' >
                <ListItemIcon>
                    <PeopleIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText primary='Users' />
            </ListItem>
            <ListItem button key='Payments'component={Link} to='/payments' >
                <ListItemIcon>
                    <LocalAtmIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText primary='Payments' />
            </ListItem>
            
            <ListItem button key='Notifications' component={Link} to='/notifications'>
                <ListItemIcon>
                    <MarkEmailUnreadIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText primary='Notifications' />
            </ListItem>
          
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}