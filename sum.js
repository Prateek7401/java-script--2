var sum=0;
while(true)
{
    var num=parseInt(prompt("Enter the number "));
    if(num>=0)
    {
        sum+=num;
    }
    else{
        break;
    }
}
//document.body.style.color="red";
// document.body.style.backgroundColor="brown";
 //document.body.style.color="blue";
 document.write("the sum of all positive numbers entered by you is " +sum);
 document.body.style.color="blue";
 document.body.style.backgroundColor="lightgreen";
 document.body.style.textAlign="center";
 document.body.style.fontSize="50px";
 document.body.style.padding="75px";
