import { HiHome } from "react-icons/hi";
import { BiDevices, BiLogIn } from "react-icons/bi";
import { GrStatusWarning } from "react-icons/gr";

const iconStyle = {
  height: "55px",
};

const icons = {
  home: <HiHome />,
  device: <BiDevices />,
  logout: <BiLogIn />,
  warning: <GrStatusWarning color="red" />,
};

export default icons;
