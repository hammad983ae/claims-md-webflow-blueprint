
import React from 'react';

interface MotionProps {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const motion = {
  div: ({ 
    initial, 
    animate, 
    transition, 
    children, 
    className, 
    style,
    onClick,
    ...props 
  }: MotionProps) => {
    const [isClient, setIsClient] = React.useState(false);

    React.useEffect(() => {
      setIsClient(true);
    }, []);

    // Base styles
    let baseStyle: React.CSSProperties = { ...style };
    
    // Add transition styles if client-side
    if (isClient && transition) {
      baseStyle = {
        ...baseStyle,
        transition: `transform ${transition.duration || 0.3}s ${transition.ease || 'ease'} ${transition.delay || 0}s, opacity ${transition.duration || 0.3}s ${transition.ease || 'ease'} ${transition.delay || 0}s`,
      };
      
      // Add animate styles if provided
      if (animate) {
        baseStyle = {
          ...baseStyle,
          opacity: animate.opacity !== undefined ? animate.opacity : baseStyle.opacity,
          transform: animate.y ? `translateY(${animate.y}px)` : (animate.x ? `translateX(${animate.x}px)` : baseStyle.transform),
        };
      } else if (initial) {
        // Use initial styles if animate not provided
        baseStyle = {
          ...baseStyle,
          opacity: initial.opacity !== undefined ? initial.opacity : baseStyle.opacity,
          transform: initial.y ? `translateY(${initial.y}px)` : (initial.x ? `translateX(${initial.x}px)` : baseStyle.transform),
        };
      }
    }

    return (
      <div className={className} style={baseStyle} onClick={onClick} {...props}>
        {children}
      </div>
    );
  },
};
