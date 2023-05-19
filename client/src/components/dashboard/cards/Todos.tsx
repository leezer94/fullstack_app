import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui';

export default function TodosCard() {
  return (
    <Card className='min-h-max'>
      <CardHeader>
        <div className='flex justify-between'>
          <CardTitle>Todos</CardTitle>
          <div className='flex gap-2'>
            <Select>
              <SelectTrigger className='w-[160px]'>
                <SelectValue placeholder='SortBy' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='priority'>Priority</SelectItem>
                <SelectItem value='due-date'>Due Date</SelectItem>
              </SelectContent>
            </Select>
            <Button variant='outline'>Open</Button>
          </div>
        </div>
        <CardDescription>Your Todos sorted by Priority</CardDescription>
      </CardHeader>
      <CardContent>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
        <div>dd</div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
