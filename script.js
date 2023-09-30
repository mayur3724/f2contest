let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper(){
    data.forEach(
        (person)=>{
            if(person.profession=="developer"){
                console.log(person);
            }
        }
    )
    }
  
  // 2. Add Data
  function addData() {
    let newName=prompt("add newname");
    let newAge=parseInt(prompt("add newAge"));
    let newProfession=prompt("add newProfession");
    data.push(
        {
            name:newName,
            age:newAge,
            profession:newProfession
        }
    )
    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    data=data.filter((person)=>person.profession!="admin");
        console.log(data);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let dummyArray=[
        { name:"mayur",age:23,profession:"enginer"},
        { name:"bjbs",age:67,profession:"udbd"}
    ]
    let comArray=data.concat(dummyArray);
    console.log(comArray);
  }
  
  // 5. Average Age
  function averageAge() {
    let avgAge=0;
    data.forEach((person)=>{
        avgAge+=person.age;
    })
    console.log(avgAge/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let status=false;
    data.forEach(person=>{
            if(person.age>25){
                status=true;
            }
        }
    )
    console.log(status);
        }
    // let count=data.some(person=>person.age>25);
    // console.log(some?"yes,a person above 25 exist":"No,person above 25 does not exist");
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let professionArr=[];
    data.forEach(person=>{
        if(!professionArr.includes(person.profession)){
            professionArr.push(person.profession);
        }
    })
    console.log(professionArr);
  }
  
  // 8. Sort by Age
  function sortByAge() {}
  data.sort((a,b)=>b.age-a.age);
  console.log(data);
  
  // 9. Update Profession
  function updateJohnsProfession() {
    data.forEach(person=>{
        if(person.name=="john"){
            person.profession="manager";
        }
    })
    console.log(data);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devcount=devcount.filter(person=>person.profession=="developer");
    let admincount=admincount.filter(person=>person.profession=="admin");
    console.log('developer:${devcount.length},admin:${admincount.length}')
  }
  