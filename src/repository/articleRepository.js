import faker from "faker";

const width = 980;
const height = 400;

export const getArticles = () => {
  let articles = [];
  for (let i = 0; i < 10; i++) {
    articles.push(getArticle(i));
  }

  return articles;
};

export const getArticle = (id) => {
  faker.locale = "nb_NO";

  let article = {
    articleId: id,
    overline: id % 2 ? faker.lorem.sentence() : "",
    headline: faker.lorem.sentence(),
    tagline: id % 3 ? faker.lorem.sentence() : "",
    bodytext: faker.lorem.paragraphs(),
    imageUri: `https://picsum.photos/id/${id * 10}/${width}/${height}`,
    author: `${faker.internet.email()}`,
    photographer: `Photo: (c) ${faker.name.firstName()} ${faker.name.lastName()}, (${faker.internet.email()})`,
    updated: faker.date.recent()
  };

  return article;
};
