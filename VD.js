/**Create at least 40 random users with some following requirements (Use Math.random function) 
    - The user information should be id, first name, last name, birthday, gender, create a prototype for this.
    - Age range from 20 to 40
    - Gender should be male or female
    - First name, last name should be random pick from predefined array name or any random name site
*/
// 1. listUsers = [];  // length = 40

// 2. tạo function create một user
function User(id, firstName, lastName, birthday, gender ){
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.gender = gender; 
}
// 3. tạo hàm random ra một số tuổi từ 20 đến 40
function randomAge() {
let age = 0;
age = Math.floor(Math.random() * (40 - 20) + 20);
return age;
}

// 4. tao ham random gender
function randomGender() {
let gender = 0;
let genderString = 'male'
gender = Math.floor((Math.random()>0.5) ? 1 :0 );
genderString = gender === 0 ? 'male' : 'female';
return genderString;
}

let firstNameList = ['Hanh', 'Pi', 'Thu', 'Nhu', 'Hai', 'Khiem', 'Bao', 'Huy', 'Trang', 'Phuc', 'Thanh', 'Tien', 'Tran', 'Thanh', 'Trung', 'Anh', 'Hau', 'Phong', 'Suong','Lam']
let lastNameList = ['le', 'Tran', 'Duong', 'Vo', 'Tran', 'Nguyen', 'Ha', 'Phan', 'Truong', 'Ly', 'Ngo', 'Huynh', 'Van', 'Pham', 'Lam', 'Cao', 'Le', 'Nguyen', 'Tran','Phan']

// 7. tạo function random một item từ array
function getItem(array) {
let itemIndex = 0;
const maxItem = array.length;
itemIndex = Math.floor(Math.random() * maxItem);
return array[itemIndex];
}

function getListUser() {
let listUsers = [];
for(let i =0; i < 40; i++) {
    let user = {
        id : i, 
        firstName: getItem(firstNameList), 
        lastName: getItem(lastNameList), 
        birthday: randomAge(),
        gender: randomGender() 
    }

    listUsers.push(user);
}
console.log(listUsers);
}
getListUser();