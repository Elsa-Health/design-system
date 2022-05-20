import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

export const ElsaColorableIcon = React.memo(
  React.forwardRef(
    (props: SvgProps & { style?: any; color?: string }, svgRef: any) => {
      return (
        <Svg
          width={24}
          height={24}
          // @ts-ignore
          xmlns="http://www.w3.org/2000/svg"
          stroke="none"
          viewBox="0 0 25 25"
          fill="currentColor"
          ref={svgRef}
          {...props}
          style={[{ color: props.color || '#000' }, props.style || {}]}
        >
          <Path
            d="M25 6.855v12.37H7.58c-1 0-1.82-.82-1.82-1.819v-5.915h2.16v5.296c0 .14.12.28.28.28h14.66V7.013A4.863 4.863 0 0018 2.158H0V0h18.14C21.92 0 25 3.078 25 6.855z"
            fill="currentColor"
          />
          <Path
            d="M0 18.125V5.755h17.42c1 0 1.82.82 1.82 1.819v5.915h-2.16V8.193c0-.16-.12-.28-.28-.28H2.16v10.073a4.863 4.863 0 004.86 4.856H25V25H6.86C3.08 24.98 0 21.902 0 18.125z"
            fill="currentColor"
          />
        </Svg>
      );
    }
  )
);

export default ElsaColorableIcon;
