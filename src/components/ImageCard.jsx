import React from "react";
import { ImageListItem } from "@mui/material";

export const ImageCard = ({ image }) => {
  const base = 80;
  const isPortrait = image.width < image.height;
  const width = base * (isPortrait ? 2 : 3);
  const height = base * (isPortrait ? 3 : 2);

  return (
    <ImageListItem cols={isPortrait ? 2 : 3} rows={isPortrait ? 3 : 2}>
      <img
        src={`${image.link}?width=${width * 2}`}
        alt={image.name}
        loading="lazy"
        width={width}
        height={height}
      />
    </ImageListItem>
  );
};
