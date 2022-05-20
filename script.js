const initApp = () => fetch('https://62860d1f96bccbf32d6e2c06.mockapi.io/Vehicle')
                        .then(responseCallBack)
                        .then(resultCallBack)
                        .catch(catchError);

initApp();

function responseCallBack(response){
console.log('Response',  response);
return response.json();
}

const convertResultInArrayOfCars = (result) => result.map(obj => Car.fromObj(obj));

const createTextSpan = (text) => {
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(text));
    return span
}

function resultCallBack(result){
console.log('Result', result);
const array = convertResultInArrayOfCars(result);
console.log('array', result)
displayCars(array)
}

function catchError(error) {
    console.error(error);
}


createCarCard = (car) => {
    const carCard = document.createElement('div');
    carCard.classList.add('car-card')
    carCard.appendChild(createImage(car.image))
    carCard.appendChild(createTextSpan(car.vehicle + ' ' + car.model));
    carCard.appendChild(createDeleteButton(car.id));

   
    return carCard;
}

const createArrayOfCarCard = (arrayOfCars) => arrayOfCars.map(car => createCarCard(car));


const displayCars = (arrayOfCars) =>{
    document.body.innerHTML = '';
    const arrayContainer = document.createElement('div');

    arrayContainer.append(...createArrayOfCarCard(arrayOfCars));


    document.body.appendChild(arrayContainer); 
}