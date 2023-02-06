// React 
import { useState } from 'react';

// Ant Design
import { Layout } from 'antd';
import { Card, Select } from 'antd';
import { Button, Input, Tooltip } from 'antd';
import { Form } from 'antd';
import { notification, message } from 'antd';

// Ant Design Icons
import { CopyOutlined } from '@ant-design/icons';
import { InfoCircleOutlined } from '@ant-design/icons';

import uuid from 'react-uuid';

const { Content } = Layout;

const Settings = (props) => {

    const [passphrase, setPassphrase] = useState('');
    const [data, setData] = useState('');
    const [api, contextHolder] = notification.useNotification();

    const [form] = Form.useForm();

    const { colorBgContainer } = props;

    const handleChange = (value) => {
      console.log(`selected ${value}`);
    };

    const onFinish = () => {

      api.open({
          message: 'Note',
          description: 'Backend Implementation will be added soon!',
          icon: (
              <InfoCircleOutlined
                style={{
                  color: '#108ee9',
                }}
              />
          ),
      });

    }

    const copy = () => {
      let copyText = document.getElementById("apiKey");

      copyText.select();
      copyText.setSelectionRange(0, 99999);

      navigator.clipboard.writeText(copyText.value);

      api.open({
        type: 'success',
        message: 'API Key Copied',
    });

    }

    return (
        <>
            {contextHolder}
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="API KEY"
              >
                <Input.Group compact>
                  <Input
                    disabled={true}
                    id='apiKey'
                    style={{
                      width: 'calc(100% - 50px)',
                    }}
                    value={uuid()}
                  />
                  <Tooltip title="Copy API KEY">
                    <Button onClick={() => copy()} icon={<CopyOutlined />} />
                  </Tooltip>
                </Input.Group>
              </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Encryption Settings"
              >
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                    style={{
                        maxWidth: '100vw',
                        marginTop: 10,
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item label="Encryption Algorithm"
                        name="algorithm"
                        /* rules={[{ required: true, message: 'Please enter some data!' }]} */
                    >
                        <Select
                          defaultValue="AES"
                          /* style={{
                            width: 120,
                          }} */
                          onChange={handleChange}
                          options={[
                            {
                              value: 'AES',
                              label: 'Advanced Encryption Standard (AES)',
                            },
                            {
                              value: 'RSA',
                              label: 'Rivest-Shamir-Adleman (RSA)',
                            },
                            {
                              value: 'Blowfish',
                              label: 'Blowfish',
                              /* disabled: true, */
                            },
                          ]}
                        />
                    </Form.Item>
                    <Form.Item label="Key Length"
                        name="key"
                        /* rules={[{ required: true, message: 'Please enter some data!' }]} */
                    >
                        <Select
                          defaultValue="256"
                          /* style={{
                            width: 120,
                          }} */
                          onChange={handleChange}
                          options={[
                            {
                              value: '256',
                              label: '256-bit',
                            },
                            {
                              value: '192',
                              label: '192-bit',
                            },
                            {
                              value: '128',
                              label: '128-bit',
                              /* disabled: true, */
                            },
                          ]}
                        />
                    </Form.Item>
                    <Form.Item label="Hashing Algorithm"
                        name="hash"
                        /* rules={[{ required: true, message: 'Please enter some data!' }]} */
                    >
                        <Select
                          defaultValue="512"
                          /* style={{
                            width: 120,
                          }} */
                          onChange={handleChange}
                          options={[
                            {
                              value: '512',
                              label: 'SHA-512',
                            },
                            {
                              value: '384',
                              label: 'SHA-384',
                            },
                            {
                              value: '256',
                              label: 'SHA-256',
                              /* disabled: true, */
                            },
                          ]}
                        />
                    </Form.Item>
                    <div>
                        <Form.Item>
                            <Button htmlType='submit' type="primary">Save</Button>
                        </Form.Item>
                    </div>
                </Form>
              </Card>
            </Content>
        </>
    );

}

export default Settings;