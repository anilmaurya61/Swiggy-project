import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { IconButton, RadioGroup, FormControlLabel, Radio } from '@mui/material';

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
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [imageName, setImageName] = useState('');
  const [itemNameError, setItemNameError] = useState('');
  const [priceError, setPriceError] = useState('');

  const handleIsVegetarian = () => {
    setIsVegetarian(!isVegetarian)
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'itemName') {
      setItemName(value);
      setItemNameError('');
    } else if (name === 'price') {
      setPrice(value);
      setPriceError('');
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'isVegetarian') {
      setIsVegetarian(event.target.checked);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageName(file ? file.name : '');
  };

  const handleAddItem = () => {
    if (!itemName) {
      setItemNameError('Item name cannot be empty');
      return;
    }

    if (isNaN(price) || price === '') {
      setPriceError('Price must be a valid number');
      return;
    }
    onClose();
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
            value={itemName}
            onChange={handleInputChange}
            error={Boolean(itemNameError)}
            helperText={itemNameError}
            fullWidth
            margin="normal"
          />

          <TextField
            id="price"
            name="price"
            label="Price"
            variant="standard"
            value={price}
            onChange={handleInputChange}
            error={Boolean(priceError)}
            helperText={priceError}
            fullWidth
            margin="normal"
          />
        </InputContainer>
        <TextField
          id="description"
          name="description"
          label="Description"
          variant="standard"
          value={description}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={3}
          margin="normal"
        />
        <RadioContainer>
          <RadioGroup
            row
            value={!isVegetarian ? 'vegetarian' : 'non-vegetarian'}
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
        <Button variant="contained" sx={{color:"#fff", backgroundColor:"#f68621"}} onClick={handleAddItem}>
          Add Item
        </Button>
      </PopupContainer>
    </>
  );
};

export default AddItemsPopup;
