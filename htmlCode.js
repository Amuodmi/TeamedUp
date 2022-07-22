const Employee = require('./lib/employee');
const Manager = require('./lib/manager');

      function getManager(members){
      //this is going to generate an HTML string
      return `
      <div class="col"><u>Managers</u><br>
      ${members.managerName}
      ${members.managerID}
      Email: <a href="mailto:${members.managerEmail}"></a>
      ${members.managerOffice}
      </div>
      `;
     };

     function getEngineer(members){
      return `
      <div class="col"><u>Engineers</u><br>
      ${members.engineerName}
      ${members.engineerID}
      Email: <a href="mailto:${members.engineerEmail}"></a>
      Github: <a href="https://www.github.com/${members.engineerGithub}" target="_blank"></a>
      </div>
      
      `;
     }

     function getIntern(members){
      return `
      <div class="col"><u>Interns</u><br>
      ${members.interName}
      ${members.internID}
      Email: <a href="mailto:${members.internEmail}"></a>
      School: ${members.internSchool}
      </div>
      `;
     }
  

    module.exports = htmlCode = members => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
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

${getManager(members)}
${getEngineer(members)}
${getIntern(members)}



</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
<script src="../index.js"></script>    
</body>
</html>
    `;
  
    };