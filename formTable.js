
      let food=" ";
      let firstName,lastName,address;
      let state,country,pincode;
   

      function setValue(event)
      { 
              
        event.preventDefault();
          firstName=document.getElementById("firstName").value;
          lastName=document.getElementById("lastName").value;
          address=document.getElementById("address").value;
          state=document.getElementById("state").value;
          country=document.getElementById("country").value;
          pincode=document.getElementById("pincode").value;
         
          document.getElementById("firstName").value="";
          document.getElementById("lastName").value="";
          document.getElementById("address").value="";
          document.getElementById("state").value="";
          document.getElementById("country").value="";
          document.getElementById("pincode").value="";
          document.getElementById("briyani").checked=false;
          document.getElementById("pizza").checked=false;
          document.getElementById("burger").checked=false;
          document.getElementById("shawarma").checked=false;
          document.getElementById("kebab").checked=false;
          

          console.log(firstName,lastName,address,state,country,pincode)
         table=document.querySelector(".tableContainer").style.display="block"
          x=document.getElementById("tableValue")
        x.innerHTML =`<td>${firstName}</td>
        <td>${lastName}</td>
        <td>${address}</td>
        <td>${state}</td>
        <td>${country}</td>
        <td>${pincode}</td>
        <td>${food}</td>`
        
      }
      function check1(n)
      {
           b=document.getElementById(n)
      if(b.checked==true)
          {if(!(food.split(" ").includes(event.target.value)))
              {
                  food += event.target.value+" "
                }
      }
      else{
        food=food.replace(event.target.value,"")
      }
      console.log(food)
    }
   
