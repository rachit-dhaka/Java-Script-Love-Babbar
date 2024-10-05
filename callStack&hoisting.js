
// SayMyName(`rachit`);

// function SayMyName(Naam){
//     console.log(Naam)
// }



// console.log(age);
// var age=25;


// USING FUNCTION IN DIFFERENT APPREANCE 

        //  Assiging to a variable 
        let greet=()=>{
            console.log(`Hello ji , kya hal chal `);

        }
        // greet();


        // PASS A FUNCTION 
        let GreetMe=(greet, FullName)=>{
            console.log("hello" , FullName);
            greet();   
            // calling the greet fucntion 
        
        }
       
        // GreetMe(greet , "rachit");

        // FUNCTION RETURNING SOMETHING 
                // function solve(number){
                //     return function(number){
                //         return number*number
                //     }

                // }

                // let ans=solve(5);
                
                // let final=ans(5);
                // console.log(final);
            
        // USING FUNCTION IN DATA STRUCTURE 

        let arr=[
            function(a,b){
                return a+b;
            },
            function(a,b){
                return a-b;
            },
            function(a,b){
                return a*b;
            }
        ]

        let first=arr[2];
        let FirstAnswer=    first(2,3);
        console.log(FirstAnswer);
        