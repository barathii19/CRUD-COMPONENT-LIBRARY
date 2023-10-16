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
            name: "disabled"
        },
        isRequired: {
            control: "boolean",
            name: "required"
        },
        type: {
            control: "radio",
            options: ["text", "number", "password"],
            defaultValue: "text"
        }
    }
}

// const InputBase = (args) => (
//     <InputControl {...args} />
// )

export const Default = {
    args: {
        label: "name",
        type: "text"
    },
  };

  export const Password = {
    args: {
     label: "name",
     type: "password"
    },
  };

  export const Disabled = {
    args: {
     label: "name",
     Disabled: true
    },
  };

  export const Numeric = {
    args: {
        label: "name",
        type: "number"
    },
  };


// const InputDisabled = (args) => (
//     <InputControl {...args} />
// )

// const  InputPassword = (args) => {
//     <InputControl {...args} />
// }

// const InputNumber = (args) => {
//     <InputControl {...args} />
// }

export default meta;

// export {
//     InputBase as ,
//     InputDisabled as Disabled,
//     InputNumber as Numeric,
//     InputPassword as Password
// }