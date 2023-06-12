/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { MotionValue, PanInfo } from 'framer-motion';

export type CarouselProps = {
  children: ReactNode;
  renderArrowLeft?: (args: {
    handlePrev: () => void;
    activeIndex: number;
  }) => ReactNode;
  renderArrowRight?: (args: {
    handleNext: () => void;
    activeIndex: number;
  }) => ReactNode;
  renderDots?: (args: Omit<DotProps, 'length'>) => ReactNode;
  autoPlay: boolean;
  interval: number;
  loop: boolean;
};

export type ArrowProps = {
  onClick: () => void;
  left?: boolean;
  children: ReactNode;
};

export type SliderProps = {
  x: MotionValue<number>;
  i: number;
  children: ReactNode;
  onDragEnd: (e: Event, dragProps: PanInfo) => void;
  totalSliders: number;
};

export type DotProps = {
  length: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};

export type CarouselRef = {
  handleNext: () => void;
  handlePrev: () => void;
  setIndex: (index: number) => void;
};
