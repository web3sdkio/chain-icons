import * as React from "react";
import { SVGProps } from "react";

const Litecoin = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82" {...props}>
    <circle cx={41.3} cy={41.3} r={36.83} fill="#fff" />
    <path
      fill="#345d9d"
      d="M41.3 0a41.3 41.3 0 1 0 41.3 41.3A41.18 41.18 0 0 0 41.54 0Zm.7 42.7-4.3 14.5h23a1.16 1.16 0 0 1 1.2 1.12v.38l-2 6.9a1.49 1.49 0 0 1-1.5 1.1H23.2l5.9-20.1-6.6 2L24 44l6.6-2 8.3-28.2a1.51 1.51 0 0 1 1.5-1.1h8.9a1.16 1.16 0 0 1 1.2 1.12v.38l-7 23.8 6.6-2-1.4 4.8Z"
    />
  </svg>
);

export default Litecoin;
