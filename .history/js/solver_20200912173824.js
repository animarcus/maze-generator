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

    if (this.direction === 0) {
      this.facing = grid[index(this.i, this.j-1)];
      rect(x + w/2-w/8, y + w/2, w/4, -w/2);
    } else if (this.direction === 1) {
      rect(x + w/2, y + w/2-w/8, w/2, w/4);
      this.facing = grid[index(this.i+1, this.j)];
    } else if (this.direction === 2) {
      rect(x + w/2-w/8, y + w/2, w/4, w/2);
      this.facing = grid[index(this.i, this.j+1)];
    } else if (this.direction === 3) {
      rect(x + w/2, y + w/2-w/8, -w/2, w/4);
      this.facing = grid[index(this.i-1, this.j)];
    }
    if (this.facing === undefined) {
      console.log("boop");
      this.facing = {"walls" : [true, true, true, true]};
    }
  }
  move() {
    if (this.direction === 0 && this.current.walls[0] && this.facing.walls[2]) {
      this.direction = 1;
    } else if (this.direction === 0) {
      this.j = this.j-1;

    }
    if (this.direction === 1 && this.current.walls[1] && this.facing.walls[3]) {
      this.direction = 2;
    } else if (this.direction === 1) {
      this.i ++;

    }
    if (this.direction === 2 && this.current.walls[2] && this.facing.walls[0]) {
      this.direction = 3;
    } else if (this.direction === 2) {
      this.j ++;

    }
    if (this.direction === 3 && this.current.walls[3] && this.facing.walls[1]) {
      this.direction = 0;
    } else if (this.direction === 3) {
      this.i --;

    }
  }
}