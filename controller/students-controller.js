class StudentsController {

    constructor(model, view) {
        this.model = model;
        this.view = view;
    }
 
    setViewContext(context) {
        this.view.createForm(context);
        this._addFormListeners();
    }
 
    _addFormListeners() {
        this.view.addButton.addEventListener('click', () => {
            this.model.addStudent(this.view.input.value);
            this.updateStudents();
        });
    }
 
    showStudents() {
        console.log(this.model.DB)
        this.view.createList(this.model.DB);
    }
   
    updateStudents() {
        this.view.updateList(this.model.DB);
    }
 }
 
 