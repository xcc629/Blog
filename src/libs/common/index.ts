export class Common {
  static getDataString(date: Date | undefined, format = ".") {
    if (!date) return "날짜모름";
    date = new Date(date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const sMonth = month > 9 ? month : "0" + month;
    const sDay = day > 9 ? day : "0" + day;
    return year + format + sMonth + format + sDay;
  }
}
