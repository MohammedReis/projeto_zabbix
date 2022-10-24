import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const severidade = [
    'Disastres',
    'High',
    'Average'
];

function getStyles(severidade: string, personName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            personName.indexOf(severidade) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const Filter = () => {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ marginTop:'20%',marginLeft:'5%', width: '90%', background:theme.palette.secondary.dark  }}>
                <InputLabel id="demo-multiple-chip-label"sx={{background:theme.palette.secondary.dark, }}/>
                <Select
                    sx={{
                        background:theme.palette.secondary.dark,
                        }}
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5,}}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} sx={{
                                    background:theme.palette.primary.main,
                                    color:theme.palette.secondary.main
                                }} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {severidade.map((severidade) => (
                        <MenuItem
                            key={severidade}
                            value={severidade}
                            style={getStyles(severidade, personName, theme)}
                        >
                            {severidade}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
