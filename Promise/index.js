// let Fpromis=new Promise((resolve,reject)=>{
    
// });


// let Spromise= new Promise((resolve,reject)=>{
//     setTimeout(MeraNaam=()=>{
//         console.log(`Rachit Dhaka`);
//     },10000);
//     resolve("Ho gaya ");
// });


let PromiseOne=new Promise((resolve,reject)=>{
    let success=true;
    if(success){
        resolve("hoo gaya successful ");
    }
    else{
        reject("nahi hua chutiye , kaam kar");
    }
});


PromiseOne.then((message)=>{
    console.log("Then ka message is : "+message);
}).catch((error)=>{
    console.log("bhai tera error hai : "+error);
}).finally((message)=>{
    console.log(`kisi ke baap se nahi dartha , me tho chaluga , me tho final hu`);
})








