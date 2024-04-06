let registerForm = document.getElementById("registerForm");
let apiUrl =  "http://localhost:3000";
if(location.href.indexOf("netlify") != -1){
    apiUrl = "https://netflix-cp.herokuapp.com";
}
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let payload = {

        name: document.getElementById('nameInput').value,
        email: document.getElementById('exampleInputEmail1').value,
        password:document.getElementById('exampleInputPassword1').value
    }
    fetch(apiUrl + "/register", {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
  })
  .then(response => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error("Failed to register. Please try again.");
      }
  })
  .then(data => {
      location.href = `/login.html?existingEmail=${payload.email}`;
  })
  .catch(error => {
      console.log("Error during registration:", error);
      location.href = `/login.html?existingEmail=${payload.email}&registered=true`;
  });

})