/********************************************************************************
*  WEB700 – Assignment 1
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Anju Babu Student ID: __115640245____________ Date: ___16-05-2025___________
*
********************************************************************************/

let serverMethods = ["GET","GET","GET","POST","GET","POST"];

let serverRoutes = ["/","/store","/store-admin","/register","/developer","/login"];

let serverResponses = ["Home","Main Storefront","Manage Products","Registered New User","Developed by: Anju Babu: ababu35@myseneca.ca","User Logged In"];

function processRequest(method, route) {
  for (let i = 0; i < serverRoutes.length; i++) {
    if (serverMethods[i] === method && serverRoutes[i] === route) {
      return "200: " + serverResponses[i];
    }
  }
  return `404: Unable to process ${method} request for ${route}`;
}
//Manual Test Cases 

//202 cases
console.log(processRequest("GET", "/"));           
console.log(processRequest("GET", "/store"));      
console.log(processRequest("GET", "/store-admin")); 
console.log(processRequest("POST", "/register"));  
console.log(processRequest("GET", "/developer")); 
console.log(processRequest("POST", "/login"));      

// 404 cases
console.log(processRequest("POST", "/"));           
console.log(processRequest("GET", "/register"));   
console.log(processRequest("POST", "/store"));      
console.log(processRequest("PUT", "/login"));      

//Automating the test results 

// Utility function to get a random integer between 0 and max - 1
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Function to continuously test processRequest with random method
function testRequests() {

  let testMethods = [
    "GET",
    "POST"
  ];

  let testRoutes = [
    "/",
    "/store",
    "/store-admin",
    "/register",
    "/developer",
    "/login",
    "/notFound1",
    "/notFound2"
  ];

  // To test a random request
  function randomRequest() {
    
    let randMethod = testMethods[getRandomInt(testMethods.length)];
    let randRoute = testRoutes[getRandomInt(testRoutes.length)];

    
    console.log(`Request: ${randMethod} ${randRoute}`);
    console.log(processRequest(randMethod, randRoute));
    console.log('------------------------------');
  }

  // Call randomRequest every 1 second (1000 milliseconds)
  setInterval(randomRequest, 1000);
}
testRequests();


