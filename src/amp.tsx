import * as React from "react";
import { SVGProps } from "react";

const Amp = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 124" {...props}>
    <circle cx={62} cy={62} r={60} fill="#f2e3ee" />
    <circle cx={62} cy={62} r={62} fill="#d9327c" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M59.6 32.7c-.5.4-1.1 1.1-1.5 2.4-.4 1.3-2.6 7.7-5.4 15.7h18.7c-2.8-8-5-14.4-5.4-15.7-.4-1.3-1-2-1.5-2.4-.5-.4-1.2-.7-2.5-.7s-1.9.3-2.4.7zM32 50.8h12.7c3.1-9.1 5.8-16.7 6.2-18.1.8-2.4 2.1-4.5 4.1-6 2-1.5 4.4-2.2 6.9-2.2s4.9.6 6.9 2.2c2 1.5 3.3 3.6 4.1 6 .5 1.4 3.1 8.9 6.2 18.1H92c2.1 0 3.8 1.7 3.8 3.8s-1.7 3.8-3.8 3.8H32c-2.1 0-3.7-1.7-3.7-3.8s1.7-3.8 3.7-3.8zm0 15c-2.1 0-3.7 1.7-3.7 3.8s1.7 3.8 3.7 3.8h5l-2 5.8-2 5.8-.8 2.2c-.7 2 .4 4.1 2.3 4.8 2 .7 4.1-.4 4.8-2.3l.8-2.2 2-5.8c.8-2.4 1.8-5.2 2.9-8.3h34.2c1 3 2 5.9 2.9 8.3l2 5.8.8 2.2c.7 2 2.8 3 4.8 2.3 2-.7 3-2.8 2.3-4.8l-.8-2.2-2-5.8-2-5.8h5c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8H32zm56.3 22.5 3.5-1.2-3.5 1.2zm0 0-3.5 1.2 3.5-1.2zm-52.5 0 3.5 1.2-3.5-1.2zm0 0-3.5-1.2 3.5 1.2z"
      clipRule="evenodd"
    />
  </svg>
);

export default Amp;