import axios from "axios";

export const uploadImages = async (fileArray) => {
  const dataArray = [];
  const imageUrlArray = [];
  fileArray.map((file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "immosch");
    data.append("cloud_name", "dymcleoei");
    dataArray.push(data);
  });
  for (let i = 0; i < dataArray.length; i++) {
    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/dymcleoei/image/upload",
      dataArray[i]
    );

    imageUrlArray.push(response.data.url);
  }
  return imageUrlArray;
};
