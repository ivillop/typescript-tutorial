describe('Any', function () {
    it('should support in typescript', function () {
        const person: any = {
            id: 1,
            name: "Raden Akbar",
            age: "20"
        };

        person.age = 21;
        person.address = "Indonesia";

        console.info(person);
    });
});