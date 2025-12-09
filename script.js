let employees = [];
let id = 1;

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message");

  if (!name || !profession || !age) {
    message.textContent =
      "Error : Please Make sure All the fields are filled before adding in an employee !";
    message.className = "message error";
    return;
  }

  const employee = {
    id: id++,
    name,
    profession,
    age
  };

  employees.push(employee);

  message.textContent = "Success : Employee Added!";
  message.className = "message success";

  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";

  renderEmployees();
}

function renderEmployees() {
  const list = document.getElementById("employeeList");
  const emptyText = document.getElementById("emptyText");

  list.innerHTML = "";

  if (employees.length === 0) {
    emptyText.style.display = "block";
    return;
  }

  emptyText.style.display = "none";

  employees.forEach(emp => {
    const card = document.createElement("div");
    card.className = "employee-card";

    card.innerHTML = `
      <span>${emp.name}</span>
      <span>${emp.profession}</span>
      <span>${emp.age}</span>
      <button class="delete-btn" onclick="deleteEmployee(${emp.id})">
        Delete User
      </button>
    `;

    list.appendChild(card);
  });
}

function deleteEmployee(empId) {
  employees = employees.filter(emp => emp.id !== empId);
  renderEmployees();
}
