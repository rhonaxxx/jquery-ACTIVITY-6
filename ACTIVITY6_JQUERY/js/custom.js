function displayName(name) {
    alert("Your name is " + name);
    document.write("<br><br>");
    document.write("Your name is " + name);
    console.log("Your name is " + name);
}

function sumOfTwoNumbers(a, b, d) {
    let c = a + b;
    document.getElementById(d).innerHTML = "The sum is " + c;
}

function inputTwoNumbers() {
    let num1 = parseFloat(prompt("Enter the first number: "));
    let num2 = parseFloat(prompt("Enter the second number: "));
    let sum = num1 + num2;
    alert("The sum of the two numbers is: " + sum);
}

function calculateGrade() {
    let name = prompt("Enter your name: ");
    let totalItem = parseFloat(prompt("Enter Total Items: "));
    let totalScore = parseFloat(prompt("Enter Total Score: "));
    let compute = (-4 * (totalScore / totalItem) + 5).toFixed(2); 
    var remarks = checkRemarks(compute);
    alert(`Name: ${name}\nGrade: ${compute}\nRemarks: ${remarks}`);
    document.write("Hello " + name + ", your grade is: " + compute + " (" + remarks + ")");
    console.log("Hello " + name + ", your grade is: " + compute + " (" + remarks + ")");
    document.write("<br><br>");
    document.write("Your Name is: "+name+"<br><br>"+ 
                    "Your Total Score is: "+ totalScore+"<br><br>"+
                    "Your remark is: "+remarks+"<br><br>");
   console.log("Your Name is: "+name+"\n"+
                 "Your Total Score is: "+ totalScore+"\n"+
                 "Your remark is: "+remarks+"\n");
}
