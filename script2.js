const responseCallBack = (response)=> response.json(); 

// function responseCallBack(response){
// console.log('Response',  response);
// return response.json();
// }

const showImage = (src) => {
    const image = document.createElement('img');
    image.classList.add('vehicles-image')
    image.src = src;
    return image;
}


const catchError = (error) => console.error(error);

// function manageError(error) {
//     console.error(error)
// }


const convertResultIncreateArrayOfvehicle = (result) => result.map(obj => Car.fromObj(obj));

// function convertResultIncreateArrayOfvehicle(result) {
//         createArrayOfvehicle = result.map(obj=> Student.fromObj(obj));
//         return createArrayOfvehicle;
//     }


const createTextSpan = (text) => {
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(text));
    return span
}

// function createTextSpan(text) {
//     const span = document.createElement('span');
//     span.appendChild(document.createTextNode(text));
//     return span
// }

const deleteCallBack = () => {
    initApp();
}

const deleteVehicle = (id) => {
    const deleteUrl = 'https://62860d1f96bccbf32d6e2c06.mockapi.io/Vehicle/' + id
    const fetchConf = {
        method: 'delete'
    }
    fetch(deleteUrl, fetchConf)
         .then(responseCallBack)
         .then(deleteCallBack);
}

const createDeleteButton = (id) => {
    const button = document.createElement('button');
    button.onclick = () => deleteVehicle(id);
    const node = document.createTextNode('Vendi!');
    button.appendChild(node);
    return button
}


createVehicleCard = (car) => {
    const vehicleCard = document.createElement('div');
    vehicleCard.classList.add('vehicle-card')
    vehicleCard.appendChild(showImage(car.image))
    vehicleCard.appendChild(createTextSpan(car.vehicle + ' ' + car.model));
    // vehicleCard.appendChild(createTextSpan(' Prodotta nel: ' + car.getFullYear()));
    vehicleCard.appendChild(createDeleteButton(car.id));

   
    return vehicleCard;
}


const createArrayOfvehicleCard = (createArrayOfvehicle) => createArrayOfvehicle.map(car => createVehicleCard(car));

const resultCallBack = (result) => displayVehicle(convertResultIncreateArrayOfvehicle(result));

// function resultCallBack(result){
// console.log('Result', result);
// const array = convertResultIncreateArrayOfvehicle(result);
// console.log('array', result)
// displayStudents(array)
// }

const displayVehicle = (createArrayOfvehicle) =>{
    document.body.innerHTML = '';
    const arrayContainer = document.createElement('div');

    arrayContainer.append(...createArrayOfvehicleCard(createArrayOfvehicle));


    document.body.appendChild(arrayContainer); 
}

// function displayStudents(createArrayOfvehicle) {
//     const arrayContainer = document.createElement('div');

//     arrayContainer.append(...createArrayOfvehicleCard(createArrayOfvehicle));


//     document.body.appendChild(arrayContainer);
// }


const initApp = () => fetch('https://62860d1f96bccbf32d6e2c06.mockapi.io/Vehicle')
                        .then(responseCallBack)
                        .then(resultCallBack)
                        .catch(catchError);

initApp();


