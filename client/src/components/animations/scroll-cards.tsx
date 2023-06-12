'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from '@/constants';

interface Props {
  children: ReactNode;
}

//   overflow-hidden items-center relative justify-center pt-[20px] mb-[-120px]

export default function Card({ children }: Props) {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        className='flex items-center max-w-10/12 justify-center overflow-scroll'
        variants={cardVariants}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
