import { useHistory } from "react-router";

import { useTheme } from "styled-components";

import logo from "../../assets/logo.png";
import { Button } from "../Button";
import { Typography } from "../Typography";
import { HeaderBox, HeaderButton, TextContent } from "./Header.styles";

export const Header = () => {
  const { colors } = useTheme();
  const history = useHistory();

  const handleClick = () => history.push("/movies/new");
  return (
    <HeaderBox>
      <img src={logo} alt="Movies" height="50px" width="auto" />
      <TextContent>
        <Typography fontWeight="bold">Movies</Typography>
      </TextContent>

      <HeaderButton>
        <Button backgroundColor={colors.mediumGrey} hoverColor={colors.lightGrey} onClick={handleClick}>
          Novo
        </Button>
      </HeaderButton>
    </HeaderBox>
  );
};
