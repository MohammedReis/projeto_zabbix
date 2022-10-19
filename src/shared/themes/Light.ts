import{createTheme} from '@mui/material'

export const LightTheme = createTheme({
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
            paper:'#f7f6f3',
            default: '#DBD4D3',
        }
    }
});
