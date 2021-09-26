import PropTypes from "prop-types";
import { useTheme } from "styled-components";

import { Typography } from "../Typography";
import { CardBack, CardContainer, CardContent, CardFront, CardItem } from "./Card.styles";

export const Card = ({ item }) => {
  const { colors } = useTheme();

  return (
    <CardContainer>
      <CardContent>
        <CardFront>
          <CardItem>
            <img
              src={item.imageUrl || "https://www.imobiliariapredial.imb.br/images/geral/image-not-found.jpg"}
              alt={item.title}
              height="150px"
            />
            <Typography level={3} color={colors.secondary} fontWeight="bold">
              {item.title}
            </Typography>
          </CardItem>
        </CardFront>

        <CardBack>
          <CardItem>
            <Typography level={3} color={colors.secondary} fontWeight="bold">
              {item.title}
            </Typography>

            <Typography level={4}>{item.description}</Typography>
          </CardItem>
        </CardBack>
      </CardContent>
    </CardContainer>
  );
};

Card.propTypes = {
  item: PropTypes.objectOf({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
