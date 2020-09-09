//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const proteinTranslations = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export const translate = (rna) => {
  var proteinArray = [];

  if (rna === undefined) {
    return proteinArray;
  }

  for (let i = 0; i < rna.length; i += 3) {
    let codon = rna.substring(i, i + 3);

    if (proteinTranslations.hasOwnProperty(codon) === false) {
      throw new Error("Invalid codon");
    }

    let protein = proteinTranslations[codon];
    if (protein === "STOP") {
      return proteinArray;
    } else {
      proteinArray.push(protein);
    }
  }
  return proteinArray;
};
