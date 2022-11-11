export default function monday(d){
    d = new Date(d);
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1);
    const data = new Date(d.setDate(diff));
    const dataInNumber = data.toString().slice(7, 10);
    return dataInNumber;
}