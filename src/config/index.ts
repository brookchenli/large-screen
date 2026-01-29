/**
 * 应用配置
 */
export const APP_CONFIG = {
  /**
   * 是否从网络获取数据
   * - true: 从 API 获取数据
   * - false: 使用本地 mock 数据
   */
  useFetchData: false,

  /**
   * 天气城市
   * - "wuhan": 武汉
   * - "beijing": 北京
   */
  weatherCity: "beijing" as "wuhan" | "beijing",
};

/** 城市 location 代码映射 */
export const CITY_LOCATION = {
  wuhan: "101200101",
  beijing: "101010100",
} as const;
