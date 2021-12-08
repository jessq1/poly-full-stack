import * as React from 'react';
import { Link } from 'react-router-dom'

import { Box, List, Divider, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';

import {theme} from '../styles/theme'

interface IProps {
    keyName: string,
    url: string,
    child: any,
  }

const IconListItem: React.FC<IProps> = ({ keyName, url, child }) => {

    return (
        <ListItem button key={keyName} component={Link} to={url} >
            <ListItemIcon color='primary.main'>
                {child}
                {/* <PeopleIcon fontSize='large' style={{ fill:`${theme.palette.primary.main}`}} /> */}
            </ListItemIcon>
            <ListItemText primary={keyName} sx={{ color:`${theme.palette.primary.dark}`}} />
        </ListItem>
    )
    }

export default IconListItem