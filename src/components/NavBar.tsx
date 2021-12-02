import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'


interface NavProps {
  title: string,
  user: any,
  handleLogout: () => void
}

export default function NavBar(props: NavProps) {
  const { title, user, handleLogout } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap 
          sx={{ flex: 1 }}
        >
            {title}
        </Typography>
        {user? <Button variant="outlined" size="small" component={Link} to='' onClick={handleLogout}>
          Log Out
        </Button> : <Button variant="outlined" size="small" component={Link} to='/signup'>
          Sign up
        </Button>}
        
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        
      </Toolbar>
    </React.Fragment>
  );
}