
// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.getElementById('addForm');
let employeeTable = document.getElementById('employees');
let employeeCount = document.getElementById('empCount');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    let $ = (id) => document.getElementById(id)

    // GET THE VALUES FROM THE TEXT BOXES
    let id = $('id').value;
    let name = $('name').value;
    let extension = $('extension').value;
    let email = $('email').value;
    let department = $('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = employeeTable.insertRow();

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cellId = newRow.insertCell(0);
    let cellName = newRow.insertCell(1);
    let cellExtension = newRow.insertCell(2);
    let cellEmail = newRow.insertCell(3);
    let cellDepartment = newRow.insertCell(4);
    let cellDelete = newRow.insertCell(5);


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cellId.appendChild(document.createTextNode(id));
    cellName.appendChild(document.createTextNode(name));
    cellExtension.appendChild(document.createTextNode(extension));
    cellEmail.appendChild(document.createTextNode(email));
    cellDepartment.appendChild(document.createTextNode(department));


    // CREATE THE DELETE BUTTON
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    cellDelete.appendChild(deleteButton);

    // DELETE EMPLOYEE
    // Add an event listener to the delete button to remove the row
    deleteButton.addEventListener('click', (e) => {
        if (confirm('Are you sure you want to delete this task?')) {
                employeeTable.deleteRow(newRow.rowIndex);
                count--; // Decrement the number of employees when deleting
                updateEmployeeCount();
                // SET FOCUS BACK TO THE ID TEXT BOX
                document.getElementById('id').focus();
            }
    });

    // RESET THE FORM
    form.reset();

    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    count++;
    updateEmployeeCount();
});

// Function to update the employee count display
function updateEmployeeCount() {
    employeeCount.textContent = ` (${count})`;
}

