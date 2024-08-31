import { AddTaskButton } from "./index";

export default {
  title: "Components/Atoms/AddTaskButton",
  component: AddTaskButton,
};

export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};
