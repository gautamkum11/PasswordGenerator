let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let txt1 = "abcdefghijklmnopqrstuvwxyz";
let txt2 = "0123456789";
let length = txt.length;
let ans = "";
const a = document.querySelector("#g");
const b = document.querySelector("button");
b.addEventListener("click",function()
{
    var i = document.getElementById("g").value;
    for(var j = 0; j < i; j++)
    {
        let g = 0;
        if(validate() == true && j+g < i)
        {
            var k = Math.floor(Math.random()*26);
            ans += txt[k];
            g++;
        }
        if(validate2() == true && j+g < i)
        {
            var u = Math.floor(Math.random()*10);
            ans += txt2[u];
            g++;
        }
        if(validate1() == true && j+g < i) 
        {
            var r = Math.floor(Math.random()*26);
            ans += txt1[r];
            g++;
        }
        if(g == 3)
        j += 2;
        else if(g == 2)
        j++;
        else if(g == 0)
        {
            alert("please choose any checkBox...");
            break;
        }
    }
    document.getElementById("g5").innerText = ans;
    ans = "";
}); 
function validate()
{
    if(gk1.checked == 1)
    return true;
    else 
    return false;
}
function validate1()
{
    if(gk2.checked == 1)
    return true;
    else 
    return false;
}
function validate2()
{
    if(gk3.checked == 1)
    return true;
    else 
    return false;
}


