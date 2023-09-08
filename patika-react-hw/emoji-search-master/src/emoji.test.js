import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App Test", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("Header", () => {
    const baslik = screen.getByText("Emoji Search");
    expect(baslik).toBeInDocument();
  });

  it("Emoji List", () => {
    const li = screen.getByText("Click to copy emoji");
    expect(li.length).toEqual(20);
  });

  describe("Emoji Filter", () => {
    let emojiFilter;
    beforeEach(() => {
      render(<App />);
      // ekranda input'umuzu buluyoruz.
      emojiFilter = screen.getByLabelText("emojiInput");
    });

    test("emoji filter işlemi test ediliyor", () => {
      //Test için filtrelenecek emoji belirliyoruz.
      const emoji = "Smiley";
      // fireEvent ile inputa text'i yazdırıyoruz.
      fireEvent.click(emojiFilter, emoji);
      expect(screen.getByText(emoji)).toBeInTheDocument();
    });
  });
});
