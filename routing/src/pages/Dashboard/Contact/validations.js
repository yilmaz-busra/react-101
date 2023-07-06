import { object, string } from "yup";
const required_message = " bu alan zorunlu";
const contactSchema = object({
  firstName: string().required(required_message),
  lasttName: string().required(required_message),
  email: string().email().required(required_message),
  message: string().min(5).required(required_message),
});
export default contactSchema;
