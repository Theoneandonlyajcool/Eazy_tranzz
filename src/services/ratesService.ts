import api from "@/services/apiClient";
// import type { CreateRatePayload } from "@/types/rates";

export async function getRates(params = {}) {
  const res = await api.get("rates/latest", { params });
  return res.data;
}
