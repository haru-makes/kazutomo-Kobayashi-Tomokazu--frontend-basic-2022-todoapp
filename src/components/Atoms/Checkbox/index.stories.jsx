import { Checkbox } from "./index";

export default {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
};

export const Default = {
  args: {
    onClick: () => console.log("clicked"),
  },
};
