interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

function sumMajorCredits(subject1: number, subject2: number): MajorCredits {
  return { credits: subject1 + subject2, brand: 'MajorCredits' };
}

function sumMinorCredits(subject1: number, subject2: number): MinorCredits {
  return { credits: subject1 + subject2, brand: 'MinorCredits' };
}

/* Testing Functions */
console.log(sumMajorCredits(10, 20));
console.log(sumMinorCredits(2, 3));