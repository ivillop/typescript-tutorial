describe('Object', function () {
    it('should support in typescript', function () {
        const person: {id: string, name: string, hobbies?: string[]} = {
            id: "1",
            name: "Raden"
        };

        console.info(person);

        person.id = "2";
        person.name = "Akbar";

        console.info(person);
    });
});