export const checkValidEmailPassword = (email, password) => {
  const emailCheck = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const PasswordCheck =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,}$/.test(password);

  if (!emailCheck) {
    return "Invalid Email";
  }
  if (!PasswordCheck) {
    return "Password must be at least 8 characters long, containing at least one digit, one lowercase letter, one uppercase letter, and one special character.";
  }
  return null;
};
