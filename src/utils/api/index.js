import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.MONGO_URI}/api/products`,
      config
    );
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
};
