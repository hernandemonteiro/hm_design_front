import React from "react";
import { jest, describe, it } from "@jest/globals";
import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button";
import ButtonLink from "../../../components/UI/ButtonLink";
import CardCart from "../../../components/UI/CardCart";

jest.mock("react-router-dom");

describe("UI components", () => {
  it("<Button />", () => {
    render(<Button>Test</Button>);
  });

  it("<ButtonLink />", () => {
    jest.mocked(Link);
    render(<ButtonLink to="/test">Test BtnLink</ButtonLink>);
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
