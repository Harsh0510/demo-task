export default function validation(values) {
  const errorMsg = {};
  if (!values.firstname) {
    errorMsg.firstname = "Please fill in the firstname field!";
  }
  if (!values.lastname) {
    errorMsg.lastname = "Please fill in the lastname field!";
  }
  if (!values.email) {
    errorMsg.email = "Please fill in the email field!";
  }
  if (!values.password) {
    errorMsg.password = "Please fill in the password field!";
  }
  if (!values.confirmpassword) {
    errorMsg.confirmpassword = "Please fill in the confirmpassword field!";
  }
  if (!values.mobilenumber) {
    errorMsg.mobilenumber = "Please fill in the mobilenumber field!";
  }
  if (!values.role) {
    errorMsg.role = "Please fill in the role field!";
  }
  if (values.password !== values.confirmpassword) {
    errorMsg.role = "Please fill in the role field!";
  }
  return errorMsg;
}
