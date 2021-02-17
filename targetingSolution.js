class TargetingSolution {

  constructor(coordinate) {
    this.x = coordinate.x;
    this.y = coordinate.y;
    this.z = coordinate.z;
  }

  target() {
    return `(${this.x}, ${this.y}, ${this.z})`
  }

}

// const sln = new TargetingSolution({x:45, y:12, z:-1})
// console.log(sln.target())