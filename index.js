const model = new Students();
const view = new StudentsView('#main-container');
const controller = new StudentsController(model, view);

controller.setViewContext('#main-container');
controller.showStudents();