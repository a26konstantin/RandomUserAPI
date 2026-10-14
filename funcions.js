

document.getElementById("novaBroma").addEventListener("click",function(){


    fetch('https://api.chucknorris.io/jokes/random')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("broma").innerHTML=data.value
  });

  
})

document.getElementById("newUser").addEventListener("click",function(){



        fetch('https://randomuser.me/api/?results=1')
  .then(response => response.json())
  .then(data => {console.log(data)
    //  document.getElementById("broma").innerHTML=data.value
    document.getElementById("userName").innerHTML=data.results[0].name.first 
    document.getElementById("userSurname").innerHTML=data.results[0].name.last
    document.getElementById("userAge").innerHTML=data.results[0].dob.age
    document.getElementById("userImg").src=data.results[0].picture.large
  });
})

