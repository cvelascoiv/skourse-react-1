const { faker } = require("@faker-js/faker");
const postsDataFaker = () => {
  let arr = [];
  for (let index = 0; index < 30; index++) {
    arr.push({
      id: faker.datatype.uuid(),
      username: faker.name.findName(),
      title: faker.name.jobTitle(),
      content: faker.lorem.sentence(),
      likes: faker.datatype.number({ min: 0, max: 100 }),
      createdAt: faker.date.past(),
      visible: true,
      avatar: faker.image.avatar(),
    });
  }
  return arr;
};

export default postsDataFaker;
