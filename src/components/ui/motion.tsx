
import React from 'react';

interface MotionProps {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  transition?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
  whileInView?: Record<string, any>;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

// Helper function to create animated components
const createAnimatedComponent = (Component: keyof JSX.IntrinsicElements) => {
  return ({ 
    initial, 
    animate, 
    transition, 
    whileHover,
    whileTap,
    whileInView,
    children, 
    className, 
    style,
    onClick,
    ...props 
  }: MotionProps) => {
    const [isClient, setIsClient] = React.useState(false);
    const [isHovering, setIsHovering] = React.useState(false);
    const [isTapping, setIsTapping] = React.useState(false);
    const [isInView, setIsInView] = React.useState(false);
    const elementRef = React.useRef<HTMLElement>(null);

    React.useEffect(() => {
      setIsClient(true);
      
      // Simple intersection observer for whileInView
      if (whileInView && elementRef.current) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsInView(entry.isIntersecting);
          },
          { threshold: 0.1 }
        );
        
        observer.observe(elementRef.current);
        return () => observer.disconnect();
      }
    }, [whileInView]);

    // Base styles
    let baseStyle: React.CSSProperties = { ...style };
    
    // Add transition styles if client-side
    if (isClient) {
      const transitionDuration = transition?.duration || 0.3;
      const transitionEase = transition?.ease || 'ease';
      const transitionDelay = transition?.delay || 0;
      
      baseStyle = {
        ...baseStyle,
        transition: `transform ${transitionDuration}s ${transitionEase} ${transitionDelay}s, opacity ${transitionDuration}s ${transitionEase} ${transitionDelay}s`,
      };
      
      // Add animate styles or whileInView styles when in view
      const targetAnimation = (isInView && whileInView) ? whileInView : animate;
      
      if (targetAnimation) {
        baseStyle = {
          ...baseStyle,
          opacity: targetAnimation.opacity !== undefined ? targetAnimation.opacity : baseStyle.opacity,
          transform: targetAnimation.y 
            ? `translateY(${targetAnimation.y}px)` 
            : (targetAnimation.x 
              ? `translateX(${targetAnimation.x}px)` 
              : (targetAnimation.scale 
                ? `scale(${targetAnimation.scale})` 
                : baseStyle.transform)),
        };
      } else if (initial && !isInView && whileInView) {
        // Use initial styles if whileInView is set but element is not in view
        baseStyle = {
          ...baseStyle,
          opacity: initial.opacity !== undefined ? initial.opacity : baseStyle.opacity,
          transform: initial.y 
            ? `translateY(${initial.y}px)` 
            : (initial.x 
              ? `translateX(${initial.x}px)` 
              : (initial.scale 
                ? `scale(${initial.scale})` 
                : baseStyle.transform)),
        };
      }

      // Apply hover animation if hovering
      if (isHovering && whileHover) {
        baseStyle = {
          ...baseStyle,
          transform: whileHover.scale 
            ? `scale(${whileHover.scale})` 
            : (whileHover.y 
              ? `translateY(${whileHover.y}px)` 
              : (whileHover.x 
                ? `translateX(${whileHover.x}px)` 
                : baseStyle.transform)),
          transition: whileHover.transition 
            ? `transform ${whileHover.transition.duration || transitionDuration}s ${whileHover.transition.ease || transitionEase}` 
            : baseStyle.transition
        };
      }

      // Apply tap animation if tapping
      if (isTapping && whileTap) {
        baseStyle = {
          ...baseStyle,
          transform: whileTap.scale 
            ? `scale(${whileTap.scale})` 
            : (whileTap.y 
              ? `translateY(${whileTap.y}px)` 
              : (whileTap.x 
                ? `translateX(${whileTap.x}px)` 
                : baseStyle.transform)),
        };
      }
    }

    const eventHandlers: any = {};
    
    if (whileHover) {
      eventHandlers.onMouseEnter = () => setIsHovering(true);
      eventHandlers.onMouseLeave = () => setIsHovering(false);
    }
    
    if (whileTap) {
      eventHandlers.onMouseDown = () => setIsTapping(true);
      eventHandlers.onMouseUp = () => setIsTapping(false);
      eventHandlers.onMouseLeave = () => {
        setIsTapping(false);
        if (whileHover) setIsHovering(false);
      };
    }

    if (onClick) {
      eventHandlers.onClick = onClick;
    }

    return React.createElement(
      Component,
      {
        ref: elementRef,
        className,
        style: baseStyle,
        ...eventHandlers,
        ...props
      },
      children
    );
  };
};

export const motion = {
  div: createAnimatedComponent('div'),
  main: createAnimatedComponent('main'),
  section: createAnimatedComponent('section'),
  article: createAnimatedComponent('article'),
  header: createAnimatedComponent('header'),
  footer: createAnimatedComponent('footer'),
  h1: createAnimatedComponent('h1'),
  h2: createAnimatedComponent('h2'),
  h3: createAnimatedComponent('h3'),
  h4: createAnimatedComponent('h4'),
  h5: createAnimatedComponent('h5'),
  h6: createAnimatedComponent('h6'),
  p: createAnimatedComponent('p'),
  span: createAnimatedComponent('span'),
  a: createAnimatedComponent('a'),
  button: createAnimatedComponent('button'),
  ul: createAnimatedComponent('ul'),
  ol: createAnimatedComponent('ol'),
  li: createAnimatedComponent('li'),
};
