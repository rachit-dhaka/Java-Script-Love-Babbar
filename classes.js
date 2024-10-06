// class human{

//     // properties
//     age=20;
//     height=180;
//     weight=66;

//     // functionality
//     walking(){
//         console.log(`i am wlaking `);     
//     }

//     running(){
//         console.log(`i am running `);
        
//     }
    
// }


// let obj=new human();
// console.log(obj.age);
// console.log(obj.weight);

// obj.walking();

// adding default value to parameters
        function SayName(MyName="kuch nhai diya tune lawde") {
            console.log(MyName);
            
        }


        // SayName();


        // we can set a object for default value 

        function solve(value={age:12,ht:180,wg:66}){
            console.log("hello ji ", value);
            
        }

        // solve();

        // we can pass function in default parameter
        function k(){
            return 190;
        }

        function utility(naam, age=getAge()){
            console.log(naam ," ", age);
            
        }
        utility(`rachit` );