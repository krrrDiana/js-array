// З масива людей(people) Вам потрібно знайти людину за іменем(name)
function findByName(people, name) {
  // Ваш код
    return people.find(person => person.name === name);
  }
  
  module.exports = findByName;
