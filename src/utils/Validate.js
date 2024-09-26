export const checkValidateData = (email, password, name) => {
    const isNameValidate = /^[a-zA-Z][a-zA-Z\s'-]{1,49}$/.test(name);
    const isEmailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); // Move $ outside of the regex
    const isPasswordValidate = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!isEmailValidate) return "Email Id is not Valid";
    if (!isPasswordValidate) return "Password is not Valid";
    if (!isNameValidate) return "Name is not Valid";

    return null;
};
