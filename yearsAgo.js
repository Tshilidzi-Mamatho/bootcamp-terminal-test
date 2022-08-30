export default function yearsAgo(year){
    var today = new Date().getFullYear();
    var howLongAgo = today - year;
     return howLongAgo;
   };