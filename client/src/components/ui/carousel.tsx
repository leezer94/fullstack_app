'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-row items-center rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Carousel.displayName = 'Carousel';

const CarouselImageContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex px-5 gap-10 h-[80%] rounded-lg scrollbar-hide whitespace-nowrap overflow-auto',
      className
    )}
    {...props}
  />
));

CarouselImageContainer.displayName = 'CarouselImageContainer';
export { Carousel, CarouselImageContainer };
