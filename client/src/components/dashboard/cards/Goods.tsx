'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselImageContainer,
} from '@/components/ui';

import Sample1 from '../../../../public/A24/sample1.webp';
import Sample2 from '../../../../public/A24/sample2.webp';
import Sample3 from '../../../../public/A24/sample3.webp';

const images = [
  {
    name: 'sample1',
    src: Sample1,
    href: 'https://shop.a24films.com/products/violet-logo-collar',
  },
  {
    name: 'sample2',
    src: Sample2,
    href: 'https://shop.a24films.com/products/violet-logo-collar',
  },
  {
    name: 'sample3',
    src: Sample3,
    href: 'https://shop.a24films.com/products/violet-logo-collar',
  },
  {
    name: 'sample2',
    src: Sample2,
    href: 'https://shop.a24films.com/products/violet-logo-collar',
  },
  {
    name: 'sample1',
    src: Sample1,
    href: 'https://shop.a24films.com/products/violet-logo-collar',
  },
  {
    name: 'sample2',
    src: Sample2,
    href: 'https://shop.a24films.com/products/violet-logo-collar',
  },
  {
    name: 'sample3',
    src: Sample3,
    href: 'https://shop.a24films.com/products/violet-logo-collar',
  },
];

export default function GoodsCard() {
  const router = useRouter();
  return (
    <Card className='flex flex-col w-4/6 min-h-[500px] max-h-[500px]'>
      <CardHeader>
        <CardTitle>Goods</CardTitle>
        <CardDescription>Products from A24</CardDescription>
      </CardHeader>
      <CardContent>
        <Carousel className='h-[300px]'>
          <CarouselImageContainer>
            {images.map((image, idx) => (
              <Image
                priority
                key={`sample${idx}`}
                className='rounded-lg w-[20%] cursor-pointer'
                src={image.src}
                alt={image.name}
                onClick={() => router.push(image.href)}
              />
            ))}
          </CarouselImageContainer>
        </Carousel>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
