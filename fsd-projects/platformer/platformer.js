$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(600,425,200,20,"pink"); 
    createPlatform(500,630,200,20,"pink");
    createPlatform(100,300,200,20,"pink");
    createPlatform(1000,300,200,20, "pink");
    createPlatform(850,600,200,20, "pink");
    createPlatform(475,230,200,20,"pink");




    // TODO 3 - Create Collectables
    createCollectable("diamond", 550,560,0.5,0.7);
    createCollectable("kennedi", 700,100, 0.3,0.5);
    createCollectable("max", 250,200,0.5,0.7);
    createCollectable("kennedi",900,500,0.5,0.7)



    
    // TODO 4 - Create Cannons
    createCannon ("top",200,2000)
    createCannon ("bottom", 600,400)
    createCannon ("left",200,1200)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
