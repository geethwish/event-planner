export const getErrorMessage = (errorCode: string): string => {
  switch (errorCode) {
    case "auth/user-not-found":
      return "Invalid credentials. Please try again.";
    case "auth/wrong-password":
      return "Invalid credentials. Please try again.";
    case "auth/invalid-email":
      return "Invalid credentials. Please try again.";
    case "auth/invalid-credential":
      return "Invalid credentials. Please try again.";
    case "auth/user-disabled":
      return "This account has been disabled.";
    case "auth/too-many-requests":
      return "Too many failed login attempts. Please try again later.";
    default:
      return "An error occurred during login. Please try again.";
  }
};
