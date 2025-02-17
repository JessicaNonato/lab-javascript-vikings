// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(theDamage){
    this.health -= theDamage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
  super(health, strength);
  this.name = name;
  }
  receiveDamage(theDamage){
    this.health -= theDamage;
    if (this.health > 0) {return `${this.name} has received ${theDamage} points of damage`} else {return `${this.name} has died in act of combat`}
  }
  battleCry(){
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier{
  receiveDamage(theDamage){
    this.health -= theDamage;
    if (this.health > 0) {return `A Saxon has received ${theDamage} points of damage`} else {return "A Saxon has died in combat"}
  }
}

// War
class War {
  constructor (){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking){
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon){
    this.saxonArmy.push(saxon);
  }
  vikingAttack(){
    let randomViking = this.vikingArmy[Math.floor(this.vikingArmy.length*Math.random())];
    let randomSaxonI = Math.floor(this.saxonArmy.length*Math.random());
    let randomSaxon = this.saxonArmy[randomSaxonI];
    let resultSaxon = randomSaxon.receiveDamage(randomViking.strength);
    if (randomSaxon.health <= 0){
      this.saxonArmy.splice(randomSaxonI,1);
      return 'A Saxon has died in combat';
    }
    return resultSaxon;
  }

  saxonAttack(){
    let randomSaxon = this.saxonArmy[Math.floor(this.saxonArmy.length*Math.random())];
    let randomVikingI = Math.floor(this.vikingArmy.length*Math.random());
    let randomViking = this.vikingArmy[randomVikingI];

    let resultViking = randomViking.receiveDamage(randomSaxon.strength);
    if (randomViking.health <= 0){
      this.vikingArmy.splice(randomVikingI,1);
      return 'A Viking has died in combat';
    }
    return resultViking;
  }

  showStatus(){
    if (this.saxonArmy.length === 0){
      return 'Vikings have won the war of the century!';
    }
    if (this.vikingArmy.length === 0){
      return 'Saxons have fought for their lives and survived another day...'
    }
    if (this.vikingArmy.length > 0 && this.saxonArmy.length > 0){
      return 'Vikings and Saxons are still in the thick of battle.'
    }
  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
