import { useState } from "react";
import HoldingForDay from "./holdingForDay";
import AverageBalanceWeek from "./averageBalanceWeek";
import Image from "next/image";


//TODO need to pass as props
const APIKEY = "ckey_744b3bfabf6a4e84a7a182ab71c";
const baseURL = "https://api.covalenthq.com/v1";
const address = "0x7d48b6cAc396Aa4954457CA719e5d2c7aa19f381";
const contract_address = "0x912aAEA32355DA6FeB20D98E73B9C81B5afd6A2e";
const chain_id = 80001;

export default function Rewards({color}) {
  const [holdings, setHoldings] = useState([]);

  async function getHistoricalValueOverTime() {
    console.log("in get historical values ")
    const testurl = new URL(
      `${baseURL}/${chain_id}/address/${address}/portfolio_v2/?key=${APIKEY}`
    );
    console.log(testurl)
    const response = await fetch(testurl);
    console.log(JSON.stringify(response));
    const result = await response.json();
    console.log(JSON.stringify(result));
    const data = result.data;
    let contract;
    let number;
    data.items.map((item) => {
      if (item.contract_address === contract_address) {
        contract = item;
      }
    });

    for (let i = 0; i < data.items.length; i++) {
      if (data.items[i].contract_address === contract_address) {
        number = i;
      }
    }
    if(contract) {
      setHoldings(contract.holdings);
    }
  }

  return (
    <>
      <div className="md:w-1/20 flex items-center justify-center pb-6 md:py-0">
        <div className="mt-20 max-w-2xl rounded-lg bg-white px-8 py-4 shadow-md dark:bg-gray-800">
          <div className="mt-2 mb-4">
            <p className="text-2xl font-bold text-gray-700 hover:text-gray-600 dark:text-white dark:hover:text-gray-200 ">
              Get your holdings for past Week
            </p>

            <button
              onClick={getHistoricalValueOverTime}
              className={`mt-5 relative h-10 w-32 font-poppins text-sm font-bold text-${color} md:h-[54px] md:w-[195px] md:text-base`}
            >
              <p className="relative z-20">Get Holdings For Week</p>
              <Image
                className="absolute inset-0"
                src={"/images/btn-gradient-transparent.webp"}
                alt="button gradient"
              />
            </button>
            <div className="mt-5 ">
              <p className="text-2xl font-bold mb-2">
              List of holdings
              </p>
              <ul>
                {holdings.map((holding) => (
                  <HoldingForDay
                    key={holding.timestamp}
                    timestamp={holding.timestamp}
                    amountClose={holding.close.balance}
                    amountOpen={holding.open.balance}
                  />
                ))}
              </ul>
              <AverageBalanceWeek holdings={holdings} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
