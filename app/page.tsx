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
  Switch,
} from "antd";
import { WarningOutlined, InfoCircleOutlined } from "@ant-design/icons";
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
  step?: string;
  switch?: boolean;
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
    PlayerStomachDecreaceRate: "1.000000",
    PlayerStaminaDecreaceRate: "1.000000",
    PlayerAutoHPRegeneRate: "1.000000",
    PlayerAutoHpRegeneRateInSleep: "1.000000",
    PalStomachDecreaceRate: "1.000000",
    PalStaminaDecreaceRate: "1.000000",
    PalAutoHPRegeneRate: "1.000000",
    PalAutoHpRegeneRateInSleep: "1.000000",
    BuildObjectDamageRate: "1.000000",
    BuildObjectDeteriorationDamageRate: "1.000000",
    CollectionDropRate: "1.000000",
    CollectionObjectHpRate: "1.000000",
    CollectionObjectRespawnSpeedRate: "1.000000",
    EnemyDropItemRate: "1.000000",
    DeathPenalty: "All",
    bEnablePlayerToPlayerDamage: "False",
    bEnableFriendlyFire: "False",
    bEnableInvaderEnemy: "True",
    bActiveUNKO: "False",
    bEnableAimAssistPad: "True",
    bEnableAimAssistKeyboard: "False",
    DropItemMaxNum: "3000",
    DropItemMaxNum_UNKO: "100",
    BaseCampMaxNum: "128",
    BaseCampWorkerMaxNum: "15",
    DropItemAliveMaxHours: "1",
    bAutoResetGuildNoOnlinePlayers: "False",
    AutoResetGuildTimeNoOnlinePlayers: "72.000000",
    GuildPlayerMaxNum: "20",
    PalEggDefaultHatchingTime: "1",
    WorkSpeedRate: "1",
    bIsMultiplay: "False",
    bIsPvP: "False",
    bCanPickupOtherGuildDeathPenaltyDrop: "False",
    bEnableNonLoginPenalty: "False",
    bEnableFastTravel: "True",
    bIsStartLocationSelectByMap: "True",
    bExistPlayerAfterLogout: "False",
    bEnableDefenseOtherGuildPlayer: "False",
    CoopPlayerMaxNum: "4",
    ServerPlayerMaxNum: "32",
    ServerName: "CHIBANLI",
    ServerDescription: "",
    AdminPassword: "",
    ServerPassword: "",
    PublicPort: "8211",
    PublicIP: "",
    RCONEnabled: "False",
    Region: "",
    bUseAuth: "True",
    BanListURL: "https://api.palworldgame.com/api/banlist.txt",
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
    "PlayerStomachDecreaceRate",
    "PlayerStaminaDecreaceRate",
    "PlayerAutoHPRegeneRate",
    "PlayerAutoHpRegeneRateInSleep",
    "PalStomachDecreaceRate",
    "PalStaminaDecreaceRate",
    "PalAutoHPRegeneRate",
    "PalAutoHpRegeneRateInSleep",
    "BuildObjectDamageRate",
    "BuildObjectDeteriorationDamageRate",
    "CollectionDropRate",
    "CollectionObjectHpRate",
    "CollectionObjectRespawnSpeedRate",
    "EnemyDropItemRate",
    "DeathPenalty",
    "bEnablePlayerToPlayerDamage",
    "bEnableFriendlyFire",
    "bEnableInvaderEnemy",
    "bActiveUNKO",
    "bEnableAimAssistPad",
    "bEnableAimAssistKeyboard",
    "DropItemMaxNum",
    "DropItemMaxNum_UNKO",
    "BaseCampMaxNum",
    "BaseCampWorkerMaxNum",
    "DropItemAliveMaxHours",
    "bAutoResetGuildNoOnlinePlayers",
    "AutoResetGuildTimeNoOnlinePlayers",
    "GuildPlayerMaxNum",
    "PalEggDefaultHatchingTime",
    "WorkSpeedRate",
    "bIsMultiplay",
    "bIsPvP",
    "bCanPickupOtherGuildDeathPenaltyDrop",
    "bEnableNonLoginPenalty",
    "bEnableFastTravel",
    "bIsStartLocationSelectByMap",
    "bExistPlayerAfterLogout",
    "bEnableDefenseOtherGuildPlayer",
    "CoopPlayerMaxNum",
    "ServerPlayerMaxNum",
    "ServerName",
    "ServerDescription",
    "AdminPassword",
    "ServerPassword",
    "PublicPort",
    "PublicIP",
    "RCONEnabled",
    "Region",
    "bUseAuth",
    "BanListURL",
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
    {
      key: "PlayerStomachDecreaceRate",
      keyTip: "玩家饱腹感下降率",
      input: true,
      defaultValue: "1",
      desc: <>范围：0.1~5</>,
    },
    {
      key: "PlayerStaminaDecreaceRate",
      keyTip: "玩家耐力下降率",
      input: true,
      defaultValue: "1",
      desc: <>范围：0.1~5</>,
    },
    {
      key: "PlayerAutoHPRegeneRate",
      keyTip: "玩家自动生命回复率",
      input: true,
      defaultValue: "1",
    },
    {
      key: "PlayerAutoHpRegeneRateInSleep",
      keyTip: "玩家睡眠中生命自动回复率",
      input: true,
      defaultValue: "1",
    },
    {
      key: "PalStomachDecreaceRate",
      keyTip: "帕鲁饱腹感下降率",
      input: true,
      defaultValue: "1",
      desc: <>范围：0.1~5</>,
    },
    {
      key: "PalStaminaDecreaceRate",
      keyTip: "帕鲁耐力下降率",
      input: true,
      defaultValue: "1",
      desc: <>范围：0.1~5</>,
    },
    {
      key: "PalAutoHPRegeneRate",
      keyTip: "帕鲁自动生命回复率",
      input: true,
      defaultValue: "1",
    },
    {
      key: "PalAutoHpRegeneRateInSleep",
      keyTip: "帕鲁睡眠中生命自动回复率",
      input: true,
      defaultValue: "1",
      desc: <>在帕鲁箱中</>,
    },
    {
      key: "BuildObjectDamageRate",
      keyTip: "建筑物受伤害率",
      input: true,
      defaultValue: "1",
      desc: <>范围：0.5~3</>,
    },
    {
      key: "BuildObjectDeteriorationDamageRate",
      keyTip: "建筑物劣化率",
      input: true,
      defaultValue: "1",
      desc: <>范围：0~10</>,
    },
    {
      key: "CollectionDropRate",
      keyTip: "采集资源率",
      input: true,
      defaultValue: "1",
      desc: (
        <>
          <Tooltip
            color="#87d068"
            title="例：拿石稿敲小帕鲁矿取得1个帕鲁碎片默认要6下平均19点伤害，若调为3则要敲2下平均19点伤害。"
          >
            <InfoCircleOutlined style={{ color: "green" }} />
          </Tooltip>
        </>
      ),
    },
    {
      key: "CollectionObjectHpRate",
      keyTip: "采集资源生命率",
      input: true,
      defaultValue: "1",
      desc: (
        <>
          范围：0.5~3。
          <Tooltip color="#87d068" title="经敲小帕鲁矿，测试不生效">
            <InfoCircleOutlined style={{ color: "green" }} />
          </Tooltip>
        </>
      ),
    },
    {
      key: "CollectionObjectRespawnSpeedRate",
      keyTip: "采集资源重生间隔",
      input: true,
      defaultValue: "1",
      desc: (
        <>
          范围：0，0.5~3。
          <Tooltip color="#87d068" title="树木大矿石为1小时，若为0立即重生">
            <InfoCircleOutlined style={{ color: "green" }} />
          </Tooltip>
        </>
      ),
    },
    {
      key: "EnemyDropItemRate",
      keyTip: "敌人掉落物品率",
      input: true,
      defaultValue: "1",
    },
    {
      key: "DeathPenalty",
      keyTip: "死亡惩罚",
      select: true,
      options: [
        {
          label: "All",
          value: "All",
        },
        {
          label: "None",
          value: "None",
        },
        {
          label: "Item",
          value: "Item",
        },
        {
          label: "ItemAndEquipment",
          value: "ItemAndEquipment",
        },
      ],
      defaultValue: "All",
      desc: (
        <ul>
          <li>None: 全部不掉落</li>
          <li> Item: 仅掉落道具(不含帕鲁及身上穿的装备武器)</li>
          <li>ItemAndEquipment: 除了帕鲁其他全掉 </li>
          <li>
            All: 帕鲁、装备、道具全部掉落(不包含无法掉落的帕鲁专属装备，如马鞍)
          </li>
        </ul>
      ),
    },
    {
      key: "bEnablePlayerToPlayerDamage",
      keyTip: "玩家对玩家伤害",
      defaultValue: "False",
      switch: true,
      desc: <>[推荐用于PVP] 玩家对玩家伤害</>,
    },
    {
      key: "bEnableFriendlyFire",
      keyTip: "玩家对友军伤害",
      defaultValue: "False",
      switch: true,
      desc: <>[推荐用于PVP] 玩家对自己帕鲁跟同公会玩家的伤害</>,
    },
    {
      key: "bEnableInvaderEnemy",
      keyTip: "允许入侵",
      defaultValue: "True",
      switch: true,
      desc: <>袭击事件是否开启</>,
    },
    {
      key: "bActiveUNKO",
      keyTip: "激活UNKO",
      defaultValue: "False",
      switch: true,
    },
    {
      key: "bEnableAimAssistPad",
      keyTip: "平板辅助瞄准",
      switch: true,
      defaultValue: "True",
    },
    {
      key: "bEnableAimAssistKeyboard",
      keyTip: "键盘辅助瞄准",
      switch: true,
      defaultValue: "False",
    },
    {
      key: "DropItemMaxNum",
      keyTip: "世界内掉落物上限",
      input: true,
      step:"1",
      defaultValue: "3000",
    },
    {
      key: "DropItemMaxNum_UNKO",
      keyTip: "神秘UNKO掉落物上限",
      input: true,
      step:"1",
      defaultValue: "100",
    },
    {
      key: "BaseCampMaxNum",
      keyTip: "基地最大数量",
      input: true,
      step:"1",
      defaultValue: "128",
    },
    {
      key: "BaseCampWorkerMaxNum",
      keyTip: "基地内帕鲁工人最大值",
      input: true,
      step:"1",
      defaultValue: "15",
    },
    {
      key: "DropItemAliveMaxHours",
      keyTip: "掉落物保留时长",
      input: true,
      defaultValue: "1",
      desc: (
        <>
          小时。
          <Tooltip
            color="#87d068"
            title="建议设为0.5以保证掉落物不会太多造成卡顿"
          >
            <InfoCircleOutlined style={{ color: "green" }} />
          </Tooltip>
        </>
      ),
    },
    {
      key: "bAutoResetGuildNoOnlinePlayers",
      keyTip: "自动重启没有在线玩家的工会",
      switch: true,
      defaultValue: "False",
      desc: <>自动帮玩家退出公会</>,
    },
    {
      key: "AutoResetGuildTimeNoOnlinePlayers",
      keyTip: "自动重启没有在线玩家的工会时长",
      input: true,
      defaultValue: "72",
      desc: <>自动帮玩家退出公会的时间</>,
    },
    {
      key: "GuildPlayerMaxNum",
      keyTip: "公会玩家上限",
      input: true,
      step:"1",
      defaultValue: "20",
    },
    {
      key: "PalEggDefaultHatchingTime",
      keyTip: "巨大蛋的孵化时间",
      input: true,
      defaultValue: "1",
      desc: <>小时。</>,
    },
    {
      key: "WorkSpeedRate",
      keyTip: "工作效率",
      input: true,
      defaultValue: "1",
    },
    {
      key: "bIsMultiplay",
      keyTip: "多玩家",
      switch: true,
      defaultValue: "False",
      desc: <>作用未知。</>,
    },
    {
      key: "bIsPvP",
      keyTip: "允许PVP",
      switch: true,
      defaultValue: "False",
      desc: <> [推荐用于PVP] 多人游戏与PVP模式</>,
    },
    {
      key: "bCanPickupOtherGuildDeathPenaltyDrop",
      keyTip: "允许捡取其他公会的死亡掉落物",
      switch: true,
      defaultValue: "False",
    },
    {
      key: "bEnableNonLoginPenalty",
      keyTip: "启用非登录惩罚",
      switch: true,
      defaultValue: "False",
      desc: <>[未知作用]</>,
    },
    {
      key: "bEnableFastTravel",
      keyTip: "开启快速旅行",
      switch: true,
      defaultValue: "True",
    },
    {
      key: "bIsStartLocationSelectByMap",
      keyTip: "允许创建角色后选择出生点",
      switch: true,
      defaultValue: "true",
      desc: (
        <>
          <Tooltip
            color="#87d068"
            title="若为关则出生在初始台地，死亡后依旧可以选择其他出生点"
          >
            <InfoCircleOutlined style={{ color: "green" }} />
          </Tooltip>
        </>
      ),
    },
    {
      key: "bExistPlayerAfterLogout",
      keyTip: "玩家退出后留在原地",
      switch: true,
      defaultValue: "False",
    },
    {
      key: "bEnableDefenseOtherGuildPlayer",
      keyTip: "开启其他工会玩家伤害",
      switch: true,
      defaultValue: "False",
      desc: <>[推荐用于PVP] </>,
    },
    {
      key: "CoopPlayerMaxNum",
      keyTip: "合作玩家人数",
      input: true,
      step:"1",
      defaultValue: "4",
    },
    {
      key: "ServerPlayerMaxNum",
      keyTip: "服务器最大人数",
      input: true,
      step:"1",
      defaultValue: "32",
    },
    {
      key: "ServerName",
      keyTip: "服务器名称",
      input: true,
      defaultValue: "CHIBANLI",
    },
    {
      key: "ServerDescription",
      keyTip: "服务器简介",
      input: true,
    },
    {
      key: "AdminPassword",
      keyTip: "服务器管理员密码",
      input: true,
      defaultValue: "",
    },
    {
      key: "ServerPassword",
      keyTip: "服务器密码",
      input: true,
      defaultValue: "",
      desc: <>等待官方更新耐久耐久修复</>,
    },
    {
      key: "PublicPort",
      keyTip: "服务器端口",
      input: true,
      step:"1",
      defaultValue: "8211",
    },
    {
      key: "PublicIP",
      keyTip: "服务器IP",
      input: true,
      defaultValue: "",
    },
    {
      key: "RCONEnabled",
      keyTip: "开启RCON",
      switch: true,
      defaultValue: "False",
    },
    {
      key: "Region",
      keyTip: "区域",
      input: true,
      defaultValue: "",
      desc: <>目前未知</>,
    },
    {
      key: "bUseAuth",
      keyTip: "使用授权",
      switch: true,
      defaultValue: "True",
      desc: <>目前未知</>,
    },
    {
      key: "BanListURL",
      keyTip: "封锁名单",
      input: true,
      defaultValue: "https://api.palworldgame.com/api/banlist.txt",
      desc: <>当前只支持官方</>,
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
                            defaultValue={configItem.defaultValue}
                            stringMode
                            step={
                              configItem.step !== undefined ? configItem.step : "0.000001"
                            }
                            style={{ width: 120 }}
                            onChange={(value: string | number) =>
                              onChange(value, configItem.key)
                            }
                          />
                        )}
                        {configItem.switch && (
                          <Switch
                            checkedChildren="开启"
                            unCheckedChildren="关闭"
                            value={configItem.defaultValue === "True"}
                            onChange={(value: string | number, event) =>
                              onChange(value ? "True" : "False", configItem.key)
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
          </Space>
        </Flex>
        <Flex justify="center" align="center">
          <Card style={{ marginTop: "16px", width: "80%" }}>
            <TextArea value={displayValue} autoSize={{ minRows: 20 }} />
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
