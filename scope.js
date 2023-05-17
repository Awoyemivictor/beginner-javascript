const myAge = 50;

function juga() {
  console.log(myAge);
}

function freeze() {
  const count = 100;
  juga(count);
}

freeze();