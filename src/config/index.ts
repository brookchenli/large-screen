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

  /**
   * 是否显示背景图片
   * - true: 显示背景图片
   * - false: 隐藏背景图片
   */
  showBackgroundImage: false,

  /**
   * 背景图片尺寸
   * - 例如: "100% 100%", "70% 70%", "cover", "contain"
   */
  backgroundImageSize: "70% 70%",

  /**
   * Header 标题文字
   */
  headerTitle: "数采场统计中心" as "湖北他山数采统计中心" | "数采场统计中心",

  /**
   * 是否显示 Header 标题图标
   */
  showHeaderIcon: false,
};

/** 城市 location 代码映射 */
export const CITY_LOCATION = {
  wuhan: "101200101",
  beijing: "101010100",
} as const;
