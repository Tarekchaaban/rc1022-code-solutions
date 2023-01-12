function graduate(credential) {
  function student(fullName) {
    return fullName + ', ' + credential;
  }
  return student;
}

const medical = graduate('M.D.');
const law = graduate('Esq.');

console.log(medical('Tarek Chaaban'));
console.log(law('Tarek Chaaban'));
