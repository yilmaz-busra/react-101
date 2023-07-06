import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function Contact() {
  const { handleSubmit, handleChange, values, isSubmitting, errors } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      onSubmit: async (values, bag) => {
        await new Promise((r) => setTimeout(r, 1000));
        console.log(values);
        bag.resetForm();
      },
      validationSchema,
    });
  return (
    <div>
      İletişim
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="Jane"
            value={values.firstName}
            disabled={isSubmitting}
            onChange={handleChange("firstName")}
          />
          {errors.firstName && <div>{errors.firstName}</div>}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={values.lastName}
            disabled={isSubmitting}
            onChange={handleChange("lastName")}
          />
          {errors.lastName && <div>{errors.lastName}</div>}
        </div>
        <div>
          {" "}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
            value={values.email}
            disabled={isSubmitting}
            onChange={handleChange("email")}
          />
          {errors.email && <div>{errors.email}</div>}
        </div>

        <div>
          {" "}
          <label htmlFor="email">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message is..."
            value={values.message}
            disabled={isSubmitting}
            onChange={handleChange("message")}
          />
        </div>

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
