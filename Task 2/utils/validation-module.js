const validator = require("validator")
const colors = require("colors")
const prompt = require ("prompt-sync")({sigint: true})
const read = require('read')

/**this fucntion validate that the email is correct and has the domain "yahoo"  or Gmail*/
function validEmail()
{
    while(true)
    {

        let email = prompt("Enter your".yellow + " E-mail ".blue+"? : ".yellow);
        const reg = new RegExp('^[A-Za-z0-9._%+-]+@(yahoo|gmail)\.com$');
        const flag = email.match(reg)
        if(flag != null)
        {
            return email;
        }
        console.log("Invalid e-mail!".red.bold)
    }
}
function validName()
{
    while(true)
    {

        let name = prompt("Enter your".yellow + " Name ".blue+"? : ".yellow);
        const reg = new RegExp('^[A-Za-z0-9._]{6 ,}$');
        const flag = name.match(reg)
        if(flag != null)
        {
            return name;
        }
        console.log("Invalid Name!".red.bold)
        
    }
}
function validGender()
{

        while(true)
        {
            let gender = prompt("Enter your".yellow + " Gender ".blue+"? (m|f): ".yellow);
            gender = gender.toLowerCase();
            if(gender == "m" || gender =="f")
            {
                return gender;
            }
            console.log("Invalid Gender there are only two!!!!!!!!".red.bold)
        }
        
}
function validAge()
{
    while(true)
    {
        
            let age = prompt("Enter your".yellow + " Age ".blue+"? : ".yellow);
            const isNumber = validator.isNumeric(age , true);
            if(isNumber && parseInt(age))
            {
                return parseInt(age);
            }
            console.log("Invalid Age!".red.bold)
    }
        
    }
function validPassword()
{
    
        const password = read({ prompt: 'Password: ' , input:"process.stdin" , replace:"*"} , (err , cos)=>{
            console.log(cos)
        })

    console.log(password)
}
validPassword();
module.exports = {validEmail , validAge , validName , validGender , validPassword};

