function calculateAge() {
   let dob = document.getElementById("dob").value;
   if (dob === "") {
       document.getElementById("result").innerHTML = "Please enter your date of birth!";
       return;
   }
   let dobDate = new Date(dob);
   let today = new Date();
   let age = today.getFullYear() - dobDate.getFullYear();
   let monthDiff = today.getMonth() - dobDate.getMonth();
   let dayDiff = today.getDate() - dobDate.getDate();
   if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
       age--;
   }
   let category = "";
   if (age < 12) {
       category = "You are a Child 👶";
   } else if (age >= 12 && age < 18) {
       category = "You are a Teenager 🧑";
   } else if (age >= 18 && age < 60) {
       category = "You are an Adult 👨‍🦳";
   } else {
       category = "You are a Senior Citizen 👴";
   }
   document.getElementById("result").innerHTML = `You are ${age} years old. <br> ${category}`;
}
