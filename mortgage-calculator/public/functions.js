const Func = {

  thisMonthStr() {
    const today = new Date();
    const thisMonth = today.getMonth() + 1;
    const thisYear = today.getFullYear();
    return thisYear + "-" + (thisMonth < 10 ? "0" : "") + thisMonth + "-01";
  },

  formatNum(num) {
    return num.toLocaleString("en-GB", {style: "currency", currency: "GBP", currencyDisplay: "symbol", useGrouping: true});
  },

  formatDate(mNum, yNum) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[mNum - 1] + " " + yNum.toString();
  },

  isLeap(yNum) {
    return yNum % 4 == 0;
  },

  getDaysInMonth(mNum, yNum) {
    const array = [4, 6, 9, 11];
    let days = 31;
    if (array.indexOf(mNum) != -1) {
      days = 30;
    } else if (mNum == 2) {
      days = this.isLeap(yNum) ? 29 : 28;         
    }
    return days;
  },

  round(num, dp) {
    let scalar = Math.pow(10, dp);
    return Math.round(num * scalar) / scalar;
  }

}

module.exports = Func;
