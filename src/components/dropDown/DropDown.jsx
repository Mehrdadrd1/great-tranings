import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import _without from "lodash/without";
import React, { useEffect, useState } from "react";

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

export const DropDown = ({ data, defaultValue, multiple, sx }) => {
  const [originalData, setOriginalData] = useState([]);
  const [multiSelect, setMultiSelect] = useState([]);
  const [singleSelect, setSingleSelect] = useState("");

  useEffect(() => {
    if (defaultValue) {
      let newData = multiple
        ? defaultValue.map(
            (item) => data.find((select) => select.id === item.id).id
          )
        : defaultValue.id;
      multiple ? setMultiSelect(newData) : setSingleSelect(newData);
      setOriginalData(data);
    }
  }, [defaultValue]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    multiple ? setMultiSelect(value) : setSingleSelect(value);
  };

  const handleDelete = (e, value) => {
    e.preventDefault();
    multiple
      ? setMultiSelect((current) => _without(current, value))
      : setSingleSelect((current) => _without(current, value));
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="dropDown">DropDown</InputLabel>
        <Select
          multiple={multiple}
          sx={sx}
          variant="outlined"
          id="dropDown"
          label="DropDown"
          defaultValue={multiple ? multiSelect : singleSelect}
          value={multiple ? multiSelect : singleSelect}
          onChange={handleChange}
          MenuProps={MenuProps}
          input={<OutlinedInput id="dropDown" label="DropDown" />}
          renderValue={
            multiple
              ? (selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => {
                      return (
                        <Chip
                          key={value}
                          label={
                            originalData.find((select) => select.id === value)
                              .itemName
                          }
                          deleteIcon={
                            <CancelIcon
                              onMouseDown={(event) => event.stopPropagation()}
                            />
                          }
                          onDelete={(e) => handleDelete(e, value)}
                        />
                      );
                    })}
                  </Box>
                )
              : (selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    <Chip
                      key={selected}
                      label={
                        originalData.find((select) => select.id === selected)
                          .itemName
                      }
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                      onDelete={(e) => handleDelete(e, selected)}
                    />
                  </Box>
                )
          }
        >
          {data.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                {item.itemName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
