import Image from 'next/image';
export default function LogoCard() {
  return (
    <>
      <div className="">
        <Image  
          className="w-full h-full"
          src="https://ass-bucket.s3.amazonaws.com/logo.png"
          alt="Sunset in the mountains"
        />

      </div>
    </>
  );
}
