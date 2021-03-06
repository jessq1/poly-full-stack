import * as React from 'react';

import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import { Box, List, Divider, IconButton } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PeopleIcon from '@mui/icons-material/People';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import { drawerWidth, openedMixin, closedMixin, hideMixin, DrawerHeader } from '../styles/nav'
import {theme} from '../styles/theme'
import IconListItem from './IconListItem'
import MyProfileBar from './MyProfileBar'


interface NavProps {
    user: any,
    verificationLink: any,
    userProfile: any,
    open?: boolean,
    handleDrawerClose: () => void,
    handleVerifyAccount: (userProfile: any) => Promise<void>
    children?: JSX.Element | JSX.Element[],
  }

const DrawerLeft = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
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

const DrawerRight = styled(MuiDrawer)(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(!open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(open && {
      ...hideMixin(theme),
      '& .MuiDrawer-paper': hideMixin(theme),
    }),
  }),
);

export default function SideNavBar(props: NavProps) {
  const { user, userProfile, verificationLink, open, handleDrawerClose, handleVerifyAccount, children } = props;


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <DrawerLeft 
        elevation={0} 
        variant="permanent" 
        open={open}
        >
        <DrawerHeader sx={{backgroundColor:'primary'}} >
            {open? 
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
            : <IconButton />}
        </DrawerHeader>
        <Divider />
        <List>
          <IconListItem keyName={'USERS'} url={'/users'} 
            child={<PeopleIcon fontSize='large' style={{ fill:`${theme.palette.primary.main}`}} />} />
          <IconListItem keyName={'PAYMENTS'} url={'/payments'} 
            child={<LocalAtmIcon fontSize='large' style={{ fill:`${theme.palette.primary.main}`}} />} />
          <IconListItem keyName={'NOTIFICATIONS'} url={'/notifications'} 
            child={<MarkEmailUnreadIcon fontSize='large' style={{ fill:`${theme.palette.primary.main}`}} />} />
        </List>
        <Divider />
          {(open && user) ?
              <MyProfileBar user={user} userProfile={userProfile} handleVerifyAccount={handleVerifyAccount} verificationLink={verificationLink} /> :
              <></>
        }
      </DrawerLeft>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
      {user? 
      <DrawerRight elevation={0} 
        anchor={'right'}
        open={open}
        variant="permanent" 
            sx={{ 
              flexGrow: 1, 
              p: 3,
              width: drawerWidth, 
            }}>
      <DrawerHeader />
        <MyProfileBar user={user} userProfile={userProfile} handleVerifyAccount={handleVerifyAccount} verificationLink={verificationLink} />
      </DrawerRight> : 
      <></>}
    </Box>
  );
}