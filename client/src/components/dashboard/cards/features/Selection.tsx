'use client';

import { ReactNode, useContext } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';
import { SetCategoryContext } from '@/contexts';

interface Props {
  placeholder: string;
  items: string[];
  button?: ReactNode;
}

export default function Selection({ placeholder, items, button }: Props) {
  const setCurrentCategory = useContext(SetCategoryContext);

  return (
    <div className='flex gap-2'>
      <Select
        onValueChange={(value) =>
          setCurrentCategory !== null && setCurrentCategory(value)
        }
      >
        <SelectTrigger className='w-[160px]'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item: string, idx: number) => (
            <SelectItem key={`${item}/${idx}`} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {button}
    </div>
  );
}
