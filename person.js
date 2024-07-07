class Person {
    constructor(name, age, gender, email, phone, address) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.contact = {
        email: email,
        phone: phone,
        address: address
      };
    }
    displayInfo() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`Email: ${this.contact.email}`);
      console.log(`Phone: ${this.contact.phone}`);
      console.log(`Address: ${this.contact.address}`);
    }
  }
  let person1 = new Person(
    "Sriram P",
    19,
    "Male",
    "sriramofficial.sit@gmail.com",
    "1234567890",
    "12 Main St, Namakkal, India"
  );
  person1.displayInfo();
  