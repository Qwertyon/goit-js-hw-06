import users from "./users.js";

// TASK 1
console.group("task1");

const getUserNames = (users) => {
  const names = users.map((user) => user.name);
  return names;
};
console.log(getUserNames(users));

console.groupEnd();
// TASK 2
console.group("task2");

const getUsersWithEyeColor = (users, color) => {
  const withSomeEyeColor = users.filter((user) => user.eyeColor === color);
  return withSomeEyeColor;
};
console.log(getUsersWithEyeColor(users, "blue"));

console.groupEnd();
// TASK 3
console.group("task3");

const getUsersWithGender = (users, gender) => {
  const genderNames = users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
  return genderNames;
};
console.log(getUsersWithGender(users, "male"));

console.groupEnd();
// TASK 4
console.group("task4");

const getInactiveUsers = (users) => {
  const inactiveUsers = users.filter((user) => !user.isActive);
  return inactiveUsers;
};
console.log(getInactiveUsers(users));

console.groupEnd();
// TASK 5
console.group("task5");

const getUserWithEmail = (users, email) => {
  const usersWithEmail = users.filter((user) => user.email === email);
  return usersWithEmail;
};
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));

console.groupEnd();
// TASK 6
console.group("task6");

const getUsersWithAge = (users, min, max) => {
  const someAgeUsers = users.filter(
    (user) => user.age >= min && user.age <= max
  );
  return someAgeUsers;
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

console.groupEnd();
// TASK 7
console.group("task7");

const calculateTotalBalance = (users) => {
  const sumOfBalance = users.reduce(
    (totalBalance, user) => totalBalance + user.balance,
    0
  );
  return sumOfBalance;
};
console.log(calculateTotalBalance(users));

console.groupEnd();
// TASK 8
console.group("task8");

const getUsersWithFriend = (users, friendName) => {
  const nameOfusersWithFriend = users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
  return nameOfusersWithFriend;
};
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));

console.groupEnd();
// TASK 9
console.group("task9");

const getNamesSortedByFriendsCount = (users) => {
  const copiedAndSortedByFriendsNames = [...users]
    .sort(function (prevUser, nextUser) {
      return prevUser.friends.length - nextUser.friends.length;
    })
    .map((user) => user.name);
  return copiedAndSortedByFriendsNames;
};
console.log(getNamesSortedByFriendsCount(users));

console.groupEnd();
// TASK 10
console.group("task10");

const getSortedUniqueSkills = (users) => {
  const allUnicSkills = users
    .reduce(function (skills, user) {
      skills.push(...user.skills);
      return skills;
    }, [])
    .reduce(function (acc, skill) {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
      return acc;
    }, []);
  return allUnicSkills.sort();
};
console.log(getSortedUniqueSkills(users));

console.groupEnd();
