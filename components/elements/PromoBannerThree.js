import Image from "next/image";
import Link from "next/link";
const PromoBannerThree = () => {
  return (
    <div className='jab-prom-banner-two'>
    <Link href="/products/"><Image src='/img/banner/prom-banner-2.png' alt='prom-banner' width={1580} height={400} />
      <h3>JEWELRY <br />
GIFTING</h3>
    </Link>
  </div>
    
  );
}

export default PromoBannerThree;
