cellSlider = document.getElementById("cellSlider");
gridSlider = document.getElementById("gridSlider");
displaySize = document.getElementById("displaySize");

cellSlider.value = w;
gridSlider.value = gridW;

handlers = {
  resetMaze : function () {
    location.reload();
    return false;
  },
  resetSolver : function () {
    solvers = [];
    solvedPath = [];
    solvers.push(new Solver(0, 0));
  },
  changeSpeed : function(f) {
    frameRate(f);
  },
  getLocalItems : function() {
    w = localStorage.getItem('cellWidth');
    gridW = localStorage.getItem('gridW');
    // console.log(w, gridW);
    if (w === null) {
      // console.log("no w");
      w = 250;
      localStorage.setItem('cellWidth', w);
    }
    if (gridW === null) {
      // console.log("no ghrid");
      gridW = 1000;
      localStorage.setItem('gridW', gridW);
    }
    return [w, gridW];
  },
  changeSize : function (cellWidth, gridWidth) {
    localStorage.setItem('cellWidth', cellWidth);
    localStorage.setItem('gridW', gridWidth);
    this.resetMaze();
  },
  displaySliders : function() {
    displaySize.innerHTML = `cell width: ${cellSlider.value}  grid width: ${gridSlider.value}`;
  }

};
