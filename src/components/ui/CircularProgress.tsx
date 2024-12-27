import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface CircularProgressProps {
  value: number;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
    className?: string;
    variant: 'determinate' | 'indeterminate';
}

export function CircularProgress({
  value,
  size = 'md',
  children,
    className,
    variant
}: CircularProgressProps) {
  const getSize = () => {
    switch (size) {
      case 'sm':
        return 25;
      case 'md':
        return 40;
      case 'lg':
        return 60;
      default:
        return 40;
    }
  };

  const strokeLinecap = 'round'; // Set the rounded stroke-linecap style
  const sizeValue = getSize();
    
    const styles = variant === 'indeterminate' ? {
        root: {
            width: `${sizeValue}px`,
            height: `${sizeValue}px`,
            position: 'relative',
             transform: 'rotate(-90deg)',

        },
        trail: {
            stroke: '#e2e8f0',
        },
        path:{
            stroke: 'currentColor',
            strokeLinecap,
             animation: 'circular-progress-dash 1.4s ease-in-out infinite',
        }
    } :  buildStyles({
        // Rotation of path and trail, 0 rotates the progress from the top
        rotation: 0,

        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap,

        // Customize the circle progress color
        pathColor: 'currentColor',

        // Customize the circle trail color
        trailColor: '#e2e8f0',
        
        textSize: `${sizeValue/3}px`,

        // Whether to use animation
        transition: 'stroke-dashoffset 0.5s ease 0s',
    })
  return (
    <div style={{position: 'relative', width: `${sizeValue}px`, height: `${sizeValue}px`}} className={className}>
          <CircularProgressbar
        value={variant === 'indeterminate' ? 100 : value}
        styles={styles}
              strokeWidth={6}
          
      />
          <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: `${sizeValue/3}px`,
                
          }}
          >
              {children}
          </div>
    </div>
  );
}
