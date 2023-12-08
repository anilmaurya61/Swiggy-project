import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { IconButton } from '@mui/material';

const BlurredBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px); /* Adjust the blur amount as needed */
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
  width: 300px; /* Adjust the width as needed */
`;

const CloseButton = styled(IconButton)`
  && {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

const UploadButton = styled.label`
  display: inline-block;
  margin-top: 16px;
  cursor: pointer;
  input {
    display: none;
  }
`;

const AddItemsPopup = ({ open, onClose }) => {
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [imageName, setImageName] = useState('');
  const [itemNameError, setItemNameError] = useState('');
  const [priceError, setPriceError] = useState('');

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
    // Check if itemName is empty
    if (!itemName) {
      setItemNameError('Item name cannot be empty');
      return;
    }

    // Check if price is a valid number
    if (isNaN(price) || price === '') {
      setPriceError('Price must be a valid number');
      return;
    }

    // Perform additional actions (e.g., adding the item to the list)
    // ...

    // Close the popup
    onClose();
  };

  return (
    <>
      <BlurredBackground open={open} />
      <PopupContainer open={open}>
        <CloseButton variant="outlined" onClick={onClose}>
          <CloseIcon/>
        </CloseButton>

        {/* TextField for item name with error handling */}
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

        {/* TextField for price with error handling */}
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

        {/* TextField for description */}
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

        {/* Checkbox for isVegetarian */}
        <TextField
          id="is-vegetarian"
          name="isVegetarian"
          label="Is Vegetarian"
          variant="standard"
          checked={isVegetarian}
          onChange={handleInputChange}
          type="checkbox"
        />

        <UploadButton>
          <Button variant="outlined" component="span" startIcon={<CloudUploadIcon />}>
            Upload Image
          </Button>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
        </UploadButton>

        <Button variant="contained" color="primary" onClick={handleAddItem}>
          Add Item
        </Button>
      </PopupContainer>
    </>
  );
};

export default AddItemsPopup;
