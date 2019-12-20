let a = 0; 
document.addEventListener("click",function(){
    let plan = document.getElementById("meal-plan-div");
    if(a == 1){
        a = 0;
    } else{
        plan.style.display = "none";
        a = 0;
    }
});
function showDiv (){
    a = 1; 
    event.preventDefault();
    let plan = document.getElementById("meal-plan-div");
    plan.style.display = "block";
}
