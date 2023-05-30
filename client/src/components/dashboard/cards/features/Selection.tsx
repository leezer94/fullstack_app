import { ReactNode } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

interface Props {
  placeholder: string;
  items: string[];
  button: ReactNode;
}

export default function Selection({ placeholder, items, button }: Props) {
  return (
    <div className='flex gap-2'>
      <Select>
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
