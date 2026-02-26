import api from "@/services/apiClient";
// import type { CreateRatePayload } from "@/types/rates";

export async function getBlogs(params = {}) {
  const res = await api.get("blog/view", { params });
  return res.data; // return only the data layer
}
