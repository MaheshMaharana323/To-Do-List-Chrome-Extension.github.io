/* let FormTasks = document.querySelector('#task-form');
        let FormTaskElement = document.querySelector('#input-box');
        let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
        
        function displayTasks() 
        {
            let addTask='';
            taskList.forEach((task,index)=> 
                {
                    let tempTask=`<li>
                    <span>${task}</span>
                    <div><button class="float-end icon" onclick="deleteTask(${index})">
                    <i class="bi bi-trash"></i>
                    </button>
                    <button class="float-end me-2 icon">
                    <i class="bi bi-pen"></i>
                    </button><div/>
                    </li>`;
                    addTask += tempTask;
                });
                document.getElementById('item-list').innerHTML=addTask;
            }
            displayTasks();
            document.getElementById('item-list').addEventListener("click",function(e){
                if(e.target.tagName==="LI"){
                    e.target.classList.toggle("checked");
                }
            },false);
            
            function deleteTask(index) {
                taskList.splice(index , 1);  
                localStorage.setItem('tasks', JSON.stringify(taskList)); 
                displayTasks(); 
            }
            FormTasks.addEventListener('submit', function (e) {
                
                let task = FormTaskElement.value.trim();
                taskList.unshift(task);
                localStorage.setItem('tasks', JSON.stringify(taskList));
                FormTaskElement.value = '';
                displayTasks();
            });

            
            
            */




            let FormTasks = document.querySelector('#task-form');
            let FormTaskElement = document.querySelector('#input-box');
            let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
            
            // Display tasks
            function displayTasks() {
                let addTask = '';
                taskList.forEach((task, index) => {
                    let tempTask = `
                        <li>
                            <span>${task}</span>
                            <div>
                                <button class="float-end icon delete-btn" data-index="${index}">
                                    <i class="bi bi-trash"></i>
                                </button>
                                <button class="float-end me-2 icon edit-btn" data-index="${index}">
                                    <i class="bi bi-pen"></i>
                                </button>
                            </div>
                        </li>`;
                    addTask += tempTask;
                });
                document.getElementById('item-list').innerHTML = addTask;
            
                // Attach event listeners for delete buttons
                document.querySelectorAll('.delete-btn').forEach(button => {
                    button.addEventListener('click', function() {
                        deleteTask(this.dataset.index);
                    });
                });
            }
            
            displayTasks();
            
            // Toggle check on list item click
            document.getElementById('item-list').addEventListener("click", function(e) {
                if (e.target.tagName === "LI") {
                    e.target.classList.toggle("checked");
                }
            }, false);
            
            // Delete task
            function deleteTask(index) {
                taskList.splice(index, 1);
                localStorage.setItem('tasks', JSON.stringify(taskList));
                displayTasks();
            }
            
            // Add task
            FormTasks.addEventListener('submit', function (e) {
                e.preventDefault();  // Prevent form submission
                let task = FormTaskElement.value.trim();
                if (task !== "") {
                    taskList.unshift(task);
                    localStorage.setItem('tasks', JSON.stringify(taskList));
                    FormTaskElement.value = '';
                    displayTasks();
                }
            });
            









