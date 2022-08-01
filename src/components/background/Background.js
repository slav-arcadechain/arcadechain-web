import React, { Component } from "react";

class Background extends Component {

    render() {
        return (
            <>
                <div className="absolute inset-x-0 top-0 grid -z-10">
                    <picture>
                        <img className="min-h-[392px] object-cover object-[87%]" src={"/images/hero-bg.webp"}
                            alt="" />
                    </picture>
                    <picture>
                        <img className="object-contain w-full" src={"/images/stellar-bg-2.webp"} alt="" />
                    </picture>
                </div>
            </>
        )
    }

}

export default Background;
