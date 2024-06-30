function Grade(score) {

    let score= prompt("enter marks");
if (score >79.0 && score <=100){
   console.log( "A") 

}else if (score <=79.0 && score >=60.0){
    console.log ("B") 
}else if (score<=59.0 && score >=49.0){
    console.log ("C") 
}else if (score <49.0 && score>=40.0){
    console.log("D") 
}else if (score <40.0 && score>0.0){
console.log("E")
}else {console.log ("invalid")

}
}
Grade()