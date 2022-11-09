import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import Web3Utils from "web3-utils";
import BN from "bn.js";
import {useAccount} from "wagmi";
import {FaCheckCircle, FaInfoCircle, FaTimesCircle} from 'react-icons/fa';
import CountUp from "react-countup";

//TODO need to pass as props
const baseURL = "https://api.covalenthq.com/v1";
const act_contract_address = "0x9AE51260C3824ADc9DD9F02Bc4D6B9e5Eddeb406";
const tusd_contract_address = "0x912aAEA32355DA6FeB20D98E73B9C81B5afd6A2e";
const treasury_contract_address = "0xD7E6E12E4e631CFb191dee3b8754C231E5019185";
const chain_id = 80001;

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

export default function ActHoldings() {
    const {address} = useAccount()
    console.log(address)

    let initialChartData = {
        options: {
            chart: {
                id: "area",
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            }, dataLabels: {
                enabled: false,
            },
            yaxis: {
                labels: {
                    show: true,
                    style: {
                        colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
                        fontSize: '16px',
                    },
                }
            },
            xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                labels: {
                    show: true,
                    style: {
                        colors: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
                        fontSize: '15px',
                    },
                }
            },
            colors: ['#9817b4', '#1072d9'],
            noData: {
                text: 'Nothing to show...'
            }, legend: {
                fontSize: '16px',
                labels: {
                    colors: "#ffffff",
                }
            }
        },
        series: [],

    };

    const [gamesPlayedCount, setGamesPlayedCount] = useState(0);
    const [weeklyAverage, setWeeklyAverage] = useState(0);
    const [projectedWeeklyAverage, setProjectedWeeklyAverage] = useState(0);
    const [chartData, setChartData] = useState(initialChartData);
    const [updated, setUpdated] = useState(false);
    const [treasuryData, setTreasuryData] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const url = new URL(
                `${baseURL}/${chain_id}/address/${treasury_contract_address}/balances_v2/?key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
            );
            const response = await fetch(url);
            const result = await response.json();
            console.log(result)
            result.data.items.forEach(item => {
                console.log(item.contract_address)
                if(item.contract_address.toLowerCase() === tusd_contract_address.toLowerCase()) {
                    const treasuryBalance = Web3Utils.fromWei(new BN(item.balance));
                    console.log("treasuryBalance: " + treasuryBalance)
                    setTreasuryData(+treasuryBalance);
                }
            });
        }

        fetchData().catch(e => {
        })
    }, [address])

    useEffect(() => {
        if (address) {
            const fetchData = async () => {
                const url = new URL(
                    `${baseURL}/${chain_id}/address/${address}/portfolio_v2/?key=${process.env.NEXT_PUBLIC_COVALENT_API_KEY}`
                );
                const response = await fetch(url);
                const result = await response.json();
                const prevMonday = new Date();
                let res;
                let projection;
                let lastRawHighBalance;
                prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() + 6) % 7);
                result.data.items.forEach(item => {
                    if (item.contract_address.toLowerCase() === act_contract_address.toLowerCase()) {
                        let weeklyHoldings = item.holdings.map((holding) => {
                           if(!lastRawHighBalance) {
                               lastRawHighBalance = Web3Utils.fromWei(new BN(holding.high.balance));
                           }
                            if (removeTime(new Date(holding.timestamp)) >= removeTime(prevMonday)) {
                                return Web3Utils.fromWei(new BN(holding.low.balance).add(new BN(holding.high.balance)).divRound(new BN('2'))).toString().split('.')[0];
                            }
                        })

                        weeklyHoldings = weeklyHoldings.filter(n=> n).reverse();
                        weeklyHoldings.length = 7;
                        projection = Array.from(weeklyHoldings, (v) => v ?? lastRawHighBalance)
                        res = Array.from(weeklyHoldings, (v) => v ?? '0')
                    }
                });

                if (res) {
                    const newSeries = [];
                    newSeries.push({name: "ACT holdings", data: res});
                    newSeries.push({name: "ACT projected holdings", data: projection});
                    initialChartData.series = newSeries;
                    chartData.series = newSeries;
                    setWeeklyAverage(Math.floor(res.reduce((a, b) => parseInt(a) + parseInt(b)) / res.length));
                    setProjectedWeeklyAverage(projection.reduce((a, b) => parseInt(a) + parseInt(b), 0) / projection.length);
                    setChartData(chartData);
                    setUpdated(true)
                }
            }

            fetchData().catch(e => {
                console.error(e);
            })
        }

    }, [address])

    useEffect(() => {
        if (updated) {
            setChartData(chartData);
        }
    }, [updated])

    useEffect(() => {
        if (address) {
            fetch('https://us-central1-archadechain-faucet.cloudfunctions.net/getSlotGameCount',
                {
                    method: 'POST',
                    body: JSON.stringify({"address": address}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            ).then(async (response) => {
                const count = await response.json();
                setGamesPlayedCount(+count);
                console.debug("count: " + count);
            }).catch(e => {
                console.error("error: " + e)
            });
        }
    }, [address])

    function removeTime(date = new Date()) {
        return new Date(date.toDateString());
    }

    const pendingStyle = {color: "purple", fontSize: "2.0em", paddingRight: "5px", paddingBottom: "5px"}
    const completedStyle = {color: "green", fontSize: "2.0em", paddingRight: "5px", paddingBottom: "5px"}
    const infoStyle = {color: "#1072d9", fontSize: "2.0em", paddingRight: "5px", paddingBottom: "5px"}
    let actStepIcon;
    if (projectedWeeklyAverage > 0) {
        actStepIcon = <FaCheckCircle style={completedStyle}/>
    } else {
        actStepIcon = <FaTimesCircle style={pendingStyle}/>
    }

    let gameStepIcon;
    let countParagraph;
    if (gamesPlayedCount > 0) {
        gameStepIcon = <FaCheckCircle style={completedStyle}/>
        countParagraph = <p className={'text-md text-gray-50'}>Currently you have {gamesPlayedCount} entries</p>
    } else {
        gameStepIcon = <FaTimesCircle style={pendingStyle}/>
    }

    return (
        <>
            <div className="flex flex-col 3xl:flex-row">
                <div className="3xl:basis-1/4 3xl:ml-20 3xl:mr-20 mb-5 max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800  border rounded-lg dark:border-gray-600 dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <div className="mt-8 md:items-center justify-center">
                        <div className="px-6 py-6 md:px-8 md:py-0">
                            <h2 className="text-2xl font-bold text-gray-200 dark:text-white text-center">How to get
                                rewarded?</h2>
                            <p className="mt-2 mb-5 text-gray-500 text-sm">Arcade Chain Platform is an unique platform
                                where profits from the games are shared with all the players.</p>
                            <div>
                                <ul>
                                    <li className={'flex text-white'}>
                                        {actStepIcon} Hold ACT token
                                    </li>
                                    <li className={'text-gray-500 text-sm mb-5'}>
                                        The more tokens you hold the more you get rewarded.
                                    </li>
                                    <li className={'flex text-white'}>
                                        {gameStepIcon} Play our games
                                    </li>
                                    <li className={'text-gray-500 text-sm mb-5'}>
                                        To be eligible for current week&rsquo;s rewards you need to play a single round of any
                                        of our games that week.
                                    </li>
                                    <li className={'flex text-white'}>
                                        <FaInfoCircle style={infoStyle}/> Win Golden Ticket
                                    </li>
                                    <li className={'text-gray-500 text-sm mb-5'}>
                                        For every round played in any of our games you get one entry to win the Golden
                                        Ticket - 10% of our treasury in TUSD.
                                        {countParagraph}
                                    </li>
                                    <li className={'flex text-white '}>
                                        <FaInfoCircle style={infoStyle}/> Rewards in TUSD
                                    </li>
                                    <li className={'text-gray-500 text-sm mb-5'}>
                                        For your convenience all our rewards are paid in TUSD directly to your wallet.
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="3xl:basis-2/4 mb-5 mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800  border rounded-lg dark:border-gray-600 dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <div className="mt-8 md:items-center justify-center">
                        <div className="px-6 py-6 md:px-8 md:py-0">
                            <h2 className="text-2xl font-bold text-gray-200 dark:text-white text-center">Your ACT
                                holdings</h2>
                            <p className="mt-2 mb-3 text-gray-500">Your average ACT holdings per day for the week. The
                                more ACT you hold the bigger share of the rewards you&rsquo;ll receive.</p>
                        </div>
                    </div>
                    <div className="flex mt-10 ml-5 items-center text-center justify-center pb-6 md:py-0 text-black">
                        <div className="mb-10 text-black">
                            <Chart className={"text-black"}
                                   options={chartData.options}
                                   series={chartData.series}
                                   type="area"
                                   width="600"
                            />
                        </div>
                    </div>
                    <div className="mt-2 md:items-center justify-center">
                        <div className="px-6 py-6 md:px-8 md:py-0">
                            <p className="mt-2 mb-3 text-gray-300">Your average ACT held up to now:
                                <CountUp end={weeklyAverage}
                                         duration={2}
                                         separator=" "
                                         decimals={0}
                                         decimal="."
                                         prefix=" ACT "/>
                                </p>
                            <p className="mt-2 mb-3 text-gray-300">Your projected average ACT when position
                                held:
                                <CountUp end={projectedWeeklyAverage}
                                         duration={2}
                                         separator=","
                                         decimals={0}
                                         decimal="."
                                         prefix=" ACT "/>
                                </p>
                        </div>
                    </div>
                </div>
                <div className="3xl:basis-1/4 mb-5 3xl:ml-20 3xl:mr-20  max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg dark:bg-gray-800  border rounded-lg dark:border-gray-600 dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                    <div className="mt-8 md:items-center justify-center">
                        <div className="px-6 py-6 md:px-8 md:py-0">
                            <h2 className="text-2xl font-bold text-gray-200 dark:text-white text-center">Treasury current balance</h2>
                            <p className="mt-2 mb-5 text-gray-500 text-sm">Our treasury holding get redistributed to ACT tokens weekly. The below is it&rsquo;s current balance and allocation</p>
                            <div className={'text-white text-center text-8xl font-extrabold' }>

                                <CountUp end={treasuryData}
                                         duration={3}
                                         separator=" "
                                         decimals={0}
                                         decimal="."
                                         prefix="₮"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}