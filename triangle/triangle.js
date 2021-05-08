//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// export 

export class Triangle {
  constructor(s1, s2, s3) {
    this.s1 = s1;
    this.s2 = s2;
    this.s3 = s3
  }

  get isEquilateral() {
    if (this.s1 <=0 || this.s2 <=0 || this.s3 <=0) {
      return false
    }

    if (this.s1 === this.s2 && this.s2 === this.s3) {
      return true;
    } else {
      return false;
    }
  }

  get isIsosceles() {
    if (this.s1 + this.s2 < this.s3 || this.s1 + this.s3 < this.s2 || this.s3 + this.s2 < this.s1) {
      return false;
    }

    if (this.s1 === this.s2 || this.s2 === this.s3 || this.s1 === this.s3) {
      return true;
    } else {
      return false;
    }
  }

  get isScalene() {
    if (this.s1 + this.s2 < this.s3 || this.s1 + this.s3 < this.s2 || this.s3 + this.s2 < this.s1) {
      return false;
    }
    
    if (this.s1 === this.s2 || this.s2 === this.s3 || this.s1 === this.s3) {
      return false;
    } else {
      return true;
    }
  }
}
