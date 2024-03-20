export const signUpValidate = (fullName, email, password) => {
  const isFullNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(fullName);
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  // const isPhoneNumberValid = /^[789]\d{9}$/.test(phoneNumber);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email Id is not valid.";
  if (!isPasswordValid) return "Password is not valid.";
  // if (!isPhoneNumberValid) return "Phone Number is not valid.";
  if (!isFullNameValid) return "Full Name is not valid.";

  return null;
};
