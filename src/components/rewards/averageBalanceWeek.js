import monday from "./utils"
export default function AverageBalanceWeek({holdings}){
    let avgBalance = 0;
    const currentDate = new Date().toJSON().slice(0, 10);
    const weekStartNumber = monday(currentDate);
    const currentDateNumber = currentDate.slice(8, 10);
    const daysPassedFromWeekStart = currentDateNumber - weekStartNumber;

    holdings.map((holding) => {
        if (
        parseFloat(holding.timestamp.slice(8, 10)) >= weekStartNumber &&
        parseFloat(holding.timestamp.slice(8, 10)) < currentDateNumber
        ) {
        console.log(holding.timestamp.slice(8, 10));
        avgBalance += parseFloat(
            (parseFloat(holding.close.balance) +
            parseFloat(holding.open.balance)) /
            2
        );
        }
    });

    avgBalance = avgBalance / 10 ** 18 / daysPassedFromWeekStart;
    if(avgBalance==0) {
        return
    } else {
        return <div>
         The Average Balance for Week is {avgBalance.toFixed(3)} 
    </div>
    }
    
}