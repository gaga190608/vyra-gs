export const API_BASE = "http://127.0.0.1:8000";

async function request(path, options = {}) {
  const res = await fetch(API_BASE + path, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Erro ${res.status}: ${text}`);
  }

  return res.json();
}

export const api = {
  health() {
    return request("/health");
  },

  getCareers(params = {}) {
    const qs = new URLSearchParams(params).toString();
    return request(`/v1/careers?${qs}`);
  },

  updateTrends(body) {
    return request(`/v1/trends`, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  },

  getUsers() {
    return request("/v1/users");
  },

  createUser(body) {
    return request("/v1/users", {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  recommend(body) {
    return request("/v1/recommend", {
      method: "POST",
      body: JSON.stringify(body),
    });
  },

  persist() {
    return request("/v1/persist", { method: "POST" });
  },

  getRecommendationsReport(params = {}) {
    const qs = new URLSearchParams(params).toString();
    return request(`/v1/reports/recommendations?${qs}`);
  },
};