
// React Syntax Highlighter
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Ant Design Icons
import { CopyOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { Typography, Button } from 'antd';
import { Badge, Card, Space } from 'antd';
import { notification, Tooltip } from 'antd';
import { Divider } from 'antd';

const { Content } = Layout;
const { Title, Text } = Typography;

const CodeBlock = ({ language, code, endpoint, type }) => {

  const [api, contextHolder] = notification.useNotification();

  const copy = () => {

    navigator.clipboard.writeText(code);

    api.open({
      type: 'success',
      message: 'Code Copied',
    });
  }

  return (
    <div style={{ marginTop: 20 }}>
      {contextHolder}
      <Card type="inner" title={endpoint} 
        extra={
          <Tooltip title="Copy Code">
            <Button onClick={() => copy()} icon={<CopyOutlined />} />
          </Tooltip>
        }
      >
        <SyntaxHighlighter language={language} style={docco}>
          {code}
        </SyntaxHighlighter>
      </Card>
    </div>
  );
};


const Docs = (props) => {

    const { colorBgContainer } = props;

    const codeBlocks = {
      encryptData: `
    # Python
    import requests

    url = "api/encrypt/data"

    payload = "your data here..."
    headers = {
      'apikey': 'cb187f47-57d3-f5cd-f44d-33475de237e6',
      'password' : '<YOUR PASSWORD HERE>',
      'Content-Type': 'text/plain'
    }

    response = requests.request("POST", url, headers=headers, data=payload)

    print(response.text)`,

      encryptDataResponse: `
    {
      "encrypted_data" : "<ENCRYPTED DATA>",
      "password" : "<PASSWORD USED TO ENCRYPT DATA>",
    }
    `,

      encryptFile: ``,

      decryptData: ``,

      decryptFile: ``,

    }

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
              <Space
                direction="vertical"
                size="middle"
                style={{
                  width: '100%',
                }}
              >
                <Badge.Ribbon text="POST" color="red">
                  <Card title="Encrypt Data" size="small">
                    <section>
                      <div className='container' /* style={{ marginTop: 10 }} */>
                        <div className='row'>
                          <div className='col' style={{ marginTop: 20 }}>
                            <Title level={3}>Headers</Title>
                            <Divider />
                            <Space direction='vertical'>
                              <Text type="success" strong={true}>API Key</Text>
                              <Text>You can find your API KEY in the settings page from the sidebar.</Text>
                            </Space>
                            <Divider />
                            <Space direction='vertical'>
                              <Text type="success" strong={true}>Password</Text>
                              <Text>This will be used to encrypt your data, and will be required to decrypt it again later on.</Text>
                            </Space>
                            <Divider />
                            <Title level={3}>Body</Title>
                            <Divider />
                            <Space direction='vertical'>
                              <Text type="success" strong={true}>Payload</Text>
                              <Text>Here you specify the data you want to be encrypted (string).</Text>
                            </Space>
                            <Divider />
                            <Title style={{ marginTop: 70 }} level={3}>Response</Title>
                            <Space direction='vertical'>
                              <Text>Returns a JSON object containing the encrypted data and the password used to encrypt it.</Text>
                            </Space>
                            <Divider />
                          </div>
                          <div className='col'>
                            <CodeBlock
                              language='python'
                              code={codeBlocks.encryptData}
                              endpoint="api/encrypt/data"
                              type="POST"
                            />
                            <CodeBlock
                              language='json'
                              code={codeBlocks.encryptDataResponse}
                              endpoint="Sample Response"
                              type="POST"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                  </Card>
                </Badge.Ribbon>
                <Badge.Ribbon text="GET" color="green">
                  <Card title="Encrypt File" size="small">
                    <section>
                      <div className='container' /* style={{ marginTop: 10 }} */>
                        <div className='row'>
                          <div className='col'>
                          
                          </div>
                          <div className='col'>

                          </div>
                        </div>
                      </div>
                    </section>
                  </Card>
                </Badge.Ribbon>
              </Space>
            </Content>
        </>
    );

}

export default Docs;