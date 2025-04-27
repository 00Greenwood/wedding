import { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export const useFetchPhotos = (encryptionKey) => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log("Fetching images...");
        const response = await fetch("/src/assets/photos.encrypted.json");
        const text = await response.text();
        const decryptedData = CryptoJS.AES.decrypt(
          text,
          encryptionKey,
        ).toString(CryptoJS.enc.Utf8);
        setImages(JSON.parse(decryptedData));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [encryptionKey]);

  return { loading, images, error };
};
