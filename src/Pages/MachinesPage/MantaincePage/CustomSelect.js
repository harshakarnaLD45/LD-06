import React, { useState } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function CustomSelect({
    label,
    name,
    value,
    onChange,
    options,
    required = false,
}) {
    const [open, setOpen] = useState(false);

    return (
        <FormControl fullWidth className='bodyRegularText4' required={required}>
            <InputLabel sx={{
                color: '#C2C2C4', ml: '-10px', '&.Mui-focused': {
                    color: '#C2C2C4', // stays white when focused
                },
            }}>{label}</InputLabel>
            <Select
                variant="standard"
                className='bodyRegularText4'
                name={name}
                value={value}
                onChange={onChange}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                IconComponent={() => (
                    <ArrowDropDownIcon
                        sx={{
                            color: '#C2C2C4',
                            transition: 'transform 0.3s',
                            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    />
                )}
                sx={{
                    color: '#C2C2C4',
                    py: 1,
                    my: 3,
                    '&:before': { borderBottom: '0.5px solid #C6C6C6' },
                    '&:after': { borderBottom: '0.5px solid #C6C6C6' },
                    '&:hover:not(.Mui-disabled):before': { borderBottom: '0.5px solid #C6C6C6' },
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            backgroundColor: '#1E1E1E', // optional dark background for dropdown
                            color: '#C2C2C4', // sets text color inside dropdown
                        },
                    },
                }}
            >
                {options.map((opt) => (
                    <MenuItem key={opt.value} value={opt.value} className='bodyRegularText4'>
                        {opt.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default CustomSelect;
