import classes from "./Loginpage.module.scss"
import { request } from '../../api/request'
import { useHistory } from "react-router-dom"
import { Form, Input, Button, Alert } from "antd";
import { useState } from "react";
import { Kiwi } from "../../assets/icons/Base_icons";

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    // wrapperCol: { offset: 8, span: 16 },
};

const Loginpage = ({
    setToken, token
}) => {

    const history = useHistory();
    const [error, setError] = useState(false);
    const onFinish = (values) => {
      console.log(values);
        request
            .post("/auth/login", {
                username: values.username,
                password: values.password,
            })
            .then((res) => {
                if (res.data.status === 'Error') {
                    setError(true)
                } else {

                    window.localStorage.setItem(
                        "sessionToken",
                        JSON.stringify(res.data.token)
                    );
                    setToken(res.data.token);
                    history.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(token);
    }

    return (
      <div className={`${classes.LoginPage} login-page`}>
        <div className={classes.Left}>
          <div className="">
            <div className={classes.demo}>
              <p>
                your email: <b>mor_2314</b>
              </p>
              <p>
                your password: <b>83r5^_</b>
              </p>
            </div>
            <h2 className={classes.LoginHeader}>Ваша регистрация завершена!</h2>
            <p className={classes.LoginSubHeader}>
              Вы успешно зарегистрированы на сайте киви и ваше пароль отправлен
              в виде смс на ваше телефонный номер
            </p>
            <div className={classes.Warnig}>
              {error ? <Alert message="Error" type="error" showIcon /> : <></>}
            </div>
          </div>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={(err) => console.log(err)}
          >
            <Form.Item
              label="Введите email или номер телефона"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Пароль"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Войти
              </Button>
            </Form.Item>
          </Form>
          <p className={classes.Or}>Or</p>
          <button className={classes.RestorePsw}>
            Восстоновить ваше пароль
          </button>
        </div>

        <div className={classes.Right}>
          <div className={classes.content}>
            <span>
              <Kiwi />
            </span>
            <p className={classes.contentText}>
              Откройте для себя целую плошадку для продаже
            </p>
            <button className={classes.Button}>Как это делать?</button>
          </div>
        </div>
      </div>
    );
}

export default Loginpage
