const firstName = "Gareth"; 
console.log(`${typeof firstName}: ${firstName}`);

const lastName = "Dawson";
console.log(`${typeof lastName}: ${lastName}`);

const age = 19;
console.log(`${typeof age}: ${age}`);

const hasPets = true;
console.log(`${typeof hasPets}: ${hasPets}`);

const email = "gwdawson.work@gmail.com";
console.log(`${typeof email}: ${email}`);

console.log();

const message = `Hello my name is ${firstName} ${lastName} and I'm ${age} years old`;
console.log(message);

const initials = `${firstName[0]}${lastName[0]}`;
console.log(initials);

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const petInfo = hasPets ? "I have pets" : "I don't have pets";
console.log(petInfo);
