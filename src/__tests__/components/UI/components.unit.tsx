import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "../../../components/UI/Button";
import ButtonLink from "../../../components/UI/ButtonLink";
import CardCart from "../../../components/UI/CardCart";

describe("UI test", () => {
  it("<Button />", () => {
    const onClicked = jest.fn();
    render(<Button onClick={onClicked}>Test</Button>);
    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
    expect(onClicked).toHaveBeenCalledTimes(1);
  });

  it("<ButtonLink />", () => {
    const { container } = render(
      <ButtonLink to="/test">Test BtnLink</ButtonLink>
    );
    const buttonLink = screen.getByText("Test BtnLink");

    expect(container.getElementsByClassName("btn").length).toBe(1);
    expect(buttonLink).toBeInTheDocument();
    expect(buttonLink).toMatchSnapshot();
  });

  it("<CardCart />", () => {
    render(
      <CardCart
        photo={"photoTest"}
        description={"Test description"}
        actions={<Button>Action Test</Button>}
        price={"12.99"}
      />
    );

    const cardCartDescription = screen.getByText("Test description");
    expect(cardCartDescription).toBeInTheDocument();
    expect(cardCartDescription).toMatchSnapshot();
    const cardCartPrice = screen.getByText("12.99");
    expect(cardCartPrice).toBeInTheDocument();
    expect(cardCartPrice).toMatchSnapshot();
  });
});
