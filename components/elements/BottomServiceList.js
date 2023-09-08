import Image from "next/image";

const BottomServiceList = () => {
    return (
        <section className="featured  section-padding">
        <div className="container">
            <div className="row">
             
                <div className="col-lg-1-5 col-md-1-5 col-6 col-sm-4">
                    <div
                        className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                        data-wow-delay=".1s"
                    >
                        <div className="banner-icon">
                            <Image
                                src="/img/themepic/icons/workspace_premium.png"
                                alt="workspace_premium"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="banner-text">
                            <h3 className="icon-box-title">
                            Certified <br />Jewelry
                            </h3>
                          
                        </div>
                    </div>
                </div>
                <div className="col-lg-1-5 col-md-1-5 col-6 col-sm-4">
                    <div
                        className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                        data-wow-delay=".2s"
                    >
                        <div className="banner-icon">
                            <Image
                                src="/img/themepic/icons/architecture.png"
                                alt="architecture"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="banner-text">
                            <h3 className="icon-box-title">
                            Best <br /> Design
                            </h3>
                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-1-5 col-md-1-5 col-6 col-sm-4">
                    <div
                        className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                        data-wow-delay=".3s"
                    >
                        <div className="banner-icon">
                            <Image
                                src="/img/themepic/icons/draw.png"
                                alt="draw"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="banner-text">
                            <h3 className="icon-box-title">
                            Bespoke <br />Jewelry
                            </h3>
                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-1-5 col-md-1-5 col-6 col-sm-4">
                    <div
                        className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                        data-wow-delay=".4s"
                    >
                        <div className="banner-icon">
                            <Image
                                src="/img/themepic/icons/archive.png"
                                alt="archive"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="banner-text">
                            <h3 className="icon-box-title">
                            Easy <br /> Return
                            </h3>
                          
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-1-5 col-md-1-5 col-6 col-sm-4">
                    <div
                        className="banner-left-icon d-flex align-items-center  wow animate__animated animate__fadeInUp"
                        data-wow-delay="0"
                    >
                        <div className="banner-icon">
                            <Image
                                src="/img/themepic/icons/encrypted.png"
                                alt="encrypted"
                                width={48}
                                height={48}
                            />
                        </div>
                        <div className="banner-text">
                            <h3 className="icon-box-title">
                            Secure <br /> Shipping
                            </h3>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default BottomServiceList;
