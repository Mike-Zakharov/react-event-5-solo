import React, { useState } from 'react';
import { Button } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';

const FavoritesBtn = () => {
  const [favorite, setFavorite] = useState(false);

  const iconsStyles = { 
    marginRight: '8px', 
    width: '18px', 
    height: '18px', 
    verticalAlign: 'middle',
    color: 'disabled',
  }
  const favoriteIconStyles = {...iconsStyles, color: theme.palette.warning.light}

  const handleAddFavorites = () => {
    setFavorite(!favorite);
  };

  const currentIcon = favorite ? 
    <StarIcon  sx={favoriteIconStyles} /> 
    : 
    <StarOutlineIcon sx={iconsStyles} />

  return (
    <Button
      onClick={() => handleAddFavorites()}
      variant="outlined"
      sx={{ padding: '4px 10px', color: 'black' }}
    >
      {currentIcon}
      В избранное
    </Button>
  );
};

export default FavoritesBtn;
