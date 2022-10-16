import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "../../../components/UI/Button";
import ButtonLink from "../../../components/UI/ButtonLink";
import CardCart from "../../../components/UI/CardCart";

describe("UI components", () => {
  it("<Button />", () => {
    render(<Button>Test</Button>);
    const button = screen.getByText("Test");
    expect(button).toBeInTheDocument();
  });

  it("<ButtonLink />", () => {
    const { container } = render(
      <ButtonLink to="/test">Test BtnLink</ButtonLink>
    );
    const buttonLink = screen.getByText("Test BtnLink");

    expect(container.getElementsByClassName("btn").length).toBe(1);
    expect(buttonLink).toBeInTheDocument();
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
  });
});
