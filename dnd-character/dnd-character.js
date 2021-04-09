//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const abilityModifier = (cont) => {

  if (cont < 3) {
    throw new Error("Ability scores must be at least 3");
  }
  if (cont > 18) {
    throw new Error("Ability scores can be at most 18");
  }
  const modifier = Math.floor((cont - 10) /2);
  return modifier
};

export class Character {
  static rollAbility() {
    const rolls = []
    for (let i = 0 ; i < 4; i++) {
      rolls.push(Math.floor(Math.random() * 6) + 1);
    }
    rolls.sort(function(a, b){return a - b});
    rolls.shift();
    const score = rolls.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue
    }, 0);
    return score;
  }

  strength = this.constructor.rollAbility();
  dexterity = this.constructor.rollAbility();
  constitution = this.constructor.rollAbility();
  intelligence = this.constructor.rollAbility();
  wisdom = this.constructor.rollAbility();
  charisma = this.constructor.rollAbility();

  get strength() {
    return this.strength;
  }

  get dexterity() {
    return this.dexterity;
  }

  get constitution() {
    return this.constitution;
  }

  get intelligence() {
    return this.intelligence;
  }

  get wisdom() {
    return this.wisdom;
  }

  get charisma() {
    return this.charisma;
  }

  get hitpoints() {
    return 10 + abilityModifier(this.constitution);
  }
}

const Drizzt = new Character();
console.log(Drizzt.strength);
