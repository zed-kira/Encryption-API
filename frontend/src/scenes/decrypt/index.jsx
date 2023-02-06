// React 
import { useState } from 'react';

// Ant Design
import { Layout } from 'antd';
import { Tabs } from 'antd';
import { Input, Button } from 'antd';
import { Typography } from 'antd';
import { notification } from 'antd';
import { Form } from 'antd';
import { message, Upload } from 'antd';

// Internal Components
import FileUploader from '../../components/FileUploader';

// Ant Design Icons
import { SmileOutlined, InfoCircleOutlined, InboxOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { TextArea } = Input;
const { Title } = Typography;
const { Dragger } = Upload;

const DecryptData = () => {
    const [passphrase, setPassphrase] = useState('');
    const [data, setData] = useState('');
    const [api, contextHolder] = notification.useNotification();

    const [form] = Form.useForm();

    const onFinish = () => {

        api.open({
            message: 'Note',
            description:
              'Backend Implementation will be added soon!',
            icon: (
              <SmileOutlined
                style={{
                  color: '#108ee9',
                }}
              />
            ),
        });

    }

    return (
        <>
            {contextHolder}
            <div>
                <Title level={3} style={{ marginTop: 10 }}>Decrypt Your Data Online</Title>
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                    style={{
                        maxWidth: '100vw',
                        marginTop: 30,
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item label="Data" required={true} 
                        name="data"
                        rules={[{ required: true, message: 'Please enter your data!' }]}
                    >
                        <TextArea value={data} onChange={(e) => setData(e.target.value)} rows={8} placeholder='Enter your data here...' />
                    </Form.Item>
                    <Form.Item label="Password" required={true} 
                        name="password"
                        rules={[{ required: true, message: 'Please enter a password!' }]}
                    >
                        <Input value={passphrase} onChange={(e) => setPassphrase(e.target.value)} placeholder="Enter a password" />
                    </Form.Item>
                    <div>
                        <Form.Item>
                            <Button htmlType='submit' type="primary">Decrypt</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </>
    )
}

const DecryptFile = () => {

    const [passphrase, setPassphrase] = useState('');
    const [api, contextHolder] = notification.useNotification();

    const [form] = Form.useForm();

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

    const FileUploaderProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info) {
          const { status } = info.file;
          if (status !== 'uploading') {
            console.log(info.file, info.fileList);
          }
          if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
          } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
          }
        },
        onDrop(e) {
          console.log('Dropped files', e.dataTransfer.files);
        },
    };

    return (
        <>
            {contextHolder}
            <div>
                <Title level={3} style={{ marginTop: 10 }}>Decrypt A File Online</Title>
                <Form
                    layout='vertical'
                    form={form}
                    onFinish={onFinish}
                    style={{
                        maxWidth: '100vw',
                        marginTop: 30,
                        remember: true,
                    }}
                    autoComplete="off"
                >
                    <Form.Item label="Upload File" required={true} 
                        name="file"
                        rules={[{ required: true, message: 'Please upload a file!' }]}
                    >
                        <Dragger {...FileUploaderProps}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                band files
                            </p>
                        </Dragger>
                    </Form.Item>
                    <Form.Item label="Password" required={true} 
                        name="password"
                        rules={[{ required: true, message: 'Please enter a password!' }]}
                    >
                        <Input value={passphrase} onChange={(e) => setPassphrase(e.target.value)} placeholder="Enter a password" />
                    </Form.Item>
                    <div>
                        <Form.Item>
                            <Button htmlType='submit' type="primary">Decrypt</Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </>
    )

}

const Decrypt = (props) => {

    const { colorBgContainer } = props;

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
          key: '1',
          label: `Data`,
          children: <DecryptData />,
        },
        {
          key: '2',
          label: `File`,
          children: <DecryptFile />,
        },
    ];

    return (
        <>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
            </Content>
        </>
    );

}

export default Decrypt;