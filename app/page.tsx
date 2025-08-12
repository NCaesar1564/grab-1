import HomePage from "./(page)/HomePage/page";
import Image from '@/public/images/default-images.webp'
export default function Home() {
  const defaultImage = Image;
  return (
    <>
      <HomePage defaultImage={defaultImage}/>
    </>
  );
}
