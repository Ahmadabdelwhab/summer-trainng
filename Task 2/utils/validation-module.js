const validator = require("validator")
const colors = require("colors")
const prompt = require ("prompt-sync")({sigint: true})
const read = require('read')
/**this fucntion validate that the email is correct and has the domain "yahoo"  or Gmail*/
function validEmail()
{
    while(true)
    {

        const email = prompt("Enter your".yellow + " E-mail ".blue+"? : ".yellow);
        const reg = new RegExp('^[A-Za-z0-9._%+-]+@(yahoo|gmail)\.com$');
        const flag = !!email.match(reg)
        if(flag)
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
        const name = prompt("Enter your".yellow + " Name ".blue+"? : ".yellow);
        const reg = new RegExp('[A-Za-z0-9._]{6,}');
        const flag = !!name.match(reg)
        if(flag)
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
            console.log("Invalid Gender , there are only two!!!!!!!!".red.bold)
        }   
}
function validAge()
{
    while(true)
    {
        
            const age = prompt("Enter your".yellow + " Age ".blue+"? : ".yellow);
            const isNumber = validator.isNumeric(age , true);
            if(isNumber && parseInt(age) >17)
            {
                return parseInt(age);
            }
            console.log("Invalid Age!".red.bold)
    }
        
    }

    const readline = require('readline');
const { Console } = require("console")

function validPassword() {
    while(true)
    {

        const password = prompt("Enter your".yellow+" Password".blue+"? : ".yellow);
        if(password.length < 8)
        {
            console.log("Invalid Password!".bgRed)
        }
        else
        {
            return password;
        }
    }
}




module.exports = {validEmail , validAge , validName , validGender , validPassword};

