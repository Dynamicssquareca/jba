
import Image from "next/image";
import Link from "next/link";
Link

const PromoBannerOne = () => {
    return (
        <>
        
        <Link href="/products/">
              <Image src="/img/banner/dumm-abnner.png" alt="ik" width={1920} height={219} />
             </Link>
        </>
        
    );
}

export default PromoBannerOne;
