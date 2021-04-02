'use strict';

const io = require('socket.io-client');
const faker = require('faker');
const host = 'http://localhost:3000';

const socket = io.connect(host);

setInterval( () => {

    let payload = {
        companyName: 'AAAA', 
    itemId: Math.random()*1000, 
    clientName: faker.name.findName(),
    address: faker.address.streetAddress(),
    date:Date()
    }

socket.emit('pickup',{event: 'pickup', payload:payload, time:Date.now})
}, 5000);    

socket.on('delivered', payload => {
  console.log('Thank you for delivering itemId', payload.payload.itemId);
});
