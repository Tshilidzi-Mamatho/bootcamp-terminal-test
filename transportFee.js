export default function transportFee(shift){
    var morningShift = 'morning';
     var afternoonShift = 'afternoon';
      var nightShift = 'nightshift';
      if (morningShift.includes(shift)){
      return 'R20';
    }
      else if (afternoonShift.includes(shift)){
        return 'R10';
      }
      else if (nightShift.includes(shift)){
        return 'free';
      }
    };