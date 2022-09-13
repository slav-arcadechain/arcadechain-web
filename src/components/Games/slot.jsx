import React from "react";
import {Step} from "../elements/Step";

const SlotComp = () => {

    return (
        <>
            <Step />
            <div className="grid  place-items-center">
                <iframe src="/games/slot/index.html" width="960px" height="540px"></iframe>
            </div>
        </>
    )

}

export default SlotComp
