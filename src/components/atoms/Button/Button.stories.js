import Button from "./Button";

export default {
  title: 'CRUD/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
        control: "radio",
        options: ["primary", "secondary"]
    },
    size: {
        control: "radio",
        options: ["small", "medium", "large"]
    }
  },
};

export const Primary = {
  args: {
    variant: "primary",
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
