class StudentsView {
    constructor(context) {
       this.container = document.querySelector(context);
   }

   createList(students) {
       console.log(students);
       const listTitle = document.createElement('h3');
       listTitle.textContent = 'Students';

       this.list = document.createElement('ol');
       students.forEach((student) => {
           const li = document.createElement('li');
           li.textContent = student;
           this.list.appendChild(li);
       });

       this.container.appendChild(listTitle);
       this.container.appendChild(this.list);
   }

   updateList(students) {
       console.log(students);
      
       while (this.list.firstChild) {
           this.list.removeChild(this.list.firstChild);
       }

       students.forEach((student) => {
           const li = document.createElement('li');
           li.textContent = student;
           this.list.appendChild(li);
       });
   }

   createForm(context) {
       const container = document.createElement('div');
       this.input = document.createElement('input');
       this.addButton = document.createElement('button');

       container.style.border = '1px solid black';
       container.style.borderRadius = '5px';
       container.style.display = 'inline-block';

       this.input.style.width = '150px';
       this.input.style.height = '40px';
       this.input.style.margin = '5px';

       this.addButton.textContent = 'ADD STUDENT';
       this.addButton.style.height = '40px';
       this.addButton.style.margin = '5px';

       container.appendChild(this.input);
       container.appendChild(this.addButton);
       (document.querySelector(context) || this.container).appendChild(container);
   }
}
