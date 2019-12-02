var employee=[
    {
    emp_name:"Nabin",
    emp_age:24,
    emp_gender:"Male",
    emp_photo:'../images/handshake-2056023_1920.jpg',
    emp_company:"Infosys",
    emp_salary:50000,
    emp_designation:"Web developer",
    emp_doj:new Date('2018/04/19'),
    emp_location:"Bangalore",
    emp_education:"B.E."
},
{
    emp_name:"Tannu",
    emp_age:23,
    emp_gender:"Female",
    emp_photo:'../images/beauty-1523478_1280.jpg',
    emp_company:"Accenture",
    emp_salary:25000,
    emp_designation:"Java developer",
    emp_doj:new Date('2018/05/29'),
    emp_location:"Bangalore",
    emp_education:"B.Tech."
},
{ 
    emp_name:"Kaushik",
    emp_age:24,
    emp_gender:"Male",
    emp_photo:'../images/urban-1658436_1280.jpg',
    emp_company:"mindtree",
    emp_salary:25000,
    emp_designation:"Web developer",
    emp_doj:new Date('2018/04/19'),
    emp_location:"Bangalore",
    emp_education:"B.E."

},
{
    emp_name:"Alex",
    emp_age:28,
    emp_gender:"Male",
    emp_photo:"../images/IMG_3220.jpg",
    emp_company:"Infotech",
    emp_salary:50000,
    emp_designation:"Fullstack developer",
    emp_doj:new Date('2018/04/19'),
    emp_location:"Bangalore",
    emp_education:"B.E."
}
];
var emp=[];
employee.forEach(empData=>
{
    emp.push(
   `
   <div class="card" >
  <img src="${empData.emp_photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${empData.emp_name}</h5>
    <span class="badge badge-success float-right">${empData.emp_salary}</span>
    <hr class="hr">
    <span class="badge badge-success float-right">${empData.emp_designation}</span>
    <li class="list-group-item"> Location: ${empData.emp_location}</li>
    <li class="list-group-item"> Age: ${empData.emp_age}</li>
    <li class="list-group-item"> Gender: ${empData.emp_gender}</li>
    <li class="list-group-item"> Date Of Joining: ${empData.emp_doj.toString()}</li>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
   `
)});
document.getElementById('template').innerHTML=emp;

