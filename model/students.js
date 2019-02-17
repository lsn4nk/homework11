class Students {
    constructor() {
       this._defaultData = ['Ivan', 'Oleg'];
       this._DB = this._createDB();
   }

   _createDB() {
       return this._defaultData || [];
   }

   addStudent(student) {

    if (this._DB.includes(student)) {
        alert ('Student is in list');
    } else {
        this._DB.push(student);
        console.log(this._DB);
    }
    
       
   }

   removeStudent(student) {
       try{
        if (this._DB.includes(student)) {
            this._DB.splice(this._DB.indexOf(student), 1);
            return 'student has been removed'
        } else {
            throw new Error('Check student name');
        }
       } catch(e) { console.log(e); }
   }

   get DB() {
       return this._DB;
   }
}
