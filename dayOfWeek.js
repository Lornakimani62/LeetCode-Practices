function dayOfWeek(day,month,year){
      //Use the javascript get day method
      date = new Date (year,month-1,day+1)
      console.log(date)
      // Sunday - Saturday : 0 - 6
      days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
      day = date.getDay()
      console.log(day)
      console.log(days[day])

      return days[day]  
}
dayOfWeek(31, 8,2019)