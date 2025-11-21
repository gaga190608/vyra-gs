import { useEffect, useState } from "react";
import { api } from "./api";

export function useCareers(params = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    api.getCareers(params)
      .then((d) => {
        if (!alive) return;
        setData(d || []);
      })
      .catch((e) => {
        if (!alive) return;
        setError(e);
      })
      .finally(() => {
        if (!alive) return;
        setLoading(false);
      });
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(params)]);

  return {
    data,
    loading,
    error,
    refresh: () => api.getCareers(params).then((d) => setData(d || [])),
  };
}

export function useUsers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    api.getUsers()
      .then((d) => {
        if (!alive) return;
        setData(d || []);
      })
      .catch((e) => {
        if (!alive) return;
        setError(e);
      })
      .finally(() => {
        if (!alive) return;
        setLoading(false);
      });
    return () => (alive = false);
  }, []);

  return { data, loading, error, refresh: () => api.getUsers().then((d) => setData(d || [])) };
}

export function useRecommend() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function run(payload) {
    setLoading(true);
    setError(null);
    try {
      const res = await api.recommend(payload);
      setResult(res);
      return res;
    } catch (e) {
      setError(e);
      throw e;
    } finally {
      setLoading(false);
    }
  }

  return { result, loading, error, run, clear: () => setResult(null) };
}