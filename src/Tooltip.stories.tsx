import React from "react";
import { FaLock } from "react-icons/fa";
import { Meta, StoryFn } from "@storybook/react";
import Tooltip from "./Tooltip";

// Define the type of props the CustomTooltip component accepts
interface CustomTooltipProps {
  icon: React.ReactNode;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}

export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta;

// Define a Template for your story
const Template: StoryFn<CustomTooltipProps> = (args: any) => (
  <Tooltip {...args} />
);

// Define your story with default args (props)
export const DefaultTooltip = Template.bind({});
DefaultTooltip.args = {
  icon: <FaLock size={32} />,
  content: (
    <>
      <p className="font-medium text-neutral-900">Private Group</p>
      <p className="text-sm text-gray-700">
        Only verified users can join this group.
      </p>
    </>
  ),
  position: "right",
};
