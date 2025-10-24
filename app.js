// Wait for the HTML document to be fully loaded before running the script


    // Get references to the form and the table body from the HTML
    const studentForm = document.getElementById('studentForm');
    
    

    // Add a 'submit' event listener to the form
    studentForm.addEventListener('submit', function(event){
        // Prevent the default browser action for form submission, which is to reload the page
        event.preventDefault();


        addData();
        
        studentForm.reset();
    });
        
    function addData(){
        var name = document.getElementById("name").value;
        var id = document.getElementById('id').value;
        var email = document.getElementById('email').value;
        var contact = document.getElementById('contact').value;
        var course = document.getElementById('course').value;

        var currentdate = new Date();
        var timestamp = currentdate.getTime();
        var data = `${name}#${id}#${email}#${contact}#${course}#`;

        localStorage.setItem("data_"+timestamp , data);

        displayData();
    }
    
    function displayData(){
        var tableBody = document.getElementById('studentTableBody');
        tableBody.innerHTML = "";

        for(var i=0;i<localStorage.length;i++){
            var key = localStorage.key(i);
            if(key && key.startsWith("data_")){
                var value = localStorage.getItem(key);
                var dataPart = value.split("#");

                var newRow = document.createElement('tr');
                newRow.innerHTML=`
                <td>${dataPart[0]}</td>
                <td>${dataPart[1]}</td>
                <td>${dataPart[2]}</td>
                <td>${dataPart[3]}</td>
                <td>${dataPart[4]}</td>
                <td><button onclick="editData('${key}')" class="edit-btn">Edit</button></td>
                <td><button onclick="removeData('${key}')" class="delete-btn">Delete</button></td>
                `;
                tableBody.appendChild(newRow);
            }
        } 
    }
    function removeData(key){
        localStorage.removeItem(key);
        displayData();
    }

    function editData(key) {
    // 1. Get the data string from storage using its key
    var value = localStorage.getItem(key);
    // 2. Split the string into its parts
    var dataPart = value.split("#");

    // 3. Put each part back into the form fields
    document.getElementById('name').value = dataPart[0];
    document.getElementById('id').value = dataPart[1];
    document.getElementById('email').value = dataPart[2];
    document.getElementById('contact').value = dataPart[3];
    document.getElementById('course').value = dataPart[4];

    // 4. Call removeData to delete the old entry from storage
    //    and refresh the table.
    removeData(key);
}

    window.onload = displayData;



