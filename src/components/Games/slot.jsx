import React from "react";
import {Step} from "../elements/Step";
import Reminder from "../elements/Reminder";

const SlotComp = () => {

    return (
        <>
            <Step />
            {/*<Reminder />*/}
            <div className="grid  place-items-center">
                <iframe src="/games/slot/index.html" width="960px" height="540px"></iframe>
            </div>
        </>
    )

}

export default SlotComp
