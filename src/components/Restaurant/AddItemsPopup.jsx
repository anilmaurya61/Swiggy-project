import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { Close as CloseIcon, Add as AddIcon } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { IconButton, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { addMenuItem } from '../../firebase/firebaseRestaurantServices'
import uniqid from 'uniqid';
import { useDispatch, useSelector } from 'react-redux';
import {
  setField,
  setCheckbox,
  setError,
  setLoading,
  clearForm,
} from '../../feature/restaurant/RestaurantHomeSlice';


const BlurredBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  z-index: 999;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CloseButton = styled(IconButton)`
  && {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const UploadButton = styled.label`
  margin-top: 16px auto;
  cursor: pointer;

  input {
    display: none;
  }
`;

const InputContainer = styled.div`
  display: inline-flex;
  gap: 1rem;
`;

const RadioContainer = styled.div`
  display: flex;
`;

const AddItemsPopup = ({ open, onClose }) => {

  const dispatch = useDispatch();
  const AddItems = useSelector((state) => state.AddItems);

  const handleIsVegetarian = () => {
    dispatch(setCheckbox({ name: 'isVegetarian', checked: !AddItems.isVegetarian }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setField({ name, value }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
  };

  const handleAddItem = async () => {
    const { itemName, price, description, isVegetarian } = AddItems;

    if (!itemName) {
      dispatch(setError({ name: 'itemName', error: 'Item name cannot be empty' }));
      return;
    }

    if (isNaN(price) || price === '') {
      dispatch(setError({ name: 'price', error: 'Price must be a valid number' }));
      return;
    }

    dispatch(setLoading(true));
    await addMenuItem({ "restaurantId": uniqid(), "itemId": uniqid(), "itemName": itemName, "price": price, "description": description, "isVegetarian": isVegetarian })
    dispatch(setLoading(false));

    onClose();
    dispatch(clearForm());
  };

  return (
    <>
      <BlurredBackground open={open} />
      <PopupContainer open={open}>
        <CloseButton variant="outlined" onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <InputContainer>
          <TextField
            id="item-name"
            name="itemName"
            label="Item Name"
            variant="standard"
            value={AddItems.itemName}
            onChange={handleInputChange}
            error={Boolean(AddItems.itemNameError)}
            helperText={AddItems.itemNameError}
            fullWidth
            margin="normal"
          />

          <TextField
            id="price"
            name="price"
            label="Price"
            variant="standard"
            value={AddItems.price}
            onChange={handleInputChange}
            error={Boolean(AddItems.priceError)}
            helperText={AddItems.priceError}
            fullWidth
            margin="normal"
          />
        </InputContainer>
        <TextField
          id="description"
          name="description"
          label="Description"
          variant="standard"
          value={AddItems.description}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={3}
          margin="normal"
        />
        <RadioContainer>
          <RadioGroup
            row
            value={!AddItems.isVegetarian ? 'vegetarian' : 'non-vegetarian'}
            onChange={() => handleIsVegetarian()}
          >
            <FormControlLabel
              value="vegetarian"
              control={<Radio color="success" />}
              label="Vegetarian"
            />
            <FormControlLabel
              value="non-vegetarian"
              control={
                <Radio
                  sx={{
                    color: '#e91212',
                    '&.Mui-checked': {
                      color: '#d30a2b',
                    },
                  }}
                />
              }
              label="Non-Vegetarian"
            />
          </RadioGroup>
        </RadioContainer>
        <UploadButton>
          <Button variant="outlined" component="span" startIcon={<CloudUploadIcon />}>
            Upload Image
          </Button>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </UploadButton>
        <LoadingButton
          loading={AddItems.isLoading}
          loadingPosition="start"
          startIcon={<AddIcon />}
          variant="outlined" sx={{ color: "#fff", backgroundColor: "#f68621" }} onClick={handleAddItem}>
          Add Item
        </LoadingButton>
      </PopupContainer>
    </>
  );
};

export default AddItemsPopup;
