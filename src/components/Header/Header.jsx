import logo from "../../assets/logo.png";
import { Typography } from "../Typography";
import { HeaderBox, TextContent } from "./Header.styles";

export const Header = () => (
  <HeaderBox>
    <img src={logo} alt="movies" height="50px" width="auto" />
    <TextContent>
      <Typography fontWeight="bold">Movies</Typography>
    </TextContent>
  </HeaderBox>
);
