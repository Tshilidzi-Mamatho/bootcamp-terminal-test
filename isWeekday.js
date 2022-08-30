export default function isWeekday(wday) {
    var weekday = ['Monday','Tuesday', 'Wednesday','Thursday','Friday']; 
      if(weekday.includes(wday)){
      return true;
      }else{
      return false;
      }
    };