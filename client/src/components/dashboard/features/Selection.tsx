'use client';

import type { FeedsType } from '@/components/dashboard/articles/Articles';
import { ReactNode, useContext } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { SetCategoryContext } from '@/contexts';
import { cn } from '../../../lib/utils';

interface Props {
  className?: string;
  placeholder: string;
  items: FeedsType[];
  button?: ReactNode;
}

export default function Selection({
  className,
  placeholder,
  items,
  button,
}: Props) {
  const setCurrentCategory = useContext(SetCategoryContext);

  return (
    <div className={cn('flex gap-2', className)}>
      <Select
        onValueChange={(value) =>
          setCurrentCategory !== null && setCurrentCategory(value)
        }
      >
        <SelectTrigger className='w-[160px]'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map(({ title }: FeedsType, idx: number) => (
            <SelectItem key={`${title}/${idx}`} value={title}>
              {title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {button}
    </div>
  );
}
