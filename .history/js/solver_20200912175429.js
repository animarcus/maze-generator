let facing;
class Solver {
  constructor(x, y) {
    this.i = x;
    this.j = y;
    this.direction = 1; // up-right-down-left
  }
  draw() {
    this.current = grid[index(this.i, this.j)];
    if (this.direction > 3) {
      this.direction = 0;
    }

    fill(color("red"));
    let x = this.i*w;
    let y = this.j*w;

    if (this.direction % 4 === 0 || this.direction === 0) {
      this.facing = grid[index(this.i, this.j-1)];
      rect(x + w/2-w/8, y + w/2, w/4, -w/2);
    } else if (this.direction % 4 === 1) {
      rect(x + w/2, y + w/2-w/8, w/2, w/4);
      this.facing = grid[index(this.i+1, this.j)];
    } else if (this.direction % 4 === 2) {
      rect(x + w/2-w/8, y + w/2, w/4, w/2);
      this.facing = grid[index(this.i, this.j+1)];
    } else if (this.direction % 4 === 3) {
      rect(x + w/2, y + w/2-w/8, -w/2, w/4);
      this.facing = grid[index(this.i-1, this.j)];
    }
    if (this.facing === undefined) {
      console.log("boop");
      this.facing = {"walls" : [true, true, true, true]};
    }
  }
  move() {
    // if (current.walls[front]) {
    //   if (current.walls[front+1]) {
    //     //
    //   }
    // }
    // up wall check : this.current.walls[0] && this.facing.walls[2]
    // right wall check : this.current.walls[1] && this.facing.walls[3]
    // down wall check : this.current.walls[2] && this.facing.walls[0]
    // left wall check : this.current.walls[3] && this.facing.walls[1]
  }
}