// Defining a function 
function marks_calculator(marks) {

    // saving all keys in an variable as array
    let values = Object.values(marks)

    // lenth of the array
    let lenth = values.length

    // intializing a var
    let a = 0;

    // applying a forloop for adding marks 
    for(let i = 0; i < lenth; i++) {
        a = a + values[i]
    }

    return a
}
 

// creating a object
Subject_marks = {
    maths : 52,
    eng : 45,
    Physics : 70,
    Chemistry : 89,
    PE : 92
}

// calling function
c = marks_calculator(subject_marks)
console.log(c)




