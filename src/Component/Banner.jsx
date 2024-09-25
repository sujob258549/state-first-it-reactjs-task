import React from 'react';

const Banner = () => {
    return (
        <div>
            <section className="pt-10 lg:pt-20">
                <div className="container mx-auto px-8 md:gap-10 lg:flex items-center">
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
                            Main title of your landing page
                        </h1>
                        <p className="text-xl lg:text-2xl mt-6 font-light">
                        Easy Tracking, fast Payment, and safe Delivery across country.
                        </p>
                        <p className="mt-8 md:mt-12">
                            <button
                                type="button"
                                className="
  py-4 px-12
  
  bg-teal-500
  hover:bg-teal-600
  rounded
  text-white"
                            >
                                Become a Merchant
                            </button>
                        </p>
                        
                    </div>
                    <div className="lg:w-1/2 lg:mt-0 mt-10">
                       <img src="https://steadfast.com.bd/landing-page/asset/images/rider.svg" alt="" />
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Banner;
