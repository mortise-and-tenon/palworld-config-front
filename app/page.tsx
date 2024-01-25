"use client";
import { Flex } from "@/node_modules/antd/es/index";
import {
  Card,
  Col,
  Divider,
  Input,
  InputNumber,
  Layout,
  Row,
  Select,
  Space,
  Tag,
  Tooltip,
  Typography,
  Button,
} from "antd";
import { WarningOutlined } from "@ant-design/icons";
import Image from "next/image";
import { ReactNode, useState } from "react";

const { Header, Footer, Sider, Content } = Layout;

const { TextArea } = Input;

type Config = {
  [key: string]: string;
};

type SelectType = {
  value: string;
  label: string;
};

type ConfigItem = {
  key: string;
  keyTip: string;
  select?: boolean;
  options?: Array<SelectType>;
  input?: boolean;
  defaultValue?: string;
  desc?: ReactNode;
};

export default function Home() {
  let config: Config = {
    Difficulty: "None",
    DayTimeSpeedRate: "1.000000",
    NightTimeSpeedRate: "1.000000",
    ExpRate: "1.000000",
    PalCaptureRate: "1.000000",
    PalSpawnNumRate: "1.000000",
    PalDamageRateAttack: "1.000000",
    PalDamageRateDefense: "1.000000",
    PlayerDamageRateAttack: "1.000000",
    PlayerDamageRateDefense: "1.000000",
  };

  const paramsKeys = [
    "Difficulty",
    "DayTimeSpeedRate",
    "NightTimeSpeedRate",
    "ExpRate",
    "PalCaptureRate",
    "PalSpawnNumRate",
    "PalDamageRateAttack",
    "PalDamageRateDefense",
    "PlayerDamageRateAttack",
    "PlayerDamageRateDefense", //
  ];

  const configItemList: Array<ConfigItem> = [
    {
      key: "Difficulty",
      keyTip: "难度",
      select: true,
      options: [
        { value: "None", label: "None" },
        { value: "Easy", label: "Easy" },
        { value: "Normal", label: "Normal" },
        { value: "Hard", label: "Hard" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
      ],
      defaultValue: "None",
      desc: (
        <>
          使用 <Tag color="red">Difficult</Tag>或 <Tag color="green">Easy</Tag>
          也不影响下列调整的参数
          {/* 这个描述有问题 */}
        </>
      ),
    },
    {
      key: "DayTimeSpeedRate",
      keyTip: "白天速率",
      input: true,
      defaultValue: "1",
      desc: <> 范围：(0.1,5)</>,
    },
    {
      key: "NightTimeSpeedRate",
      keyTip: "夜晚速率",
      input: true,
      defaultValue: "1",
      desc: <>范围：(0.1,5)</>,
    },
    {
      key: "ExpRate",
      keyTip: "经验倍率",
      input: true,
      defaultValue: "1",
    },
    {
      key: "PalCaptureRate",
      keyTip: "帕鲁抓捕几率",
      input: true,
      defaultValue: "1",
      desc: (
        <>
          范围：(0.5,2)。
          <Tooltip
            color="#f50"
            title="这个参数调整非常敏感请谨慎调整。困难模式为0.8，简单模式为2"
          >
            <WarningOutlined style={{ color: "red" }} />
          </Tooltip>
        </>
      ),
    },
    {
      key: "PalSpawnNumRate",
      keyTip: "帕鲁重生数量",
      input: true,
      defaultValue: "1",
      desc: (
        <Tooltip
          color="#f50"
          title="若调整为2，王固定变2只，野生帕鲁群2~4只。超过3会经常导致帕鲁重叠或掉出地图，请谨慎调整。"
        >
          <WarningOutlined style={{ color: "red" }} />
        </Tooltip>
      ),
    },
    {
      key: "PalDamageRateAttack",
      keyTip: "帕鲁造成的伤害倍率",
      input: true,
      defaultValue: "1",
      desc: <>范围：(0.1,5)</>,
    },
    {
      key: "PalDamageRateDefense",
      keyTip: "帕鲁受到的伤害倍率",
      input: true,
      defaultValue: "1",
      desc: <>范围：(0.1,5)</>,
    },
    {
      key: "PlayerDamageRateAttack",
      keyTip: "玩家造成的伤害倍率",
      input: true,
      defaultValue: "1",
      desc: <>范围：(0.1,5)</>,
    },
    {
      key: "PlayerDamageRateDefense",
      keyTip: "玩家受到的伤害倍率",
      input: true,
      defaultValue: "1",
      desc: <>范围：(0.1,5)</>,
    },
  ];

  //格式化最后的完整内容
  const format = () => {
    let params = "";
    paramsKeys.forEach((key) => {
      params += `${key}=${config[key]},`;
    });
    params = params.slice(0, -1);

    return (
      "[/Script/Pal.PalGameWorldSettings]\n" + `OptionSettings=(` + params + `)`
    );
  };

  const [displayValue, setDisplayValue] = useState(format());

  const onChange = (value, param: string) => {
    console.log("key:", param, ",value:", value);
    config[param] = value;
    setDisplayValue(format());
  };

  return (
    <Layout className="layout">
      <Header className="header">
        <Flex justify="center" align="center">
          <Image src="/cat.png" width={60} height="60" alt="logo" />
          <Typography.Title level={2}>
            {" "}
            PalWorld INI 配置文件生成器
          </Typography.Title>
        </Flex>
      </Header>
      <Content>
        <Divider />
        <Flex justify="center" align="center">
          <Space size={16}>
            <Card title="" className="card">
              <Row>
                <Col span={6}>字段</Col>
                <Col span={8}>配置</Col>
                <Col span={10}>描述</Col>
              </Row>

              {configItemList.map((configItem, index) => {
                console.log(configItem);
                return (
                  <>
                    <Divider />
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
                              onChange(value, configItem.key)
                            }
                            options={configItem.options}
                          />
                        )}
                        {configItem.input && (
                          <InputNumber
                            defaultValue="1"
                            stringMode
                            step="0.000001"
                            style={{ width: 120 }}
                            onChange={(value: string | number) =>
                              onChange(value, configItem.key)
                            }
                          />
                        )}
                      </Col>
                      <Col span={10}>
                        <Typography.Text>
                          {configItem.keyTip}。默认：<Tag color="black">{configItem.defaultValue}</Tag>{configItem.desc}
                        </Typography.Text>
                      </Col>
                    </Row>
                  </>
                );
              })}
            </Card>
          </Space>
        </Flex>
        <Flex justify="center" align="center">
          <Card style={{ marginTop: "16px", width: "80%" }}>
            <TextArea value={displayValue} autoSize={{ minRows: 10 }} />
          </Card>
        </Flex>
      </Content>
      <Footer className="footer">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "rgba(255,255,255,.6)" }}>
            ©{new Date().getFullYear()} Mortnon.
          </p>
        </div>
      </Footer>
    </Layout>
  );
}
