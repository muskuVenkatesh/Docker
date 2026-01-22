import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/users",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchUsers = async () => {
  try {
    const response = await api.get('/getallusers')
    console.log("Fetched users:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error; 
  }
};

export const createUser = async(userData) => {
    try{
        const response = await api.post('/register',userData)
        return response;
    }catch(error0){
        console.error("Error creating user:", error0);
        throw error0;
    }
};
