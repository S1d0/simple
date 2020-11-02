import React, { useEffect } from 'react';


interface SelfChangingComponentProps {
    renderComplete: () => {};
    visParams: {
      counter: number;
    };
  }
  

export function SimpleComponent(props: SelfChangingComponentProps) {
    return (
      <div>
          <h1>Hello World!</h1>
      </div>
    );
  }
  