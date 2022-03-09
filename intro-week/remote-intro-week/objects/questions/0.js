const phoneBook = {
  anat: "+44981513462",
  sam: "+44981513419",
  shaq: "+4498674321",
};

const name = "anat";
const anatPhoneNo = phoneBook.name;

console.log(anatPhoneNo);

// What will happen when this file is executed with Node?
// What is the problem with this code?

// Prediction => print undefined because .name looks for a key called 'name'
// Actual => prints undefined
