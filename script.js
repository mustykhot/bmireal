function BMI(){
    
    //set variables
    const height = parseFloat(document.getElementById('height').value);

    const weight = parseFloat(document.getElementById('weight').value);

    
    //check for valid numbers
    if((height === '') || (height < 0) || (isNaN(height)) || (height === 0)){
        
        document.getElementById("answer").innerHTML = "Please provide a valid height";
        
    } else if (weight === '' || weight < 0 || isNaN(weight)){
        document.getElementById("answer").innerHTML = "Please provide a valid weight";
    }
    
    else {

    //calculate BMI
    const result = (weight / ((height*height)/10000)).toFixed(2);

    //display

    if(result<18.6){

    //display the results
    document.getElementById("answer").innerHTML = "BMI = " + result + "(Under Weight)"

    }
    
    else if(result>18.6 && result<24.9){

        //display the results
        document.getElementById("answer").innerHTML = "BMI = " + result + "(Normal Range)"
    
        }
    
    else if(result>24.9){

            //display the results
            document.getElementById("answer").innerHTML = "BMI = " + result + "(Over Weight)"
        
            }

    else{

         //display the results
         document.getElementById("answer").innerHTML = "BMI = " + result
    }

   
    }


}