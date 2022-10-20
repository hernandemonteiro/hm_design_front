import { Meta, StoryObj } from "@storybook/react";
import Button from "../../../components/UI/Button";

export default {
  title: "Components/UI/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "#### UI Button variations:",
      },
    },
  },
} as Meta;

export const Default: StoryObj = {
  args: {
    children: "DEFAULT",
  },
  parameters: {
    docs: {
      description: {
        story: "Default Button style",
      },
    },
  },
};

export const Warning: StoryObj = {
  args: {
    children: "WARNING",
    className: "warning",
  },
  parameters: {
    docs: {
      description: {
        story: `**className: 'warning'**
        <p>Using in attention contexts</p>
        `,
      },
    },
  },
};

export const transparent = {
  args: {
    children: "TRANSPARENT",
    className: "transparent",
  },
  parameters: {
    docs: {
      description: {
        story: "Transparent variation of className: 'transparent'",
      },
    },
  },
};

export const red: StoryObj = {
  args: {
    children: "RED",
    className: "red",
  },
};

export const green: StoryObj = {
  args: {
    children: "GREEN",
    className: "green",
  },
};

export const gradientHover: StoryObj = {
  args: {
    children: "GRADIENT ON HOVER",
    className: "gradientHover",
  },
};
