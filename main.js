// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']; // List of DNA bases
  return dnaBases[Math.floor(Math.random() * 4)]; // Randomly selects and returns one of the bases
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []; // Initialize an empty array for the new DNA strand
  for (let i = 0; i < 15; i++) { // Loop 15 times to generate a strand of 15 bases
    newStrand.push(returnRandBase()); // Add a random base to the strand
  }
  return newStrand; // Return the completed strand
};

// Database of pAequor as an object to store the unique DNA objects by `specimenNum`
const pAequorDatabase = {};

// Checks if a pAequor instance has a unique number
const checkIfUnique = function(specimenNum){
  const specimenNumString = String(specimenNum) // Converts the specimen number to a string
  // Checks if the specimen number already exists in the database
  if (Object.keys(pAequorDatabase).includes(specimenNumString)){
    throw new Error("The specimen number already exists."); // Throws an error if the number is not unique
  }
  return true; // Returns true if the number is unique
};

// Factory function to create a new pAequor instance
const pAequorFactory = (specimenNum, dna) => {
  // Ensures the specimen number is unique before creating a new instance
  checkIfUnique(specimenNum);

  // Object representing a pAequor instance
  const newPaequor = {
    _specimenNum: specimenNum, // Internal property for specimen number
    _dna: dna, // Internal property for DNA strand

    // Getter for specimenNum
    get specimenNum() {
      return this._specimenNum;
    },
    // Getter for DNA
    get dna() {
      return this._dna;
    },

    // Setter for specimenNum, updates the number after checking uniqueness
    set specimenNum(newSpecimenNum) {
      checkIfUnique(newSpecimenNum);
      this._specimenNum = newSpecimenNum;
    },
    
    // Method to mutate a single base in the DNA strand
    mutate() {
      const randBaseIndex = Math.floor(Math.random() * this._dna.length); // Randomly selects a base index
      let chosenBase = this._dna[randBaseIndex]; // Stores the current base at the index
      let newRandomBase; // Declares a variable for the new base
      do {
        newRandomBase = returnRandBase(); // Generates a new random base
      } while (newRandomBase === chosenBase); // Continues if the new base is the same as the chosen base
      this._dna[randBaseIndex] = newRandomBase; // Replaces the base in the DNA strand
      return this._dna; // Returns the mutated DNA strand
    },

    // Method to compare the DNA of two pAequor instances
    compareDNA(pAequorObj) {
      let countElementInCommon = 0; // Counter for matching bases
      // Iterates over the DNA strands to count matches
      for (let i = 0; i < this._dna.length; i++) {
        if (this._dna[i] === pAequorObj.dna[i]) {
          countElementInCommon++; // Increments counter if bases match
        }
      }
      // Calculates the percentage of DNA shared
      const SimilarityPercentage = ((countElementInCommon / this._dna.length) * 100).toFixed(0);
      // Returns a message indicating the percentage of DNA shared
      return `specimen #${this._specimenNum} and specimen #${pAequorObj.specimenNum} have ${SimilarityPercentage}% DNA in common.`;
    }
  };

  pAequorDatabase[specimenNum] = newPaequor; // Adds the new pAequor instance to the database
  return newPaequor; // Returns the new pAequor instance
};




// const test1 = pAequorFactory(1,mockUpStrand())
// console.log(test1.dna)
// console.log(test1.mutate())
// const test2 = pAequorFactory(10,mockUpStrand())
// console.log(test1.compareDNA(test2))
// test1.specimenNum = 3
// console.log(test1.specimenNum)
// console.log(test1.dna)

