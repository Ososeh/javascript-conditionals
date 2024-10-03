const userDatabase = {
  spectre123: {
    firstName: "Spectre",
    lastName: "Shekiya",
    email: "spectreshekiya@gmail.com",
    accountActivated: true,
    password: "risingpass12",
  },
  stilienski123: {
    firstName: "Stilienski",
    lastName: "Scott",
    email: "scottstilienski@gmail.com",
    accountActivated: false,
    password: "scotsimplepass",
  },
  richard123: {
    firstName: "Richard",
    lastName: "Micah",
    email: "micahrichards@gmail.com",
    accountActivated: true,
    password: "mypass1234",
  },
  adedayo123: {
    firstName: "Adedayo",
    lastName: "Adenuga",
    email: "adedayoadenuga@gmail.com",
    accountActivated: true,
    password: "justpassingby123",
  },
};

function displayUserDetails() {
  let username = prompt("Enter your username");

  while (validateUsername(username) == false) {
    username = prompt("Username not validated. Please enter a valid username");
  }
  if (username == null) {
    return;
  }

  // Enter Password
  let password = prompt("Enter your password");

  while (validatePassword(password) == false) {
    password = prompt("Password is not valid. Please enter a valid password"); //
  }

  if (password == null) {
    return;
  }

  // Confirm Password
  let passwordConfirm = prompt("Confirm your password");

  while (passwordConfirm !== password)
    passwordConfirm = prompt(
      "Password Oncorrect. Confirm your password again!"
    );
  if (passwordConfirm == null) {
    return;
  }

  // Check if the user database contains the username
  const user = userDatabase[username];

  if (user == undefined) {
    alert("User not found! Please register on the app");
    return;
  }

  console.log(user);
  alert(`
  User found with the following details:
  First Name: ${user.firstName}
  Last Name: ${user.lastName}
  Email: ${user.email}
  Account Activated: ${user.accountActivated}
  `);
}
displayUserDetails(); // CANCEL TAKES US BACK

alert("You have come to the end of the program! Goodbye");

// let username = prompt("Enter your username");

// while (validateUsername(username) == false) {
//   username = prompt("Username not validated. Please enter a valid username");
// }

// let password = prompt("Enter your password")
// while (validatePassword(password) == false) {
//   password = prompt("Password not validated. Please enter a valid password")
// }

function validateUsername(username) {
  if (username == null) {
    return true;
  }

  if (username.length > 10) {
    return false;
  } else {
    return true;
  }
}
function validatePassword(password) {
  if (password == null) {
    return true;
  }
  if (password.length < 6) {
    return false;
  } else {
    return true;
  }
}
