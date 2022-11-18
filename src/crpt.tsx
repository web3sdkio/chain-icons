import * as React from "react";
import { SVGProps } from "react";

const Crpt = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" {...props}>
    <path fill="#2992fb" fillRule="evenodd" d="M0 0h64v64H0V0z" />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="m44.28 18.57-1.15 1.15A15.75 15.75 0 0 0 33 16.1a15.94 15.94 0 0 0-15.9 14.83h-1.65A17.53 17.53 0 0 1 33 14.45a17.78 17.78 0 0 1 11.29 4.12ZM33 20.3a11.83 11.83 0 0 1 9.56 4.86L43.71 24a13.39 13.39 0 1 0 0 16.07l-1.15-1.15A11.77 11.77 0 1 1 33 20.3Zm12.61-.49L44.45 21a14.35 14.35 0 0 1 1.07 1.24L46.67 21a14.27 14.27 0 0 0-1.07-1.24ZM15.36 33.15A17.57 17.57 0 0 0 44.2 45.51L43 44.36A15.75 15.75 0 0 1 32.91 48 15.94 15.94 0 0 1 17 33.15h-1.64Zm29.08 10 1.15 1.15a14.33 14.33 0 0 0 1.08-1.3l-1.15-1.15a14.32 14.32 0 0 1-1.07 1.24ZM33 51.94a19.94 19.94 0 0 1 0-39.88 19.79 19.79 0 0 1 15.32 7.25l1.15-1.15A21.56 21.56 0 1 0 33 53.59a21.27 21.27 0 0 0 16.48-7.75l-1.15-1.15A19.53 19.53 0 0 1 33 51.94Z"
    />
  </svg>
);

export default Crpt;
