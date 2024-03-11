import axios from "axios";

const API_ENDPOINT = import.meta.env.VITE_BACKEND_API_HOST;

export const getAllPropertyList = async (currentPage, limit, search) => {
  try {
    let path = `${API_ENDPOINT}/listings?page=${currentPage}&limit=${limit}`;
    if (search.sort) {
      path =
        path +
        `&sortBy=${search.sort.sortBy}&sortOrder=${search.sort.sortOrder}`;
    }

    if (search.keyword && search.keyword.length > 0) {
      path = path + `&destination=${search.keyword}`;
    }

    const responseAll = await axios.get(path);
    return responseAll.data;
  } catch (error) {
    console.log("Error fetching properties:", error);
  }
};
