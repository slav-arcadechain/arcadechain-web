import React, { Component } from "react";
import Image from "next/image";

class Background extends Component {

    render() {
        return (
            <>
                <div className="absolute inset-x-0 top-0 grid -z-10">
                    <picture>
                        <Image width={3000} height={200} className="min-h-[392px] object-cover object-[87%]" src={"/images/hero-bg.webp"} alt="hero-bg" />
                    </picture>
                    <picture>
                        <Image className="object-contain w-full"
                             width={3000} height={200}
                             src={"/images/stellar-bg-2.webp"} alt="stellar-bg-2" />
                    </picture>
                </div>
            </>
        )
    }

}

export default Background;
