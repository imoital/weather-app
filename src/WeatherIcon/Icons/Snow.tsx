import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
    <defs>
      <linearGradient
        id="a"
        x1={192}
        x2={320}
        y1={145.2}
        y2={366.8}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#86c3db" />
        <stop offset={0.5} stopColor="#86c3db" />
        <stop offset={1} stopColor="#5eafcf" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      stroke="#72b9d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m372 295.2-34.3-19.7a83.8 83.8 0 0 0 0-39l34.3-19.7a24 24 0 1 0-24-41.6L313.7 195a81.4 81.4 0 0 0-33.7-19.4V136a24 24 0 0 0-48 0v39.6a84 84 0 0 0-33.7 19.4L164 175.2a24 24 0 1 0-24 41.6l34.3 19.7a83.8 83.8 0 0 0 0 39L140 295.1a24 24 0 1 0 24 41.6l34.3-19.8a80.6 80.6 0 0 0 33.7 19.4V376a24 24 0 0 0 48 0v-39.7a84 84 0 0 0 33.7-19.3l34.3 19.8a24 24 0 1 0 24-41.6Zm-134-8a36 36 0 1 1 49.2-13.2 36 36 0 0 1-49.2 13.2Z"
    >
      <animateTransform
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="scale"
        values="1 1; .9 .9; 1 1; .9 .9; 1 1"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 25.75 25.75; 0 0; 25.75 25.75; 0 0"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        calcMode="spline"
        dur="6s"
        keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
        repeatCount="indefinite"
        type="rotate"
        values="-6 256 256; 6 256 256; -6 256 256"
      />
    </path>
  </svg>
);
export default SvgComponent;
