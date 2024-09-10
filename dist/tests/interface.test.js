describe('Interface', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: 'Toko ABC',
            nib: "12312321",
            npwp: "23123123"
        };
        seller.name = "Toko Raden";
        console.info(seller);
    });
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 2)).toBe(4);
    });
    it('should support indexable interface', function () {
        const names = ["Prabowo", "Jokowi", "Gibran"];
        console.info(names);
    });
    it('should support indexable interface for non number index', function () {
        const dictionary = {
            "name": "Raden",
            "address": "Indonesia"
        };
        expect(dictionary["name"]).toBe("Raden");
        expect(dictionary["address"]).toBe("Indonesia");
    });
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "Raden",
            division: "IT"
        };
        console.info(employee);
        const manager = {
            id: "2",
            name: "Akbar",
            division: "IT",
            numberOfEmployees: 10
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "Raden",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("Akbar"));
    });
    it('should support intersection types', function () {
        const domain = {
            id: "1",
            name: "Raden"
        };
        console.info(domain);
    });
    it('should support type assertions', function () {
        const person = {
            name: "Raden",
            age: 30
        };
        const person2 = person;
        // person2.sayHello("Akbar");
        console.info(person2);
    });
});
export {};
