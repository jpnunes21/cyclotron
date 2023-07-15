function electron(matrixSize) {

    var realSize = matrixSize ** 2;
    var electronArray = [];
    var newArray = [];

    for (let index = 1; index <= realSize; index++) {
        if (index < matrixSize || index % matrixSize == 0) {
            electronArray.push("e");
        } else {
            electronArray.push(1);
        }        
    }
    
    for (var index = 1; index <= electronArray.length; index++)
    {   
        if (index % matrixSize == 0) {
            newArray.push(electronArray.slice(index - matrixSize, index));
        }
    }

    for (var index = 0; index < newArray.length; index++) {
        console.log(newArray[index]);
    }
}

function neutron(matrixSize) {

    var realSize = matrixSize ** 2;
    var neutronArray = [];
    var newArray = [];

    for (let index = 0; index <= realSize; index++) {
        if (index < matrixSize) {
            neutronArray.push("n");
        } else {
            neutronArray.push(1);
        }
    }

    for (var index = 1; index <= neutronArray.length; index++)
    {   
        if (index % matrixSize == 0) {
            newArray.push(neutronArray.slice(index - matrixSize, index));
        }
    }

    for (var index = 0; index < newArray.length; index++) {
        console.log(newArray[index]);
    }
}

function proton(matrixSize) {

    var realSize = matrixSize ** 2;
    var protonArray = [];
    var newArray = [];

    for (let index = 1; index <= realSize; index++) {
        if (index < matrixSize || index % matrixSize == 0 || index % matrixSize == 1 || index > realSize - matrixSize) {
            protonArray.push("p");
        } else {
            protonArray.push(1);
        }
    }

    protonArray.splice(realSize - 1, 1, 1);
    
    for (var index = protonArray.length - 2; index > 0; index--) {
        console.log(protonArray[index], index);
        if (protonArray[index] == 1) {
            protonArray.splice(index, 1, "p");
            break;
        }
    }

    for (var index = 1; index <= protonArray.length; index++)
    {   
        if (index % matrixSize == 0) {
            newArray.push(protonArray.slice(index - matrixSize, index));
        }
    }

    for (var index = 0; index < newArray.length; index++) {
        console.log(newArray[index]);
    }
}

function cyclotron(particle, matrixSize) {
    if(particle == "e" && matrixSize > 1) {
        electron(matrixSize);
    } else if (particle == "p" && matrixSize > 1) {
        proton(matrixSize);
    } else if (particle == "n" && matrixSize > 1) {
        neutron(matrixSize);
    } else {
        console.log("The particles used are: e, p, n (electron, proton, and neutron) and the matrix size value needs to be greater than 1");
    }
}
// Change the parameters to the first letter of the particle and a number representing the matrix size
cyclotron("e", 1)