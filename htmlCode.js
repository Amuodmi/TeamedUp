
function getManager(members){
      
    //this is going to generate an HTML string
  return `
  <div id= "name" class="col"><u>Managers</u><br>
  ${members.name}<br>
  ${members.id}<br>
  <b>Email:</b><a href="mailto:${members.email}">${members.email}</a><br>
  ${members.officeNumber}
  </div>
  `;
 };

 function getEngineer(members){
  return `
  <div id= "name" class="col"><u>Engineers</u><br>
  ${members.name}<br>
  ${members.id}<br>
  <b>Email:</b><a href="mailto:${members.email}">${members.email}</a><br>
  <b>Github:</b><a href="https://github.com/${members.github}" target="_blank">${members.github}</a>
  </div>
  
  `;
 }

 function getIntern(members){
  return `
  <div id= "name" class="col"><u>Interns</u><br>
  ${members.name}<br>
  ${members.id}<br>
  <b>Email:</b><a href="mailto:${members.email}">${members.email}</a><br>
  <b>School:</b> ${members.school}
  </div>
  `;
 }

 let cardArray = []
 const htmlCode = members => {
     
     for (i = 0; i < members.length; i++) {
         const employee = members[i]
         let position = employee.getPosition()
 
         if (position === "Manager") {
             let managerCard = getManager(employee);
             cardArray.push(managerCard)
         } else if (position === "Engineer") {
             let engineerCard = getEngineer(employee);
             cardArray.push(engineerCard)
         } else {
             let internCard = getIntern(employee);
             cardArray.push(internCard)
         }
     }

     let cardString = cardArray.join('')
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="./src/style.css">
    <title>Teamed Up</title>
</head>
<body>
<div class="container text-center">
<div class="row">
<div class="col">
<h1>Teamed Up</h1>
</div>
</div>
<div class="row">
${cardString}
</div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
<script src="../index.js"></script>    
</body>
</html>
`;

};

module.exports = htmlCode