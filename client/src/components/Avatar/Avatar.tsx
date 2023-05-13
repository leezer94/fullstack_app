import Image from 'next/image';
import NextImage from '../../../public/next.svg';

type Props = {};

export default function Avatar({}: Props) {
  return (
    <div className=''>
      <h1>🧁 Hello from vanilla-extract!</h1>
      <div className=''>
        <Image src={NextImage} alt='Avatar' width='300' height='300' />
      </div>
    </div>
  );
}
