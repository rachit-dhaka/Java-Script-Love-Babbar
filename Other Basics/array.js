// Refrenec type : 
    // -> object 
    // -> Array
    // ->function


// OBJECT CREATIONS 
        // let details = {
        //     naam : "Rachit",
        //     age: 20,
        //     weight: 66,
        //     height: "6ft",

        //     greet : function () {
        //         console.log("hello ji kese ho");
        //     }

        // };

        // console.log(details)
        // details.greet();
        // console.log(typeof(details))



// ARRAY
        // syntax : 
        // -> []
        // -> arrya construct


        // let arr=[1,2,3,4,5];
        // let brr=[1,'Rachit','Dhaka']
        // console.log(arr,brr)


        // creating array using constructor 
        // let arr = new Array('Rachit','DHaka',29, 66, 185)
        // console.log(arr)
        // console.log(typeof(arr)===typeof(brr));

        // let arr = new Array('Rachit','DHaka',29, 66, 185)
        // console.log(arr[2]) 

        // BUILT IN FUNCTIONS OF ARRAY 
                // -PUSH 
                // -POP 
                // -SHIFT 
                // -UNSHIFT
                // -SLICE 
                // -SPLICE
                // -MAP
                // -FILTER 
                // -REDUCE 
                // -SORT
                // -INDEX OF 


                // let arr = new Array('Rachit','DHaka')
                // arr.push('head down and work')
                // arr.pop()
                // arr.shift()      

                // arr.unshift('rachit')

                // arr.push(10)
                // arr.push(20)
                // arr.push(30)
                // arr.push(40)


                // console.log(arr.slice(2,4))
                // arr.splice(2,1,"helloji")
                // console.log(arr)


        // MAP FUNCTION

                // let arr=[10,20,30]

                // let ans=arr.map((number)=>{
                //         return number*number;
                // })


                // console.log(ans);

        // FILTRE

                // let arr=[11,22,33,44,55]

                // let ans=arr.filter((Number)=>{
                //         if(Number%2 ===0){
                //                 return true;
                //         }
                //         else{
                //                 return false;
                //         }
                // })

                // console.log(ans);






                // let arr=[12,352,634,224,53, 'rachit ', 'avani']
                
                // let ans=arr.filter((value)=>{
                //         if(typeof(value) === 'string'){
                //                 return value;
                //         }
                        
                // })
                // console.log(ans)


        // // REDUCE 
        //         let arr=[10,20,30,40]
        //         const ans=arr.reduce((acc,curr)=>{
        //                 return acc+curr
        //         },0);
        //         console.log(ans);


        // SORT: 
        // let arr=[1,4,3,6,8,0];   
        // arr.sort();
        // arr.reverse();
        // console.log(arr);



        // FOR EACH 
        // let arr=[10,20,30,40];

        // arr.forEach((value, index)=>{
        //         console.log("Nnumber :" , value , "INdex : " , index);
        // });



        // Array wiht fucntion :
                let arr=[10,20,30,40,50];

                let GetSum=(arr)=>{
                        
                        let sum=0;
                        arr.forEach(value => {
                                sum+=value;
                        });
                        return sum;
                }

                let ans=GetSum(arr);
                console.log(ans);
                


