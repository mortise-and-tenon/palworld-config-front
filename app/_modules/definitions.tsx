import { ReactNode } from "react";

export type CardProps = {
  title: string;
  itemList: Array<ConfigItem>;
  valueChange: (value: string, key: string) => void;
};

export type SelectType = {
  value: string;
  label: string;
};

export type ConfigItem = {
  key: string;
  keyTip: string;
  select?: boolean;
  options?: Array<SelectType>;
  input?: boolean;
  inputText?: boolean;
  scope?: {
    min: number;
    max: number;
  };
  step?: string;
  switch?: boolean;
  defaultValue?: string;
  desc?: ReactNode;
};
