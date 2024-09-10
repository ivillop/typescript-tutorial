describe('Array', function () {
    it('should same with javascript', function () {
        const names: string[] = ["prabowo", "jokowi", "gibran"];
        const values: number[] = [1,2,3];

        console.info(names);
        console.info(values);
    });

    it('should support readonly array', function () {
        const hobbies: ReadonlyArray<string> = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        // hobbies[0] = "Main Game";
    });

    it('should support tupple', function () {
        const person: readonly [string, string, number] = ["Prabowo", "Gibran", 20];
        console.info(person);

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[0] = "Prabowo";
    })
});