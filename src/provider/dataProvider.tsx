import {
    createContext,
    useEffect,
    useState,
    type ReactNode,
  } from "react";
  import { fetchSummary, fetchWeather } from "../api/endpoints";
  import type { SummaryData, WeatherData } from "../types/data";

  import weatherMock from "../mock/weather.json";
  // import summaryMock from "../mock/mock.json";
  
  interface DataContextValue {
    summary: SummaryData | null;
    weather: WeatherData | null;
    loading: boolean;
    error: string | null;
  }

  export const DataContext = createContext<DataContextValue | null>(null);
  
  export function DataProvider({ children }: { children: ReactNode }) {
    const [summary, setSummary] = useState<SummaryData | null>(null);
    const [weather, setWeather] = useState<WeatherData | null>(weatherMock);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      let cancelled = false;
      console.log("provider");
  
      async function load() {
        
        try {
          setLoading(true);
          
  
          // 👉 并行请求
          const [summaryRes, weatherRes] = await Promise.all([
            fetchSummary(),
            fetchWeather(),
          ]);
  
          if (cancelled) return;
  
          // 👉 在 Provider 中做“解析 / 整理”
          setSummary(summaryRes.data.data);
          console.log("summary", summary);
          setWeather({
            temperature: weatherRes.temperature,
            humidity: weatherRes.humidity,
            icon: weatherRes.icon,
          });
        } catch (e: any) {
          if (!cancelled) {
            setError(e.message ?? "Load data failed");
          }
        } finally {
          if (!cancelled) {
            setLoading(false);
          }
        }
      }
  
      load();
  
      return () => {
        cancelled = true;
      };
    }, []);
  
    return (
      <DataContext.Provider
        value={{
          summary: summary || null,
          weather,
          loading,
          error,
        }}
      >
        {children}
      </DataContext.Provider>
    );
  }
  