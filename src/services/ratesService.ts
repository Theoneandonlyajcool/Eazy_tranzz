import api from "@/services/apiClient";
// import type { CreateRatePayload } from "@/types/rates";

export async function getRates(params = {}) {
  const res = await api.get("rates/latest", { params });
  return res.data; // return only the data layer
}

// export async function createRate(payload: CreateRatePayload) {
//   const res = await api.post("/rates", payload);
//   return res.data;
// }
