module.exports = function waitingTime(tickets, p) {
    'use strict';
    tickets.shift();
    tickets.pop();
    while (tickets[p] > 0) {
        for (let i = 0; i <= tickets.length; i++) {
            if (tickets[i] > 0) {
                tickets[i]--;
            }
            if (i === p && tickets[i] === 0) {
                break;
            }
        }
    }
    return tickets.reduce((a, b) => a + b, 0);
}