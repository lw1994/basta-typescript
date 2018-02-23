"use strict";
function printFriends(friends) {
    for (let friend of friends) {
        console.log(friend.firstName);
    }
}
printFriends([
    { firstName: "Luca" },
    { firstName: "Daniel" },
    { firstName: "Steffen" }
]);
