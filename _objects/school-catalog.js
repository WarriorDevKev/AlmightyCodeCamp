class School {

    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    // getters return value saved to property
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    // setter
    set numberOfStudents(value) {
      if(typeof numberOfStudents === 'number') {
        this._numberOfStudents = value;
      } else console.log(`Invalid input: ${numberOfStudents} must be set to a number`);
    }
    // create new method
    quickFacts() {
      console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }
    // create static method
    static pickSubstituteTeacher(substituteTeachers) {
      const ranNum = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[ranNum];
    }
  } // ***** SCHOOL CLASS END *****
  
  // ***** PrimarySchool Class extends School *****
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super (name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this.pickupPolicy;
    }
  } // ***** PRIMARYSCHOOL CLASS END *****
  
  // ***** HighSchool Class extends School *****
  class HighSchool extends School {
    constructor (name, numberOfStudents, sportsTeams) {
      super (name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
   // PrimarySchool instance with properties
    const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
   // Call quickFacts on PRIMARYSCHOOL instance
    lorraineHansbury.quickFacts();
   
   // pickSubstituteTeacher on SCHOOL and pass args
    const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
   // HighSchool instance with properties
   const alSmith = new HighSchool('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
   console.log(alSmith.sportsTeams);
  
  