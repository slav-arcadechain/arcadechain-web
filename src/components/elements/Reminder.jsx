import React from "react";

const Reminder = () => {
    return (
        <>
            <div className="grid place-items-center mb-5">
                <div className="bg-orange-200 p-5 w-full sm:w-1/2 ">
                    <div class="flex space-x-3 place-items-center">
                        <div class="leading-tight flex flex-col space-y-2 ">
                            <div class="text-sm font-medium text-red-700">Reminder</div>
                            <div class="flex-1 leading-snug text-sm text-red-600">This game is still in beta testing and
                                connected to Cronos test network.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reminder
