const axios = require("axios");
const fs = require("fs");
const CryptoJS = require("crypto-js");
require("dotenv").config(); // Load environment variables from .env file

// Retrieve values from .env file
const accessToken = process.env.ACCESS_TOKEN;
const folderId = process.env.FOLDER_ID;
const encryptionKey = process.env.ENCRYPTION_KEY;
const outputFilePath = "./src/assets/photos.encrypted.json";

async function createPhotoLinks(accessToken, folderId) {
  let url = `https://graph.microsoft.com/beta/me/drive/items/${folderId}/children`;
  let photos = [];

  try {
    while (url) {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const items = response.data.value;

      // Filter items to only include photos (image files)
      const photoItems = items.filter(
        (item) => item.file && item.file.mimeType.startsWith("image/"),
      );
      photos = photos.concat(photoItems);

      // Check if there is a nextLink for pagination
      url = response.data["@odata.nextLink"] || null;
    }

    console.log(`Found ${photos.length} photos in the folder.`);

    const links = [];

    // Generate sharing links for each photo including the photo size
    for (const photo of photos) {
      console.log(`Generating link for ${photo.name}...`);
      while (true) {
        try {
          const linkResponse = await axios.post(
            `https://graph.microsoft.com/beta/me/drive/items/${photo.id}/createLink`,
            {
              type: "embed",
            },
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
              },
            },
          );

          links.push({
            name: photo.name,
            image: photo.image,
            link: linkResponse.data.link.webUrl,
          });
          break; // Exit the loop if the link is generated successfully
        } catch (error) {
          console.error(`Error generating link for ${photo.name} ... retrying`);
        }
      }
    }

    // Encrypt the JSON data
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(links),
      encryptionKey,
    ).toString();

    // Write the links to a JSON file
    fs.writeFileSync(outputFilePath, encryptedData);
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
}

// Call the function
createPhotoLinks(accessToken, folderId);
