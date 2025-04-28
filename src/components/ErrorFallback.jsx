import React from "react";
import { Box, Button, Typography } from "@mui/material";

export const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Box role="alert">
      <Typography variant="h5" color="error">
        Error!
      </Typography>
      <Typography variant="body1" color="error">
        {error.message}
      </Typography>
    </Box>
  );
};
