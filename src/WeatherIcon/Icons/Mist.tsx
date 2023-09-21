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
        id="a"
        x1={220}
        x2={292}
        y1={137.7}
        y2={262.4}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d4d7dd" />
        <stop offset={0.5} stopColor="#d4d7dd" />
        <stop offset={1} stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient xlinkHref="#a" id="b" y1={193.7} y2={318.4} />
      <linearGradient xlinkHref="#a" id="c" y1={249.7} y2={374.4} />
    </defs>
    <path
      fill="none"
      stroke="url(#a)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M136 200h240"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="6s"
        repeatCount="indefinite"
        type="translate"
        values="-48 0; 48 0; -48 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#b)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M136 256h240"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-1.5s"
        dur="6s"
        repeatCount="indefinite"
        type="translate"
        values="-48 0; 48 0; -48 0"
      />
    </path>
    <path
      fill="none"
      stroke="url(#c)"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={24}
      d="M136 312h240"
    >
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="6s"
        repeatCount="indefinite"
        type="translate"
        values="48 0; -48 0; 48 0"
      />
    </path>
  </svg>
);
export default SvgComponent;
