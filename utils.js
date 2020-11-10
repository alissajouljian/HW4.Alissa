


function SumofMatrix (mat1, mat2){
    
if(mat1.length !== mat2.length || mat1[0].length !== mat2.length){
    console.log("wrong");
    return 
}else{
        for (let i=0; i < mat1.length ; i++){
       for (let j=0; j < mat2[0].length ; j++ ){
         
mat1[i][j]= mat1[i][j]+ mat2[i][j];
           
            }  }}  return mat1
        }




function MatrixProduct (mat1 , mat2){
    let sum=0;
    let newmat= [];
    for (let i=0; i < mat1.length; i++){
        newmat[i]=[]
    
    for (let j=0; j < mat1.length ; j++){
     for (let k=0; k < mat1[0].length ; k++){
           sum+= mat1[i][k]*mat2[k][j];
            newmat[i][j]= sum ;
  
        }  }    
} 
return newmat ;
}



function sumofarray(array){
 let sum=0;
for (let j=0; j < array.length ; j++){
sum+=array[j];
} return sum;
}
function sumofeachrow(mat1){
    let newmat= [];
    for (let i=0; i < mat1.length; i++){
    newmat.push(sumofarray(mat1[i]))
    }
    return newmat;
} 


module.exports= {
    MatrixProduct,
    sumofarray,
    SumofMatrix,
    sumofeachrow
}