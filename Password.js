let password1="1234";
let login1="Admin";
let prompt1;
let prompt2;
   prompt1 = prompt("Enter your login:");
      if(prompt1==login1){
         prompt2 = prompt("Enter your password:")
         if(prompt2==password1)
            alert("Welcome")
         else if(prompt2!=password1) 
            alert("Invalid password")
         else if(prompt2==null)
            alert("Login to the site has been canceled!")}
      if(prompt1 == null)
         alert("Login to the site has been canceled!")
      if(prompt1!=login1)
         alert("Invalid login")     
