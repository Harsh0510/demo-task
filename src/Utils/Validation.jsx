import { toast } from "react-toastify";

function validation(name, email, gender, designation, skill, date, checkEmail) {
  let valid = true;
  if (!name) {
    valid = false;
    return `${toast.warning("Please fill in name field!")} ${valid}`;
  }
  if (name.length < 2) {
    valid = false;
    return `${toast.warning(
      "Name must be greater than two characters"
    )} ${valid}`;
  }
  if (!/^[A-Za-z\s]+$/.test(name)) {
    valid = false;
    return `${toast.warning("Name must be string")} ${valid}`;
  }
  if (!email) {
    valid = false;
    return `${toast.warning("Please fill in email field!")} ${valid}`;
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    valid = false;
    return `${toast.warning("Please enter valid email!")} ${valid}`;
  }
  if (!gender) {
    valid = false;
    return `${toast.warning("Please fill in gender field!")} ${valid}`;
  }
  if (!designation) {
    valid = false;
    return `${toast.warning("Please fill in designation field!")} ${valid}`;
  }
  if (!skill) {
    valid = false;
    return `${toast.warning("Please fill in skill field!")} ${valid}`;
  }
  if (!/^[A-Za-z\s]+$/.test(skill)) {
    valid = false;
    return `${toast.warning("Skill must be string")} ${valid}`;
  }
  if (skill.length < 2) {
    valid = false;
    return `${toast.warning(
      "Skill must be greater than two characters"
    )} ${valid}`;
  }
  if (!date) {
    valid = false;
    return `${toast.warning("Please fill in date field!")} ${valid}`;
  }
  if (checkEmail) {
    valid = false;
    return `${toast.error("This email is already Exists!")} ${valid}`;
  }
}

export default validation;
