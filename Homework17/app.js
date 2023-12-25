let teamBarsa = {
    atack: {
        centerForward: 'Robert Lewandowski',
        rightWinger: ['Ferran Torres', 'Raphinha', 'Lamine Yamal'],
        leftWinger: ['Joao Felix'], 
    },
    midfielder: {
        centerMidfielder: ["Fermin Lopez", "Frenkie de Jong", 'Pedri', 'Gavi'],
        defensiveMidfielder: "Oriol Romeu"
    },
    defend: {
        rightDefender: ["Sergi Roberto", "Joao Cancelo"],
        leftDefender: ["Marcos Alonso", "Alejandro Balde"],
        centerDefender: ["Inigo Martinez", "Andreas Christensen", "Jules Kounde", "Ronald Araujo"],
    },
    goalkeeper: ["Mark-Andre ter Stegen", "Inaki Pena"]
}

// let div = document.querySelector('#divka')
// div.innerText = JSON.stringify(teamBarsa.atack, null,2)
// console.log(teamBarsa.atack)
// var asd = {teamBarsa: teamBarsa}
// console.log("vn", asd)
console.log( teamBarsa.midfielder.centerMidfielder)


function FutbolClub(name, team, position) {
    (this.name = name),
    (this.team = team),
    (this.position = position),
    (this.groupFunc = function () {
        console.log(`Игрок ${name}, выступает на позиции ${team}, в команде ${position}.`);
      });
  }
  
  const gamerOne = new FutbolClub("Мохамед Салах", "нападающего", "Ливерпуль");
  const gamerTwo = new FutbolClub("Джуд Беллингем", "полузащитника", "Реал Мадрид");
  const gamerThree = new FutbolClub("Рональд Араухо", "защитника", "Барселона");
  
  gamerOne.groupFunc();
  gamerTwo.groupFunc();
  gamerThree.groupFunc();