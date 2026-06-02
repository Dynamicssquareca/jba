
import Image from "next/image";
import Link from "next/link";
Link

const PromoBannerOne = () => {
    return (
        <>
        
        <Link href="/products/">
              <Image src="/img/banner/JBA-banner-mid-section.webp" alt="ik" width={1920} height={219} />
             </Link>
        </>
        
    );
}

export default PromoBannerOne;
