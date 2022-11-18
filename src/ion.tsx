import * as React from "react";
import { SVGProps } from "react";

const Ion = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <g fill="none" fillRule="evenodd">
      <circle cx={16} cy={16} r={16} fill="#57beea" />
      <path
        fill="#fff"
        fillRule="nonzero"
        d="M7.026 19.009A2.712 2.712 0 0 1 4 16.309a2.712 2.712 0 0 1 2.682-2.718c.96-4.41 4.87-7.711 9.546-7.711.873 0 1.72.115 2.525.33A2.7 2.7 0 0 1 21.005 5a2.712 2.712 0 0 1 2.705 2.718c0 .469-.118.91-.326 1.294A9.809 9.809 0 0 1 26 15.698a9.811 9.811 0 0 1-2.904 6.985c.326.448.518 1.001.518 1.599A2.712 2.712 0 0 1 20.908 27a2.707 2.707 0 0 1-2.519-1.724 9.76 9.76 0 0 1-2.16.24c-4.241 0-7.851-2.714-9.203-6.507zm.49-.105c1.3 3.568 4.71 6.115 8.712 6.115.695 0 1.372-.077 2.023-.222a2.712 2.712 0 0 1 2.657-3.233c.72 0 1.376.283 1.86.744a9.314 9.314 0 0 0 2.737-6.61c0-2.41-.91-4.606-2.405-6.26-.496.61-1.25.999-2.095.999a2.712 2.712 0 0 1-2.706-2.719c0-.374.076-.731.212-1.056a9.253 9.253 0 0 0-2.283-.284c-4.416 0-8.112 3.101-9.047 7.255a2.715 2.715 0 0 1 2.23 2.676 2.718 2.718 0 0 1-1.896 2.595zm8.712-.484a2.715 2.715 0 0 1-2.708-2.722c0-1.503 1.212-2.721 2.708-2.721s2.709 1.218 2.709 2.721a2.715 2.715 0 0 1-2.709 2.722z"
      />
    </g>
  </svg>
);

export default Ion;