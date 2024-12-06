function signup(userName) {
    const existingUsers = ["john", "jane", "bob"];
    if (existingUsers.includes(userName)) {
      return "User Already Registered, Please Login";
    } else {
      existingUsers.push(userName);
      return "Signup Successful, Please Login";
    }
  }
  
  console.log(signup("john")); // User Already Registered, Please Login
  console.log(signup("alice")); // Signup Successful, Please Login