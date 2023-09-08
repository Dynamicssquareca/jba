import Link from 'next/link';
import React from 'react';
const MyWishlist = () => {
    return (
        <>
        <div className='page-header breadcrumb-wrap'>
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">
                            Home
                        
                        </Link>
                        <span></span>Wish list
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyWishlist;
