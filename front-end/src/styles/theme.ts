import { createTheme } from '@mui/material/styles';

  
export const theme= createTheme({
  typography: {
    fontFamily: 'Quicksand',
  },
  shape: {
    borderRadius: 20,
  },
  palette: {
    primary:{
			main:'#6172d0',
      light:'#f0f2ff',
      dark:'#283FC0',
		},
		secondary: {
			main:'#E26372',
      light:'#ffe6e9',
      dark:'#F3A3AD',
		}
  },
});
