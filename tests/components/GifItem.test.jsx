import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en GifItem", () => {
  const title = "Meme";
  const url = "https://giphy.com/meme.jpeg";
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
});
