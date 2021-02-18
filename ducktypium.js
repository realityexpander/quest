class Ducktypium {

  constructor(color) {
    if( !(color == "red" || color == "blue" || color == "yellow") ) throw new Error("Bad color")
    this.color = color
    this.calibrationSequence = []
  }

  refract(color) {
    if( !(color == "red" || color == "blue" || color == "yellow") ) throw new Error("Bad color")
    
    if (color == this.color) return color
    
    if ( (color == "red" && this.color == "blue")    || (color=="blue" && this.color=="red")) return "purple"
    if ( (color == "red" && this.color == "yellow")  || (color=="yellow" && this.color=="red")) return "orange"
    if ( (color == "yellow" && this.color == "blue") || (color=="blue" && this.color=="yellow")) return "green"
  }

  calibrate(arr){
    let sorted = arr.sort()
    let mult = sorted.map( e => e*3)
    this.calibrationSequence = mult
  }

}

// // The following would produce an error
// try {
//   const badColor = new Ducktypium('pink');
// } catch(e) {
//   console.log('Color must be red, yellow, or blue!');
// }

// // Create a new instance of the class
// const dt = new Ducktypium('red');

// console.log(dt.color); // prints 'red'
// console.log(dt.refract('blue')); // prints 'purple'
// console.log(dt.refract('red')); // prints 'red'

// dt.calibrate([3, 5, 1]);

// console.log(dt.calibrationSequence); // prints [3, 9, 15]