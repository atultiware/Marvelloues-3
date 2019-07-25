


function Maximum(no1:number,no2:number,no3:number):number
{
    if(no1>=no2 && no1>=no3)
    {
        console.log("The Maximum number is:",+no1);
        return no1;
    }
    
    if(no2 >= no2 && no2>=no3) 
    {
        console.log("The Maximum number is:",+no2);
        return no2;
    }
     else
    {
        console.log("The Maximum number is:",no3);
        return no3;
    }
}

Maximum(23,89,6);

