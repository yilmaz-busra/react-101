import React from "react";
import { useFormik } from "formik";
import contactSchema from "./validations.js";

function Contact() {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      onSubmit: (values, bag) => {
        console.log(values);

        if (values.email === "test@test.com") {
          return bag.setErrors({ email: "bu mail adresi kullanılıyor" });
        }
        bag.resetForm();
      },
      validationSchema: contactSchema,
    });
  console.log(touched);
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
            // disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur("firstName")}
          />
          {errors.firstName && touched.firstName && (
            <div>{errors.firstName}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            placeholder="Doe"
            value={values.lastName}
            // disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur("lastName")}
          />
          {errors.lastName && touched.lastName && <div>{errors.lastName}</div>}
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
            // disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur("email")}
          />
          {errors.email && touched.email && <div>{errors.email}</div>}
        </div>

        <div>
          {" "}
          <label htmlFor="email">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message is..."
            value={values.message}
            // disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur("message")}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
