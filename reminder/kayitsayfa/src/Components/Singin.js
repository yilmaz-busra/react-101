import React from "react";
import { useFormik } from "formik";
import "./Comp.css";
function Singin() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      secondName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h2>Giriş Yap</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="formcss">
            <div className="div">
              <label htmlFor="firstName">İsim</label>
              <input
                id="firstName"
                name="firstName"
                placeholder="İsim"
                value={values.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="div">
              <label htmlFor="lastName">Soyadı</label>
              <input
                id="lastName"
                name="lastName"
                placeholder="Soyadı"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="div">
              <label htmlFor="seconName">Kullanıcı Adı</label>
              <input
                id="secondName"
                name="secondName"
                placeholder="Kullanıcı Adı"
                value={values.secondName}
                onChange={handleChange}
              />
            </div>
            <div className="div">
              <label htmlFor="email">Email Adresiniz</label>
              <input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="div">
              <label htmlFor="password">Şifre</label>
              <input
                id="password"
                name="password"
                placeholder="Şifre"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Kayıt Ol</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singin;
