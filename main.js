// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Database of pAequor as an array to store the unique DNA objects number `specimenNum`
const pAequorDatabase = {};

// Check if pAequor instence is have a uniqe number
const checkIfUniqe = function(specimenNum){
  const specimenNumString = String(specimenNum)
  if (Object.keys(pAequorDatabase).includes(specimenNumString)){
    throw new Error("The specimen number already exists")
  }
  return false;
}

const pAequorFactory = (specimenNum , dna)=>{
  // Check if the specimen number already exists
  checkIfUniqe(specimenNum)
  

  const newPaequor =  {
    _specimenNum: specimenNum,
    _dna: dna,
    // Getters
    get specimenNum(){
      return this._specimenNum;
    },
    get dna(){
      return this._dna;
    },

    // Setters
    set specimenNum(newSpecimenNum){
      if (checkIfUniqe(newSpecimenNum)){
        console.log("The specimen number already exists")
    }else {
      this._specimenNum = toString(newSpecimenNum);
      console.log("Done")
    }
    
  },
    
    // Mutate the DNA
    mutate(){
      // Get a random Base Index
      const randBaseIndex = Math.floor(Math.random() * this._dna.length) ;
      // Get the chosen Base
      let chosenBase = this._dna[randBaseIndex];
      // Replace the first dna base that we randomly selected with different base.

      // We will loop throw the dna array then check if we find the match of same base
      for (i of this._dna){
        if (i === chosenBase){
          // If a match is found, we will initialize a new variable without assigning any value to it.
          let newRandomBase;

          // We will employ a do..while loop because our goal is to substitute the base we identified in the DNA with a different base.
         do {
          newRandomBase = returnRandBase()

         }while(newRandomBase === i)
          this._dna[this._dna.indexOf(i)] = newRandomBase
          break
        }
      }
      return this._dna
      // Replace the randBase with 
    }
  }

  pAequorDatabase[specimenNum] = newPaequor;
  return newPaequor
}



const dna = mockUpStrand()
const test = pAequorFactory(1 , dna)
const test2 = pAequorFactory(2, dna)

console.log(dna)
console.log(test.mutate())
// test2.specimenNum = '3'
// Next check mutate that will change one base to another base that are different

