'use client';

import Snowfall from 'react-snowfall';

export function SidebarSnow() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Snowfall
        snowflakeCount={25}
        speed={[0.5, 1.5]}
        wind={[-0.5, 0.5]}
        radius={[0.5, 2]}
        color="#ffffff"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}

