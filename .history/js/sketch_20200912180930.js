


let cols, rows;
let w = 80;
let grid = [];
let current;
let stack = [new Cell(0, 0)];

let generated;
let solveOK;


function setup() {
  createCanvas(400,400);
  cols = floor(width/w);
  rows = floor(width/w);

  // frameRate(7);

  generated = false;
  solveOK = false;

  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      let cell = new Cell(i,j);
      grid.push(cell);
    }
  }
  current = grid[0];
}

function draw() {
  background(51);
  for (let i = 0; i < grid.length; i++) {
    grid[i].show();
  }
  if (!generated) {
    maze.generateMaze();
  } else if (solveOK) {
    maze.solveMaze();
  }
}


let maze = {
  generateMaze : function() {
    current.visited = true;
    current.highlight();
    let next = current.checkNeighbors();
    // console.log(stack);
    if (next) {
      next.visited = true;
      //step 2
      stack.push(next);
      //step 3
      removeWalls(current, next);
      //step 4
      current = next;
    } else if (stack.length > 0) {
      current = stack.pop();
      if (stack.length == 0) {
        frameRate(3);
        // console.log("no");
        solver = new Solver(0, 0);
        generated = true;

        solveOK = true;
      }
    }
  },
  solveMaze : function() {
    // grid[0].highlight();
    noStroke();
    fill(color("white"));
    rect(grid[0].i, grid[0].j, w/3, w);
    rect(grid[0].i, grid[0].j, w, w/3);
    fill(color("black"));
    rect(grid[grid.length-1].i*w + w, grid[grid.length-1].j*w + w, -w/3, -w);
    rect(grid[grid.length-1].i*w + w, grid[grid.length-1].j*w + w, -w, -w/3);

    fill(color("red"));
    // rect(solver.i+w/10,solver.j+w/10,w-w/5,w-w/5);
    solver.draw();
    // solver.move();
  }
};


function index(i, j) {
  if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {
    return -1;
  }
  return i + j * cols;
}


function removeWalls(a, b) {
  let x = a.i - b.i;
  if (x === 1) {
    a.walls[3] = false;
    b.walls[1] = false;
  } else if (x == -1) {
    a.walls[1] = false;
    b.walls[3] = false;
  }

  let y = a.j - b.j;
  if (y === 1) {
    a.walls[0] = false;
    b.walls[2] = false;
  } else if (y === -1) {
    a.walls[2] = false;
    b.walls[0] = false;
  }

}