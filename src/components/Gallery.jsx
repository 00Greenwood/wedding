import React from "react";
import { ImageList } from "@mui/material";
import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { LoadingSpinner } from "./LoadingSpinner";
import { ImageCard } from "./ImageCard";

export const Gallery = ({ date }) => {
  const { loading, images, error } = useFetchPhotos(date);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    throw error;
  }

  return (
    <ImageList cols={12} gap={8}>
      {images.map((image) => (
        <ImageCard key={image.name} image={image} />
      ))}
    </ImageList>
  );
};
