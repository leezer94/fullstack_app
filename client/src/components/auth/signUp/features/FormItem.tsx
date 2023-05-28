import { Input } from '@/components/ui';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

interface Props {
  field: any;
  label: string;
  placeholder: string;
  description?: string;
  type?: string;
}

export default function ItemField({
  field,
  label,
  placeholder,
  description,
  type,
}: Props) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input type={type} placeholder={placeholder} {...field} />
      </FormControl>
      <FormDescription className='items-end'>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
}
