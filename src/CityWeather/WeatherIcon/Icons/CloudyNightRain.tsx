import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    {...props}
  >
    <defs>
      <linearGradient
        id="c"
        x1={99.5}
        x2={232.6}
        y1={30.7}
        y2={261.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f3f7fe" />
        <stop offset={0.5} stopColor="#f3f7fe" />
        <stop offset={1} stopColor="#deeafb" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={34.7}
        x2={119.2}
        y1={18.6}
        y2={165}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
      <linearGradient
        id="a"
        x1={1381.3}
        x2={1399.5}
        y1={-1144.7}
        y2={-1097.4}
        gradientTransform="rotate(-9 8002.567 8233.063)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#0b65ed" />
        <stop offset={0.5} stopColor="#0a5ad4" />
        <stop offset={1} stopColor="#0950bc" />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="f"
        x1={1436.7}
        x2={1454.9}
        y1={-1137}
        y2={-1089.7}
        gradientTransform="rotate(-9 8009.537 8233.037)"
      />
      <linearGradient
        xlinkHref="#a"
        id="g"
        x1={1492.1}
        x2={1510.3}
        y1={-1129.3}
        y2={-1082.1}
        gradientTransform="rotate(-9 8016.566 8233.078)"
      />
      <symbol id="d" viewBox="0 0 172 172">
        <path
          fill="url(#b)"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
          d="M160.6 107.4a84.8 84.8 0 0 1-85.4-84.3A83.3 83.3 0 0 1 78 2 84.7 84.7 0 0 0 2 85.7 84.8 84.8 0 0 0 87.4 170a85.2 85.2 0 0 0 82.6-63.1 88 88 0 0 1-9.4.5Z"
        >
          <animateTransform
            additive="sum"
            attributeName="transform"
            dur="6s"
            repeatCount="indefinite"
            type="rotate"
            values="-15 86 86; 9 86 86; -15 86 86"
          />
        </path>
      </symbol>
      <symbol id="e" viewBox="0 0 350 222">
        <path
          fill="url(#c)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol id="h" viewBox="0 0 351 246">
        <use xlinkHref="#d" width={172} height={172} />
        <use
          xlinkHref="#e"
          width={350}
          height={222}
          transform="translate(1 24)"
        />
      </symbol>
    </defs>
    <use
      xlinkHref="#h"
      width={351}
      height={246}
      transform="translate(80 121)"
    />
    <use
      xlinkHref="#i"
      width={129}
      height={57}
      transform="translate(191.5 343.5)"
    />
  </svg>
);
export default SvgComponent;
