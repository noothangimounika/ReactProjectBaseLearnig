import axios from "axios";

export const createPaymentIntent = async () => {
  const { data } = await axios.post("/api/payment-intent");
  return data;
};
