let username = document.getElementById("username");
let password = document.getElementById("password");

//Login
function validateForm(callback)
{
    console.log(username.value);
    if(username.value != "" || password.value != "")
    {
        callback();
    }
    else
    {
        alert("please enter username and password");
    }

}
function  callback()
{
    console.log(username.value);
    if (username.value == "admin" &&  password.value == "12345")
    {   
            
        alert(window.location.href ="todo.html");
    }
    else
    {
           alert("Invalid Credential")
           username.value="";
           password.value="";
    }
}


//To do List
fetch("https://jsonplaceholder.typicode.com/todos").then(function(data){
    return data.json();
}).then(function(objectData)
{
    console.log(objectData);
    let tableData= "";
    objectData.map(function(datas){
        tableData += `<tr>
       <td> ${datas.id} </td>
        <td>${datas.title} </td>
        
        <td>${checkData(datas.completed)}</td>      
      </tr>`     
    });
    document.getElementById("tbody").innerHTML = tableData;
}).catch(error)
{
    console.log(error);
}

function checkData(completed)
{    
    if(completed === Boolean(true))
    {
        return `<input type ="checkbox" checked disabled="disabled" > `
    }    
    else
    {
        return `<input type="checkbox" name="check" onclick= "return myFunction(callback)" >`;
    }
}

//Checkbox 
function myFunction(callback)
{
    let check = document.getElementsByName("check");
    let promise = new Promise(function(resolve, reject)
    {
        resolve(check);
        console.log(Boolean(check.checked))
    }).then(function(check){
        let newCheck=0;
        for(let i=0; i<check.length; i++)
        {       
            if(check[i].checked==true)
            {
             newCheck +=1;
            }
        }
        if(newCheck==5)
        {
            alert("Congrats. 5 Tasks have been Successfully Completed");
        }       
    })
}
