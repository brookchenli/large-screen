import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { fetchSummary, fetchWeather } from "../api/endpoints";
import type { SummaryData, WeatherData } from "../types/data";
import { APP_CONFIG } from "../config";

import summaryMock from "../mock/mock.json";

interface DataContextValue {
  summary: SummaryData | null;
  weather: WeatherData | null;
  loading: boolean;
  error: string | null;
}

export const DataContext = createContext<DataContextValue | null>(null);

export function DataProvider({ children }: { children: ReactNode }) {
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 获取天气
  useEffect(() => {
    let cancelled = false;

    async function loadWeather() {
      try {
        const weatherRes = await fetchWeather();
        if (cancelled) return;
        setWeather({
          temperature: weatherRes.now.temp,
          humidity: weatherRes.now.humidity,
          icon: weatherRes.now.icon,
        });
      } catch (e: unknown) {
        console.error("Failed to fetch weather:", e);
      }
    }

    // 立即获取一次
    loadWeather();

    // 每 30 分钟更新一次
    const interval = setInterval(loadWeather, 30 * 60 * 1000);

    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  // 获取 Summary 数据
  useEffect(() => {
    let cancelled = false;

    async function loadSummary() {
      try {
        setLoading(true);

        if (APP_CONFIG.useFetchData) {
          const summaryRes = await fetchSummary();
          if (cancelled) return;
          setSummary(summaryRes.data.data);
        } else {
          setSummary(summaryMock.data as SummaryData);
        }
      } catch (e: unknown) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Load data failed");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadSummary();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <DataContext.Provider
      value={{
        summary,
        weather,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
