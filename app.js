// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Get references to the form and the table body from the HTML
    const studentForm = document.getElementById('studentForm');
    const tableBody = document.getElementById('studentTableBody');

    // Add a 'submit' event listener to the form
    studentForm.addEventListener('submit', (event) => {
        
        // Prevent the default browser action for form submission, which is to reload the page
        event.preventDefault();

        // 1. Get the values from each input field in the form
        const name = document.getElementById('name').value;
        const id = document.getElementById('id').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const course = document.getElementById('course').value;

        // 2. Create a new table row element (<tr>)
        const newRow = document.createElement('tr');

        // 3. Create and append a table data cell (<td>) for each piece of information

        newRow.innerHTML = `
            <td>${name}</td>
            <td>${id}</td>
            <td>${email}</td>
            <td>${contact}</td>
            <td>${course}</td>
            <td><button class="edit-btn">Edit</button></td>
            <td><button class="delete-btn">Delete</button></td>
        `;
        // 4. Append the fully constructed new row to the table body
        tableBody.appendChild(newRow);

        // 5. Reset the form fields to be ready for the next entry
        studentForm.reset();
    });

    tableBody.addEventListener('click', (event) => {
        if(event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            row.remove();
        }

        if(event.target.classList.contains('edit-btn')){
            const row = event.target.closest('tr');
            document.getElementById('name').value = row.children[0].textContent;
            document.getElementById('id').value = row.children[1].textContent;
            document.getElementById('email').value = row.children[2].textContent;
            document.getElementById('contact').value = row.children[3].textContent;
            document.getElementById('course').value = row.children[4].textContent;
            row.remove();
        }
    })

       
});