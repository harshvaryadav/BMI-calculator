function fun()
{
   var input1=document.getElementById("p1");
   var input2=document.getElementById("p2");
   var h1=document.getElementById("b");
   var h2=document.getElementById("c");
   var height=input1.value;
   var weight=input2.value;
   if((isNaN(height)&&isNaN(weight))||(height==""&&weight==""))
   {
      h1.innerHTML="Enter valid height and weight"; 
   }
   else if((isNaN(height)||isNaN(weight))||(height==""||weight==""))
   {
        if(isNaN(height)||height=="")
        {
           h1.innerHTML="Enter valid height";
        }
        if(isNaN(weight)||weight=="")
        {
           h1.innerHTML="Enter valid weight";
        }
   }
   else
   {
        var BMI=(weight)/((height*height)/10000);
        BMI=BMI.toFixed(2);
        h1.innerHTML="Your BMI is - "+BMI;
        if(BMI<18.6)
        {
           h2.innerHTML="Under Weight";
        }
        else
        {
              if(BMI>=18.6&&BMI<=24.9)
              {
                 h2.innerHTML="Normal Range";
              }
              else
              {
                 h2.innerHTML="Over Weight"; 
              }
        }
   }
}