export default function modifyDogLink(text: string): string {
  const array = text.split("/");
  return array[array.length - 2];
}
