//  handling the error

// try{
//     console.log("try block starts here");
//     // console.log(x);
// }
// catch(e){
//     console.log("Catch Bloch starts here");
//     console.log("your error is here " , e) ;
   
// }
// finally{
//     console.log("Maa chudaoo muje farak nahi padtha , me tho chalunga ");
    
// }


// lets create a custom error

try{
    console.log(s);
    
}
catch(error){
    // console.log(`Bhai error mil gaya : `, error);
     
    throw new Error("bhai declare tho karle ");
    
}
finally{
    console.log(`Maa chudaoo me tho chalunga `);

    
}
