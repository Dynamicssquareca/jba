import Link from 'next/link';
import React from 'react';
import Head from 'next/head';

const MyWishlist = () => {
    return (
        <>
        <Head>
      <title>Wishlist | JBA</title>
        <meta name="description" content="Loose Diamond Supplier, Manufacturer & Exporter from India" />
      </Head>
        <div className='page-header breadcrumb-wrap'>
                <div className="container">
                    <div className="breadcrumb">
                        <a href="/">
                            Home
                        
                        </a>
                        <span>Wish list</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyWishlist;
