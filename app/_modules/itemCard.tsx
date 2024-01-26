import { Card, Row, Col, Tooltip, Typography,Select,InputNumber,Input,Switch,Tag } from "antd";
import { CardProps } from "./definitions";



export default function ConfigCard(props:CardProps) {
  return (
    <Card title={props.title} className="card">
      <Row>
        <Col span={6}>字段</Col>
        <Col span={8}>配置</Col>
        <Col span={10}>描述</Col>
      </Row>

      {props.itemList.map((configItem, index) => {
        return (
          <>
            <hr />
            <Row align="middle" key={index}>
              <Col span={6}>
                <Tooltip
                  placement="left"
                  color="#108ee9"
                  title={configItem.keyTip}
                >
                  <Typography.Text>{configItem.key}</Typography.Text>
                </Tooltip>
              </Col>
              <Col span={8}>
                {configItem.select && (
                  <Select
                    defaultValue={configItem.defaultValue}
                    style={{ width: 120 }}
                    onChange={(value: string | number) =>
                      props.valueChange(value, configItem.key)
                    }
                    options={configItem.options}
                  />
                )}
                {configItem.input && (
                  <InputNumber
                    defaultValue={configItem.defaultValue}
                    stringMode
                    min={configItem.scope?.min}
                    max={configItem.scope?.max}
                    step={
                      configItem.step !== undefined
                        ? configItem.step
                        : "0.000001"
                    }
                    style={{ width: 120 }}
                    onChange={(value: string | number) =>
                      props.valueChange(value, configItem.key)
                    }
                  />
                )}
                {configItem.inputText && (
                  <Input
                    defaultValue={configItem.defaultValue}
                    style={{ width: 120 }}
                    onChange={(value: string | number) =>
                      props.valueChange(value, configItem.key)
                    }
                  />
                )}
                {configItem.switch && (
                  <Switch
                    checkedChildren="开启"
                    unCheckedChildren="关闭"
                    defaultValue={configItem.defaultValue === "True"}
                    onChange={(value: string | number, event) =>
                      props.valueChange(
                        value ? "True" : "False",
                        configItem.key
                      )
                    }
                  />
                )}
              </Col>
              <Col span={10}>
                <Typography.Text>
                  {configItem.keyTip}。默认：
                  <Tag color="black">{configItem.defaultValue}</Tag>
                  {configItem.desc}
                </Typography.Text>
              </Col>
            </Row>
          </>
        );
      })}
    </Card>
  );
}
