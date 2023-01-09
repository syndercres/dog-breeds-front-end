
export default function modifyDogLink(text:string): string {
    const array = text.split('/')
    return array[array.length-2]
}

console.log(modifyDogLink("https://images.dog.ceo/breeds/whippet/n02091134_1129.jpg"))