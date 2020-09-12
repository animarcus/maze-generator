let facing;
class Solver {
  constructor(x, y) {
    this.i = x;
    this.j = y;
    this.direction = -1; // up-right-down-left
  }
  draw() {
    this.current = grid[index(this.i, this.j)];

    fill(color("red"));
    this.direction = Math.abs(this.direction);
    let x = this.i*w;
    let y = this.j*w;

    if (this.direction % 4 === 0) {
      this.direction = 0;
      this.facing = grid[index(this.i, this.j-1)];
      rect(x + w/2-w/8, y + w/2, w/4, -w/2);
    } else if (this.direction % 4 === 1) {
      this.direction = 1;
      rect(x + w/2, y + w/2-w/8, w/2, w/4);
      this.facing = grid[index(this.i+1, this.j)];
    } else if (this.direction % 4 === 2) {
      this.direction = 2;
      rect(x + w/2-w/8, y + w/2, w/4, w/2);
      this.facing = grid[index(this.i, this.j+1)];
    } else if (this.direction % 4 === 3) {
      this.direction = 3;
      rect(x + w/2, y + w/2-w/8, -w/2, w/4);
      this.facing = grid[index(this.i-1, this.j)];
    }
  }
  move() {
    console.log(this.direction);
    // console.log(this.current.walls);
    if (this.current.walls[this.direction]) {
      if (this.current.walls[this.direction + 1]) {
        this.direction -= 1;
      } else if (this.current.walls[this.direction - 1]) {
        this.direction += 1;
      } else if (!this.current.walls[this.direction + 1] && !this.current.walls[this.direction - 1])
    } else {
      this.i = this.facing.i;
      this.j = this.facing.j;
    }
    
    // up wall check : this.current.walls[0] && this.facing.walls[2]
    // right wall check : this.current.walls[1] && this.facing.walls[3]
    // down wall check : this.current.walls[2] && this.facing.walls[0]
    // left wall check : this.current.walls[3] && this.facing.walls[1]
  }
}