import{createTheme} from '@mui/material'

export const DarkTheme = createTheme({
    palette:{
        primary:{
            main: '#757780',
            dark: '#2A263F',
            light: '#DBD4D3',
            contrastText: '#000',
        },
        secondary:{
            main: '#2A263F',
            dark: '#757780',
            light: '#000',
            contrastText: '#DBD4D3',
        },
        background:{
            paper:'#757780',
            default: '#0E1419',
        }
    }
});
