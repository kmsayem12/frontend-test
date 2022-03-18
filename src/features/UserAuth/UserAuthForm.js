import React from "react";
import { Row, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useContextSelector } from "use-context-selector";
import getValidateMessages from "../../lib/helpers/getValidationMessages";
import { Auth } from "./api";
import { AuthContext } from "../../context";

function UserAuthForm() {
  const [, setToken] = useContextSelector(AuthContext, (auth) => auth);

  const onFinish = async (formData) => {
    const { data } = await Auth.login(formData);
    setToken(data);
  };

  return (
    <Form
      name="basic"
      onFinish={onFinish}
      validateMessages={getValidateMessages("name")}
    >
      <Form.Item
        name="email"
        rules={[{ required: true }, { type: "email" }]}
        hasFeedback
      >
        <Input placeholder="Email Address" prefix={<UserOutlined />} />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true }]} hasFeedback>
        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
      </Form.Item>

      <Row type="flex" justify="center">
        <Form.Item>
          <Button
            size="large"
            className="px-4"
            type="primary"
            htmlType="submit"
          >
            LOG IN
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
}

export default UserAuthForm;
