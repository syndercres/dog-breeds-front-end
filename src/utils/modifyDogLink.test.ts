import modifyDogLink from "./modifyImgLink";

test("greet returns a string, greeting the passed name", () => {
  expect(modifyDogLink("https://images.dog.ceo/breeds/whippet/n02091134_1129.jpg")).toBe("whippet");
  expect(modifyDogLink("https://images.dog.ceo/breeds/bouvier/n02106382_117.jpg")).toBe("bouvier");
  expect(modifyDogLink("https://images.dog.ceo/breeds/poodle-standard/n02113799_153.jpg")).toBe("poodle-standard");
});
