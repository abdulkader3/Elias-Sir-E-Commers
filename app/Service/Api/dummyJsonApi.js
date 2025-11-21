import axios from "axios";

const Api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const ApiDataForDummyJson = {
  // Fetch all products with limit
  getProducts: async (limit = 100) => {
    try {
      const response = await Api.get(`/products?limit=${limit}`, {
        headers: {
          "Cache-Control": "public, max-age=3600", // 1 hour cache
        },
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
          throw err;
        });

      return response.data;
    } catch (error) {
      console.error("Failed to fetch products:", error);
      throw error;
    }
  },

  // Fetch product by ID
  getProductById: async (productId) => {
    try {
      const response = await Api.get(`/products/${productId}`, {
        headers: {
          "Cache-Control": "public, max-age=3600", // 1 hour cache
        },
      })
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.error("Error fetching product details:", err);
          throw err;
        });

      return response.data;
    } catch (error) {
      console.error("Failed to fetch product details:", error);
      throw error;
    }
  },

  // Login endpoint (for future use)
  login: async (userLoginData) => {
    try {
      const response = await Api.post("/auth/login", userLoginData)
        .then((loginRes) => {
          return loginRes;
        })
        .catch((err) => {
          console.error("Error logging in:", err);
          throw err;
        });

      return response.data;
    } catch (error) {
      console.error("Failed to login:", error);
      throw error;
    }
  },
};
