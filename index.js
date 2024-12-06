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


  function login(userName, password) {
    const existingUsers = ["john", "jane", "bob"];
    if (existingUsers.includes(userName)) {
      if (password === "Emp@123") {
        return "Login Successful...";
      } else {
        return "Wrong Password....";
      }
    } else {
      return "User Not Found, Please Signup";
    }
  }
  
  console.log(login("john", "Emp@123")); // Login Successful...
  console.log(login("john", "wrongpassword")); // Wrong Password....
  console.log(login("alice", "Emp@123")); // User Not Found, Please Signup