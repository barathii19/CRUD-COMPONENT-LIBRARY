import React from "react";
import InputControl from "./Input";

const meta = {
  title: "CRUD/Input",
  component: InputControl,
  parameters: {
    layout: "centered",
    tag: ["autodocs"],
  },
  args: { maxLength: 50 },
  argTypes: {
    onBlur: { action: "On Blur" },
    onFocus: { action: "On Focus" },
    placeholder: {
      control: "text",
      name: "placeholder",
    },
    disabled: {
      control: "boolean",
      name: "disabled",
    },
    isRequired: {
      control: "boolean",
      name: "required",
    },
    type: {
      control: "radio",
      options: ["text", "number", "password"],
      defaultValue: "text",
    },
  },
};

export const Default = {
  args: {
    label: "name",
    type: "text",
  },
};

export const Password = {
  args: {
    label: "name",
    type: "password",
  },
};

export const Disabled = {
  args: {
    label: "name",
    Disabled: true,
  },
};

export const Numeric = {
  args: {
    label: "name",
    type: "number",
  },
};

export default meta;