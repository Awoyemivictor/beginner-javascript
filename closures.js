function game() {
    const playerName = "Victor";
    let score = 0;
  
    return function win() {
      score++;
      
      return `${playerName} soccer player score is now ${score}`;
    }
  }
  
  const playerGame = game();
  
  for(i = 0; i < 5; i++) {
    console.log(playerGame());
  }