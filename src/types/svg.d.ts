// src/types/svg.d.ts   （名字可自定义）
declare module "*.svg?react" {
  import * as React from "react";

  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
