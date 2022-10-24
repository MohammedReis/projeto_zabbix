import * as React from 'react';
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';


function QuickSearchToolbar() {
    const theme = useTheme()
    return (
        <Box
            sx={{
                p: 0.5,
                pb: 0,
                color: theme.palette.primary.contrastText,
                width:'100%',
                display:'flex',
                justifyContent:'flex-end',
                
            }}
        >
            <GridToolbarQuickFilter 
            sx={{
            width:'100%',
            border: theme.palette.primary.contrastText,
            padding:3,
            '& .MuiInputBase-root::after':{
                borderColor:theme.palette.primary.contrastText,
            },
            '& .MuiInputBase-root::before':{
                borderColor:theme.palette.secondary.dark,
            }

            
            }}/>
        </Box>
    );
}



export const CheckboxSelectionGrid = () => {
    const [checkboxSelection, setCheckboxSelection] = React.useState(true);
    const [nbRows, setNbRows] = React.useState(100);
    const theme = useTheme()
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
        maxColumns: 5,
    });

    return (
        <div style={{ width: '99%', padding: 24 }}>
            <div >
                <DataGrid
                    autoHeight
                    checkboxSelection={checkboxSelection} {...data}
                    rows={data.rows.slice(0, nbRows)}
                    sx={{
                        color: theme.palette.primary.contrastText,
                        ackgroundBlendMode: theme.palette.primary.contrastText,
                        marginTop: '5%', 
                        borderColor: theme.palette.primary.contrastText,
                        '& MuiFormControl-root, .MuiSvgIcon-root,.MuiTablePagination-root, .MuiButtonBase-root, .MuiInputBase-root, .MuiDataGrid-virtualScrollerRenderZone css-s1v7zr-MuiDataGrid-virtualScrollerRenderZone': {
                            color: theme.palette.secondary.main,
                        },
                        '& .MuiDataGrid-cell, .MuiDataGrid-footerContainer, .MuiDataGrid-columnHeaders':{
                            borderBottomColor:theme.palette.secondary.main,
                            borderTopColor:theme.palette.secondary.main
                        },
                        
                    }}
                    components={{ Toolbar: QuickSearchToolbar }}
                />
            </div>
        </div>
    );
}
