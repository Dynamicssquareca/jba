
import Link from "next/link";

const Breadcrumb = ({parent, sub, subChild, noBreadcrumb}) => {
    return (
        <>
            <div className='page-header breadcrumb-wrap'>
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/"> 
                            Home
                         
                        </Link>
                        <span></span>Login
                        {/* <span></span> asdas */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;
