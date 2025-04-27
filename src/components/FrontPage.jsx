import React, { useState } from "react";
import { DatePicker } from "./DatePicker";
import { Gallery } from "./Gallery";

export const FrontPage = () => {
  const [date, setDate] = useState(null);

  if (date) {
    return <Gallery encryptionKey={date} />;
  }
  // If date is not set, show the date picker
  return <DatePicker setDate={setDate} />;
};
