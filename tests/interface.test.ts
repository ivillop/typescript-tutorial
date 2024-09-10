import { Seller } from "../src/seller";
import { Employee, Manager } from "../src/employee";
import { Person } from "../src/person";

describe('Interface', function () {
    it('should support in typescript', function () {
        const seller: Seller = {
            id: 1,
            name: 'Toko ABC',
            nib: "12312321",
            npwp: "23123123"
        };

        seller.name = "Toko Raden";

        console.info(seller);
    })

    it('should support function interface', function () {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(2,2)).toBe(4);
    })

    it('should support indexable interface', function () {
        interface StringArray {
            [index: number]: string
        }

        const names: StringArray = ["Prabowo", "Jokowi", "Gibran"];
        console.info(names);
    })

    it('should support indexable interface for non number index', function () {
        interface StringDictionary {
            [key: string] : string
        }

        const dictionary: StringDictionary = {
            "name": "Raden",
            "address": "Indonesia"
        }

        expect(dictionary["name"]).toBe("Raden");
        expect(dictionary["address"]).toBe("Indonesia");
    })

    it('should support extends interface', function () {
        const employee: Employee = {
            id: "1",
            name: "Raden",
            division: "IT"
        }

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Akbar",
            division: "IT",
            numberOfEmployees: 10
        }

        console.info(manager);
    })

    it('should support function in interface', function () {
        interface Person {
            name: string;
            sayHello(name: string) : string;
        }

        const person: Person = {
            name: "Raden",
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(person.sayHello("Akbar"))
    })

    it ('should support intersection types', function () {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: string;
        }
        
        type Domain = HasId & HasName;

        const domain: Domain = {
            id: "1",
            name: "Raden"
        }

        console.info(domain);
    })

    it('should support type assertions', function () {
        const person: any = {
            name: "Raden",
            age: 30
        }

        const person2 : Person = person as Person;
        // person2.sayHello("Akbar");

        console.info(person2);
    })
})