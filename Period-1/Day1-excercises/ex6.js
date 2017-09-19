functionHoisting1();
functionHoisting2("2");

function functionHoisting1() {
    console.log("I'm function 1, called first and then declared afterwards");
}

function functionHoisting2(number) {
    console.log("I'm function " + number + ", acting just like function 1");
}