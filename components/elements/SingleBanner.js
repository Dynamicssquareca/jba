import Link from 'next/link';
import Image from "next/image";


const SingleBanner = () => {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
          <div>
      <Link href="/products/"><img src='/img/banner/single-bnner.png' alt='banner' /></Link>
    </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleBanner;
