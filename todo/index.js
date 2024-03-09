document.querySelector("#btn").addEventListener("click", (e) => {
            document.querySelector("#h1ele").classList.toggle("check");
        })

        function changeColor(color){
            document.querySelector('#h1ele').setAttribute("style", `color: ${color}`)
        }

        let list = [];

        function addTodo() {
            let inpEle = document.querySelector("#todoInput")
            list.push(inpEle.value);
            displayTod();
            inpEle.value = "";
        }

        function displayTod() {
            let ulEle = document.querySelector("#todoList")
            let liEle = document.createElement("li");
            list.map((todo, ind) => {
                liEle.setAttribute("id", `todo${ind}`)
                liEle.innerHTML = `<h1>${todo}</h1> 
                <button onclick="removeTodo(${ind})"> Remove </button>
                `;
                ulEle.appendChild(liEle);
            })
        }

        function removeTodo(index) {
            list.pop(index);
            document.getElementById(`todo${index}`).remove();
        }
