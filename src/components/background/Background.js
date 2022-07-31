import React, {Component} from "react";

class Background extends Component {

    render() {
        return (
            <>
                <div className="absolute inset-x-0 top-0 grid -z-10">
                    <img className="min-h-[392px] object-cover object-[87%]" src={"/images/hero-bg.webp"}
                         alt=""/>
                    <img className="object-cover" src={"/images/stellar-bg-2.webp"} alt=""/>
                </div>
            </>
        )
    }

}

export default Background;
