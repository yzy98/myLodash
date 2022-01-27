import myLodash from ".";

const mockObj = {
  grade: 1,
  person: {
    name: 'John',
    age: 20
  }
};
// shallow copy
// const sObj = myLodash.shallowCopy(mockObj);
// sObj.grade = 2;
// sObj.person.name = 'Mike';
// console.log("mockObj: ", mockObj);
// console.log("sObj: ", sObj);

// deep copy
// const dObj = myLodash.deepCopy(mockObj);
// sdObj.grade = 2;
// sdObj.person.name = 'Mike';
// console.log("mockObj: ", mockObj);
// console.log("dObj: ", dObj);

// camelize string
console.log(myLodash.camelize('a-fdd-wev-vffd', '-'));