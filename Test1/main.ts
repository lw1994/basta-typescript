interface IFriend {
    firstName: string;
}

function printFriends(friends: IFriend[]) {
    for (let friend of friends) {
        console.log(friend.firstName);
    }
}

printFriends([
    {firstName: "Luca"},
    {firstName: "Daniel"},
    {firstName: "Steffen"},
    {firstName: "Test"}
]);