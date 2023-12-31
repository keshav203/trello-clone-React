import React from "react";
import { Formik, Form } from "formik";
import InputField from "../../../shared/components/InputField";
import { validationSchema } from "./LoginValidation";
import { Button } from "antd";
import UserService from "../../../services/AuthService/auth.service";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../routes/routeConstants/appRoutes";
import { AuthContext } from "../../../context/AuthContext";

interface User {
  email: string;
  password: string;
}

const initialValue = {
  email: "abc@123.com",
  password: "test@1234",
};

const LoginForm = (props: any) => {
  const { error, loading, loginUser } = UserService();


  const onSubmit = (user: User) => {
    loginUser(user);
  };

  return (
    <div>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <InputField type="email" name="email" placeholder="Enter email" />
          <InputField
            type="password"
            name="password"
            placeholder="Enter password"
          />
          <Button htmlType="submit">Login</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
