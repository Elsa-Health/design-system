import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

/** ILLUSTRATIONS TAKEN FROM: https://www.figma.com/file/RmQeOPc7NCtoA29dtErMoI/ADDO-Drafts?node-id=68%3A615 */

const HealthSolutionIllustration = React.memo(
  React.forwardRef((props: SvgProps & { style?: any }, svgRef: any) => {
    return (
      <Svg
        viewBox="0 0 579 633"
        fill="none"
        // @ts-ignore
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        {...props}
      >
        <Path
          d="M457.12 92h-.25c5.73 8.51 19.61 11.43 27 2.17a14.518 14.518 0 002.93-8.4c-6.45 3.82-22.8 8.1-29.68 6.23z"
          fill="#442257"
        />
        <Path
          d="M316.56 60.65c-.12 10.06-.19 21.95 10.55 20.07 7.53-1.33 5.83-14.11 5.6-20.78-.15-4.23-8.22-5.48-8.22-5.48s-7.88 2.4-7.93 6.19z"
          fill="#FAB550"
          stroke="#FAB550"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M334 60.49c-5.38-1.46-13.54-1.11-18.82.12-.35-5.25-1-16.28 3.12-19.84 5-4.31 13.76-1.5 14.51 5.55.26 2.11 1.19 14.17 1.19 14.17z"
          fill="#F15D4A"
          stroke="#F15D4A"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M340.05 140.79s-1.95-22.66-3.53-33.81c-.87-6.19-2.77-23.66-8.58-22.66-5.81 1-5.22 13.82-6.88 18.07-2 5.08-8.62 10.69-15.09 5M292.81 70.1c-.06-15.66 9.22-23.69 14-26.78 4.78-3.09 10.55-4.31 9.69-9.36-.86-5.05-8.53-5.62-12.24-4.1-5.37 2.2-12.91 6.89-17.14 13.88-4.46 7.38-7.75 12.95-8.11 29.79M304.74 156c-2.74-10.95-5.11-20-5.11-20-4.43-2.67-6.31-3.57-10.6-7.09-8.08-6.63-12.72-16.07-15.27-26-1.84-7.21-.58-15.8 9.06-11.51 5.27 2.35 13.28 16 10.73 22-3.65 8.64-11.17-3.26-12.83-8.39"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M274.14 92.58c-3.52-16.22 11.52-17.46 18.41-7.71 4.72 6.68 15.39 28.54 1 28.54"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M276.21 79.8c2.22-13.23 17.78-11.58 24-1.66 2.42 3.84 13.77 31.71 2.13 30.22M316.65 10.61l-1.17-8.21M342.46 14.13l4.69-5.87M355.58 21.6l4.69-2.35M364.77 55.18l6.45 1.17M344.6 151.57L343 139.8c-7.06 1.93-19.09 8-25.84 11.19-3.83 1.81-12.15 4.66-13.52 8.71-.78 2.39 2.36 15.3 2.36 15.3"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M382.11 280.32s-8.52 12.31-14.26 18.82c-9.37 10.65-36.29 33.44-47.68 8.14-10.06-22.34-10.06-50.26-12.43-74.57-1.34-13.7-2.23-28.42-3.12-42-.52-7.91-2.53-11.59 3.6-16.31 12.44-9.57 28.95-17.36 43.12-24.09 3.74 26.47 8.7 57.1-2.48 82.43 3.28-9.07 6.56-14.15 8.86-13.52 4.13 1.14 2.12 15.68-1.91 25.83 0-13.84 4.43-24.3 10.13-35.26 5.7-10.96 15.44-23.3 24.27-35.37 8.17-11.18 18.76-22.1 31.87-25.9M504.66 93.57c6.93-5 16.64 2.47 11.66 11.62-2.88 5.28-8.13 4.53-13.25 4.23-.56 6.09-2.37 12.76-3.78 18.9-.91 4-3.35 16-3.35 16M444.53 136s2.21-66.49 11.44-99.47M454.39 85.35c1.56 13.15 20.42 20.12 29.47 8.76 2.68-3.36 4.51-10.21 1-13.68-4.06-4-8.36-.8-12.37 1.09-4.76 2.24-11.5 2.89-16.62 1-1.62 1.03-1.28 1.67-1.48 2.83zM457.12 92c6.93 1.91 23.32-2.39 29.72-6.28M404 248.29l-2.33-13.1s33-7.92 43.34-10c.81 3 2.11 12.09 2.11 12.09M460.06 69.42v-4.14"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M455.07 35a23.171 23.171 0 004 5.47c9 8.92 23.28.19 34.09-.07-2.15 4.52-6.39 6.4-7 12.12-.61 5.72 2.09 8.72 5.77 12.81 4 4.49 5.51 7.89 7.26 13.86 1.3 4.46 1.3 11.93 6.77 13.11 4.38-4.05 3.59-15.28 4.54-21.47.92-6 1.22-12 2.07-17.9 1-6.8 4.19-18.5.78-25.05-.65-1.25-2.56-.7-3.08-1.4-.93-1.23-.7-3.22-1.85-4.26-3.69-3.32-9.83-4.22-14.56-5.31-5.29-1.23-9.47-1.51-14.24-4.2-3.25-1.84-5.18-5.83-8.18-.08-2.36-2.91-4.65-5.78-6.51-.29-5.85-7.42-12 2.78-12.76 8.58a24.3 24.3 0 002.9 14.08v0zM497 143.21c-12.41-.56-22.77-1.85-31.81-2.42-7.55-.47-15.23-2.5-22.61-3.41 4.73 6 2.83 19 5.21 26.57 3.33-8 10.2-15.1 13.29-23.12 3.65 9.11 7.72 19.12 9.76 28.81C478.43 160.6 487 149 497 143.21zM458.17 162.42c-1.2 13.95-2.46 57.11-3.13 71.11M485.74 285.22l-6.9-.68s-1.7-31.08-1.34-43.24c8.7-2 22.17-.34 30.42 2.83 1.4 6.63 1.78 35.36 1.78 35.36"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M479.87 284.73c1.23-4.53 7.16-14.79 12.55-14.82 4.64 0 9 5.9 11.25 11.37M493.62 259.81c5.42.95 5.81 9.7-.38 9.28-6.19-.42-5.03-10.23.38-9.28zM494.49 240.59c.381-4.409.534-8.835.46-13.26M480.42 229.56S500 228 508.8 226.71"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M520.21 152.68c7.48 12.25-.67 22.76-7.85 28.61-10.94 8.93-17.54 14.92-29 23.14 11.46-8.22 18.31-5.63 18.64.55.33 6.18-13.28 14.02-25 28.55-3.55 4.4-7.44 9.71-11.19 15.44M423.23 228.65c-3.19-13-6.72-36.59 4.65-32.88-6.68-15.77-11.08-30.33-4.88-47.28 2.59-7 10.83-11.46 18.64-10 0 0-2.84 59-3 86.28M526.58 207.29c-.84 12.82-1.56 21.67-2.92 34.47-1.42 13.45-3.48 30.64-3.48 30.64M302.53 201l1 .2M303.34 209.12a9.38 9.38 0 011.23.61M303.14 216.92a4.831 4.831 0 012 .61M473.03 67.33v-4.15"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M401.86 289.11c8 .78 7.48 10.13 16.37 15.92 3.7 2.42 8.86 1.32 15.08.51l2.62-.39c.05-1.23.11-2.51.18-3.88 3.51 0 15.81-3.26 15.81-3.26l.43-.1c-.14-1.17-.28-2.33-.43-3.46 8.23-1.85 15.5-3.66 21.94-5.34-3.09-10.13-10.73-55.87-10.73-55.87s-32.88 6.86-41.42 8.7c-7 1.51-29.91 8.56-29.91 8.56.89 15.37 7.36 51.17 7.36 51.17l1.29 4.42c-.77-6.78-1.76-17.3 1.41-16.98z"
          fill="#ABDDDF"
          stroke="#ABDDDF"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M529 268.57c-5.14 1-11 4.78-12 10.11 4.23 1.37 8.33 3.7 9.54 8.19-8.85-14.3-22.52-4.13-74.62 7.58 1.39 10.63 2.22 23.23 2.86 33.14a242.64 242.64 0 010 30.39s35.22-6.87 52.74-13.27c11.29-4.13 52.62-14.31 60.56-24.14 8.9-11 7.81-34 7.81-62.6s3.12-57.41-4.87-76.45c-6.92-16.46-27.95-26.26-50.85-28.84-5.74-7.37-24.27-7.34-24.27-7.34s-8.29 14.74-10.93 20.48C474.84 188 467.51 206.3 461 229.56"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M451.92 298s-12.3 3.21-15.81 3.26c-.62 11-.12 16.68-.12 27.74 0 8.22-.91 19.68-1.08 27.74L455 354M399.16 301.44c-13.68.74-9.36 21.58-9.36 30.81 0 6.68-.69 13.68 3.25 19.31 4.43 6.34 10.84 5.37 17.93 4.69 7.62-.72 14.64-2.84 21.79-3.94"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M433.31 305.54c-6.22.81-11.38 1.91-15.08-.51-8.89-5.79-8.35-15.14-16.37-15.92-4.25-.42-1 18.56-.88 22M389.8 330.12c.63 2.76 4.85 5.64 8.6 6.14M389.94 342.22c.61 2.46 8.51 5 11 4.91M482.24 353.13l2.18 2.72M490.45 350.73l2.17 3.26M474.52 355.11l2.18 3.27M444.53 355.85s-1.9 71.17-1.95 87.65c-.06 19.19-1 36.94 0 56.18 11 3.28 13.75 4.63 25.45 5.37 13.35.85 42.23 1.29 55.15-2 6.23-1.58 15.87-2.46 20.69-7.16 2.76-2.7 6.27-13.32-1.25-9.49.53-3.08 8.26-13.14-.56-11.45 6.84-18.3 2.67-65.42 3.52-76.49.68-8.71 0-31.9-.06-40.56-.11-7.39 1-24.45 1-24.45"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M407.05 357.81c.14 12.49.29 37.86-.23 50.34-1.17 27.85 1.35 58.06-.13 85.94a141.755 141.755 0 01-17.23 1.06c-9.48 0-18.17-1-20.91-1.06 0-6.79 1-33.63 1.05-40 .13-10.86.4-23.75 1.07-34.55 1.64-26.44 4.84-52.78 6.12-79.21 1.82-37.68 5.84-66 13-102.66 1.25-6.39 11.18-42.78 11.18-42.78M385.79 368.15s-10.39 11.28-14.17 17.64M505.67 505.24s.19 26.91-.08 35.71c-.28 9.27-.14 18.47-.62 27.72-.31 6 .33 13.44.38 20.27.06 7.7-2.93 13.46-11.17 13.9-8.4.45-17 .21-25.42.38-9.5.21-19.9 1.06-29.31-.27-10-1.42-10.86-4.11-11.58-13.13-.87-10.84-1.53-21.61-1.53-32.52a225.68 225.68 0 01.87-23.86c1.42-13.37.41-27.15.31-40.62-.12-14.913-.313-29.823-.58-44.73-.44-24.74 1.11-93.6 1.11-93.6"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M385.67 495.08c-.28 14.27-1.59 29.46.5 43.52 2.09 14.06-.65 28.53.81 42.74.37 3.63-.42 11.35 1.82 14.14 3.13 3.89 17.52 2 22.22 2 5.39 0 17.24.38 17.24.38"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M500 629.29h-65a2.398 2.398 0 01-2.09-2.57 2.255 2.255 0 000-.26 2.88 2.88 0 01.93-2.46c7.52-5.34 19.5-3.22 29.5-4 7.69-.56 17.9-.75 25.52-1.29 3.48-.25 7.37-1 10.68-.24.58 3.18 1.11 7.73.46 10.82z"
          fill="#442257"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M447.85 626.94h-60a2.879 2.879 0 01-2.87-2.59 2.837 2.837 0 011.28-2.7c9.19-5.88 27.31-3.06 37.33-2.89 9.76.17 13.08-.37 22.71-1.08l1.55 9.26z"
          fill="#442257"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M389.16 317.07c.49 2.79 4.23 7.13 8 7.13M474.51 374.55c13.06 5.63 22.77 17.91 33.76 26.36M486.47 250.66c1.29-.74 6.24-3.64 6.29-.3 2.24-.71 6.41-2.61 7.31 1.12M191.69 413.86s-.52 13.11-.73 16.75"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M245.4 477.57v-.17a30.85 30.85 0 01-4 .62c-.95.05-1.85.13-2.68.23l.28 1.84c.3 3.47 1.23 9.13 1.23 9.13s-16.06 2.55-40.12 5.16c-24.06 2.61-37.8 4.07-37.8 4.07s-1.15-14.25-1.64-21.16c-.51-7.18-2.15-30.34-2.15-30.34s9.58-2.41 19.24-3.77l1.44-.21c-2.24-1.85-3.35-5.7-4.05-9.58h-.45l-16.18 2.1-.79.1c-1 19.3-1.66 38.63-2.68 56.28a15.261 15.261 0 01-4.07 1.61v0l1.65 14 95-11.17-2.23-18.74z"
          fill="#ABDDDF"
          stroke="#ABDDDF"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M232.14 435.87s.7 4.24 1.13 6.69l.05.34c2.42-.38 5.33-.88 7.85-1.29L239.33 426l-52.69 6.33-.88.08c-.24 4.21-.78 7.87-1.88 9.92l.66-.09c1.22-.24 47.6-6.37 47.6-6.37z"
          fill="#ABDDDF"
          stroke="#ABDDDF"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M87.27 210.17c5.69 29.66 10.84 41.45 5.2 56.42.8-2.48 4.7-18.61 8-17.87 4.3 1 4.81 17.18 6.18 20.47-1.41-7 1.43-15.46 6.81-21.19 6.7-7.14 32.79-26.58 40.47-32.54 12.51-9.7 23-15.68 34-27.06 0 0 9.3 15.45 13.11 21.87 2.8 4.74 8.85 16.85 8.8 22.21 0 3.11-4.93 6.83-6.78 9.08-5.89 7.14-9.3 12.08-16 18.7-11.24 11.17-25.52 26.06-33.28 33.91-7.76 7.85-17.05 19.9-41.08 29-9.57 3.64-29 7.31-39.83 4.18-10.83-3.13-20-17.24-23-27.27a258.604 258.604 0 01-9.91-48.45"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M200.41 232.11s-10.48 11.08-17.78 18.07c-3.1 3-6 6-9 8.91M180.47 248a40.65 40.65 0 011.17 4.65M188.44 241.56a12.248 12.248 0 00.61 4.5M194.38 235.79c.522.852.887 1.79 1.08 2.77M190.92 190.74l7.48-6 19.46 33.67-8.51 8.73M113 128.34s.95-11.84.79-18c-21.53 13.91-21.83-23.46-.15-17.82.74-2.27 1.14-10.77 1.14-10.77"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M65 164.65c-1.49-10-.81-19.65 5-27.95 9.34-13.32 15-27 17-43.14 1.29-10 5.82-17.32 9.89-26.63 3.15-7.21 4-15.14 7.53-22.25 6.34-12.84 17.82-18.49 31.65-21.2 10-2 26.26-2.1 31 9.41 1.54 3.74 5.57 15.87.69 17.64-3.22 1.16-16.53-8.26-19.81-9.75-4.51 8.52-11.37 15.19-17.22 23.11-3.33 4.52-13.55 17-21.15 20.39M140.05 93.44c2.16 2.17 5.26 4.19 8.48 3.27M22.74 506.28a327.13 327.13 0 01-4.35 39.15c-3.34 18.69-7.14 37-11.68 54.85 11.32.39 23.47-1 35-1.52 8.08-.34 16.81-.25 24.68-.75 6.37-18.69 9.75-44.47 13-64 2-12.15 3.16-19.1 4.48-31.34"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.81 630.29h71.44c.22-7.84-3.24-8.83-10.08-9.24-10-.6-20.33-.45-30.33-.55-10-.1-19.67.73-29.3.11l-1.73 9.68z"
          fill="#442257"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.68 620.53l3.31-17.97M52.87 619.42c2.11-7.82 3.14-12.9 4.94-20.74M68.8 590s16.72.9 26.63.61c8.19-.24 27.27-1.15 27.27-1.15s7.22-36.4 9.12-49.4c3.67-25.18 7.3-50.55 8.52-76 1.13-23.47 1.74-38.83 2.92-62.29.69-13.83 3.42-64.16 3.4-77.65a132.973 132.973 0 01-27.56 3.18M105.09 592.22c-2.37 7.92-6.53 22.87-6.53 22.87"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M51.64 626.49h62.7c8.16-14.32-18.21-11.27-60.11-11.27"
          fill="#442257"
        />
        <Path
          d="M51.64 626.49h62.7c8.16-14.32-18.21-11.27-60.11-11.27M138.81 494.73c4.23.29 12.64-.54 16.22-2.82 2-34.94 2.69-76.47 7-111.29 2.69-21.6 5.44-100.52 5.44-100.52M146 324.39c11.7-2.45 14.81-8.85 13-19.63-1.58-9.41-.65-14.76-.65-14.76M39.94 377.15c13.52-3 31.87-13.85 40.25-22.3M193.7 253.2c1.53 21.7 2.88 41.38 3.38 49.87 1.77 30.18 3.23 47.6 2.84 77.95-.07 5.37 0 14.85-.95 20-7.16 2.76-32 2.47-37.19 3M193.44 403.05l.26 9.32-31.92 1.49M241.38 478c2.81-.14 9.69-1.95 9.69-1.95-.66-11.41-1.87-23.81-4.7-35.17-3.22.18-15.17 2.59-17.68 2.55 1.24 8.41 5 35.72 5 35.72a38.957 38.957 0 017.69-1.15v0zM217.77 447.86c1 2 .17 5.43.39 7.92.25 2.81 1 5.91 1.55 8.77a90.232 90.232 0 011.73 17.58M208.82 449.31c1.62 10.52 1.42 22.43 4.12 32.53M180.86 452.44c1 2 .17 5.42.39 7.92.25 2.8 1 5.91 1.55 8.77a90.208 90.208 0 011.73 17.57M171.91 453.88c1.62 10.52 1.42 22.44 4.12 32.54M201.08 449.92c-2.95 6.59 1.62 17.22 1.87 24.28.11 3.21 0 6.63 1.06 9.51M190.92 451.41c.37 6.61 1.74 13.43 2.25 20.14.33 4.24-.37 10 1.1 14.05M185.86 419.57c.26 12.11.18 28.36-6.41 23.64-4.11-3-4.59-12.42-5.48-17.41M167 51.39a329.848 329.848 0 01-3.38 54.25c-1.07 7.93-2.49 25.7-4.7 38.15M146.84 77.49l.5-2.97M158.64 77.68l.59-3.33M127 228.65c-6.84-18.32-22.8-39.18-26.28-42.51-6.66-6.37-2.65-18.43 8.94-13.9-7-6.73-24.63-16.08-24.73-20.55-.17-6.76 15.4-15.74 20.78-15.16 9.17 1 14.43 24.51 16.07 31.75 1.64 7.24 8.48 47.37 5.3 67.51"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M107.48 136.54s1.36-4 2.16-7.11c7.1-2.11 18.4 3.22 24.72 5.77 4.91 2 6.17 9.32 6.94 13.78 1.24 7.18 2.8 14.3 3.61 21.55 1.38 12.33 2.49 38.71.93 50.93"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M120.62 157.94c3.16 1.21 6 3.31 9.49 3.44 3.24-5.57 3.59-18.07 4.47-24.58M118.89 320.64c-.4 7.87-11.16 89.27-11.85 97.31-1 11.3-5.25 51.49-6.65 60.13-.63 3.9-2.52 18.91-5.41 22-2.53 2.68-16 3.14-19.6 3.5-10.7 1.08-21.09 1.85-31.52 2.29-14 .59-22.22.77-36.12-.64-5.54-.56-4.27.17-5.07-3.85-.84-4.27 1.32-86.34 1.91-106.57.59-20.23 3.81-45.86 5.68-61.9 1.78-15.28 9-92.14 26.09-126.38 5-9.9 16.16-28.5 23.59-36.77 5.2-5.79 15.3-13.79 25.19-16M165.15 154.28c9.69 12.34 16.49 26.2 18.58 38.19"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M145.84 180.64c3.35-13.71 12-35 18.75-47 3.28 3 6.67 15.4 5.42 19.95-2.49-.55-9.69.62-12.11-.19"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M165.15 205.87s-.1-18.37-1-25.23c-1.08-8.23-2.6-17.84-5-25.55M201 187.06a41.834 41.834 0 007.61-8.94c3.69-5.5 2.36-22.87 7.72-28.18 9.67-8.62 8.87 11 8.41 20.36 12.47-9 22.59-13.25 22.76-1.05 5.66-2.56 7.07 6.53 4.81 10 5.59 3.15 3.46 10 .48 13.32 4.42 4-1 11.58-4.78 14.9a28.181 28.181 0 01-15.13 6.18c-3.23.17-8.68-.2-12-1.75l-4.88 3.23M234.11 182.68c5.32-3.19 11.15-7.5 13.37-13.43M237.61 192.47c4.48-2.7 13-7.72 14.68-13.26M244 200.74a40.409 40.409 0 008.76-8.21M447.79 618.92c-.22-4.76-.09-13.79-.09-13.79M495.66 603.83l-.53 16.09M402.6 618.15c-.19-6.56.81-13 .76-19.53"
          stroke="#442257"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    );
  })
);

export default HealthSolutionIllustration;
