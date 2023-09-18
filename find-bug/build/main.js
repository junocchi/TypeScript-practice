"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookTickets = void 0;
var EVENT_CAPACITY = 20;
var MAX_TICKETS_PER_PERSON = 6;
var tickets = [];
var bookTickets = function (name, numberOfTickets) {
    if (eventIsFull(numberOfTickets)) {
        throw new Error("There are not enough tickets left to buy this many tickets");
    }
    if (userAlreadyHasMaxTickets(numberOfTickets, name)) {
        throw new Error("This user has already purchased tickets");
    }
    for (var i = 0; i < numberOfTickets; i++) {
        tickets.push(name);
    }
};
exports.bookTickets = bookTickets;
var eventIsFull = function (numberOfTickets) {
    return numberOfTickets > EVENT_CAPACITY - tickets.length;
};
var userAlreadyHasMaxTickets = function (ticketsToBuy, name) {
    var ticketsAlreadyPurchased = tickets.filter(function (nameOnTicket) { return nameOnTicket === name; }).length;
    return ticketsAlreadyPurchased + ticketsToBuy > MAX_TICKETS_PER_PERSON;
};
