//
// This is only a SKELETON file for the 'D&D Character' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Your character's initial hitpoints are 10 + your character's constitution modifier.
// You find your character's constitution modifier by subtracting 10 from your character's constitution, divide by 2 and round down.

export const abilityModifier = (constScore) => {
  if (constScore < 3) {
    throw Error("Ability scores must be at least 3");
  }

  if (constScore > 18) {
    throw Error("Ability scores can be at most 18");
  }

  return Math.floor((constScore - 10) / 2);
};

export class Character {
  static rollAbility() {
    const statsArr = [];
    for (let i = 0; i < 4; i++) {
      statsArr.push(Math.floor(Math.random() * 6) + 1);
    }
    statsArr.sort();
    statsArr.reverse();
    statsArr.pop();

    var sum = statsArr.reduce(function (a, b) {
      return a + b;
    }, 0);

    return sum;
  }

  get strength() {
    const strength = this.rollAbility();
    return strength;
  }

  get dexterity() {
    throw new Error("Remove this statement and implement this function");
  }

  get constitution() {
    throw new Error("Remove this statement and implement this function");
  }

  get intelligence() {
    throw new Error("Remove this statement and implement this function");
  }

  get wisdom() {
    throw new Error("Remove this statement and implement this function");
  }

  get charisma() {
    throw new Error("Remove this statement and implement this function");
  }

  get hitpoints() {
    throw new Error("Remove this statement and implement this function");
  }
}
