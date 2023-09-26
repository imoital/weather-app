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
        x1={8.7}
        x2={80.9}
        y1={17.1}
        y2={142.1}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f7b23b" />
        <stop offset={0.5} stopColor="#f7b23b" />
        <stop offset={1} stopColor="#f59e0b" />
      </linearGradient>
      <symbol id="c" viewBox="0 0 350 222">
        <path
          fill="url(#a)"
          stroke="#e6effc"
          strokeMiterlimit={10}
          strokeWidth={6}
          d="m291 107-2.5.1A83.9 83.9 0 0 0 135.6 43 56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"
        />
      </symbol>
      <symbol id="d" viewBox="0 0 102.7 186.8">
        <path
          fill="url(#b)"
          stroke="#f6a823"
          strokeMiterlimit={10}
          strokeWidth={4}
          d="m34.8 2-32 96h32l-16 80 80-112h-48l32-64h-48z"
        >
          <animate
            attributeName="opacity"
            begin="0s; x1.end+.67s"
            dur="1.33s"
            keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
            values="1; 1; 0; 1; 0; 1; 0; 1"
          />
        </path>
      </symbol>
    </defs>
    <use
      xlinkHref="#c"
      width={350}
      height={222}
      transform="translate(81 145)"
    />
    <use
      xlinkHref="#d"
      width={102.7}
      height={186.7}
      transform="translate(205.23 291)"
    />
  </svg>
);
export default SvgComponent;
