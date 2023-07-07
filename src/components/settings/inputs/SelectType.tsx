import MenuItem from '@mui/material/MenuItem';
import { SelectChangeEvent } from '@mui/material/Select';
import React, { ChangeEvent, FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface SelectTypeProps {
  label: string;
  options: { value: string; label: string }[];
  onChange: (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const SelectType: FC<SelectTypeProps & TextFieldProps> = ({
  label,
  options,
  onChange,
  ...props
}) => {
  return (
    <TextField
      onChange={onChange}
      select
      label={label}
      sx={{ width: 300 }}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectType;
