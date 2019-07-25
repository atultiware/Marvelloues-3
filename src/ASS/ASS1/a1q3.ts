function DisplayFactor(factno:number):number
{
    
     var i;
     for(i=1; i<factno; i++)
     {
         if(factno%i == 0)
         {
             console.log(i);
         }
     }
     return 0;
}

DisplayFactor(20);