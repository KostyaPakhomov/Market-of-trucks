"use strict";
let dat;
(function testLoadData() {
    $.ajax('data/data.json',
        { type:'GET', dataType:'json', success:dataLoaded, error:errorHandler }
    );
})();

function dataLoaded(data) {
    console.log('загруженные через AJAX данные:');
    console.log(data);
    dat = data
    // Truck Images
    const truckImage = document.querySelectorAll('.truck_img');
    console.log(truckImage);
    for (let i = 0; i < truckImage.length; i++) {
        for (let j = 0; j < data.stock.length; j++) {
            if (i === j) {
                truckImage[i].style.background = `url('images/${data.stock[j].image}') center center no-repeat`
            } if (i > j) {
                truckImage[i].style.background = `url('images/empty.jpg') center center no-repeat`
            }
        }
    }
    // Truck Item Title
    const itemTitle = document.querySelectorAll('.itemTitle');
    for (let i = 0; i < itemTitle.length; i++) {
        for (let j = 0; j < data.stock.length; j++) {
            if (i === j) {
                itemTitle[i].innerHTML = `${data.stock[j].make}`;
            } if (i > j) {
                itemTitle[i].innerHTML = 'No item';
            }
        }
    }
    // Truck Description
    const itemDescription = document.querySelectorAll('.item_description');
    for (let i = 0; i < itemDescription.length; i++) {
        for (let j = 0; j < data.stock.length; j++) {
            if (i === j) {
                let str = '';
                str += 'Description: ';
                str += `${data.stock[j].title}` + '<br>';
                str += 'Type: ' + `${data.stock[j].type}` + '<br>';
                str += 'Model: ' + `${data.stock[j].model}` + '<br>';
                str += 'Payload: ' + `<span class="payload">${data.stock[j].payload}</span>` + '<br>';
                str += 'Gross weight: ' + `<span class="gross_weight">${data.stock[j].gross_weight}</span>` + '<br>';
                str += 'Power: ' + `<span class="power">${data.stock[j].power}</span>` + ' ' + `${data.stock[j].power_measure}`;
                itemDescription[i].innerHTML = str;
            } if (i > j) {
                itemDescription[i].innerHTML = 'No description';
            }
        }
    }
    // Truck price
    const price = document.querySelectorAll('.price');
    for (let i = 0; i < price.length; i++) {
        for (let j = 0; j < data.stock.length; j++) {
            if (i === j) {
                let str = '';
                str += `<span class="cost">${data.stock[j].price}</span>` + ' ';
                str += `${data.stock[j].price_currency}`;
                price[i].innerHTML = str;
            } if (i > j) {
                price[i].innerHTML = 'No price';
            }
        }
    }
    // Truck Year
    const year = document.querySelectorAll('.year');
    for (let i = 0; i < year.length; i++) {
        for (let j = 0; j < data.stock.length; j++) {
            if (i === j) {
                year[i].innerHTML = `${data.stock[j].year}`;
            } if (i > j) {
                year[i].innerHTML = '-';
            }
        }
    }
    // Truck mileage
    const mileage = document.querySelectorAll('.mileage');
    for (let i = 0; i < mileage.length; i++) {
        for (let j = 0; j < data.stock.length; j++) {
            if (i === j) {
                mileage[i].innerHTML = `${data.stock[j].mileage}` + ' ' + `${data.stock[j].mileage_measure}`;
            } if (i > j) {
                mileage[i].innerHTML = '-';
            }
        }
    }
    // Truck axle configuration
    const axle = document.querySelectorAll('.axle_configuration');
    for (let i = 0; i < axle.length; i++) {
        for (let j = 0; j < data.stock.length; j++) {
            if (i === j) {
                axle[i].innerHTML = `${data.stock[j].axle_configuration}`;
            } if (i > j) {
                axle[i].innerHTML = '-';
            }
        }
    }
    //Heading level
    const headingLevel = document.getElementById('heading_level');
    headingLevel.innerHTML = `${data.page_meta.h1}`;


}

function errorHandler(jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
}

// const truckImage = document.querySelectorAll('.truck_img');
// console.log(truckImage);
// truckImage.forEach(n => n.style.background = 'url("images/1.jpg") center center no-repeat');
// for (let i = 0; i < truckImage.length; i++) {
//     for (let j = 0; j < dat.stock.length; j++) {
//         if (i == j) {
//
//         }
//     }
// }
