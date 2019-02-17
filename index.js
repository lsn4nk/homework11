const model = new Students();
const view = new StudentsView('#main-container');
const controller = new StudentsController(model, view);

controller.showStudents();
controller.setViewContext('#main-container');
