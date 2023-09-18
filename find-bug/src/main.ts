const EVENT_CAPACITY = 20;
const MAX_TICKETS_PER_PERSON = 6;

const tickets: string[] = [];

export const bookTickets = (name: string, numberOfTickets: number) => {
  if (eventIsFull(numberOfTickets)) {
    throw new Error(
      "There are not enough tickets left to buy this many tickets"
    );
  }

  if (userAlreadyHasMaxTickets(numberOfTickets, name)) {
    throw new Error("This user has already purchased tickets");
  }

  for (let i = 0; i < numberOfTickets; i++) {
    tickets.push(name);
  }
};

const eventIsFull = (numberOfTickets: number) => {
  return numberOfTickets > EVENT_CAPACITY - tickets.length;
};

const userAlreadyHasMaxTickets = (ticketsToBuy: number, name: string) => {
  const ticketsAlreadyPurchased = tickets.filter(
    (nameOnTicket) => nameOnTicket === name
  ).length;

  return ticketsAlreadyPurchased + ticketsToBuy > MAX_TICKETS_PER_PERSON;
};

