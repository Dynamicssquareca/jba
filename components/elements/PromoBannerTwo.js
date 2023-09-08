import Image from "next/image";
import Link from "next/link";

const PromoBannerTwo = () => {
  return (
    <div className='jab-prom-banner-two'>
    <Link href="/bespoke/"><Image src='/img/banner/prom-banner-1.png' alt='prom-banner'width={1580} height={400} />
      <h3>BESPOKE <br />
DESIGN SERVICE</h3>
    </Link>
  </div>
    
  );
}

export default PromoBannerTwo;
