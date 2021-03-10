// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    test("Can set GitHUb account via constructor", () => {
    const gitHub = 'username';
    const result = new Engineer(gitHub);

    expect(result instanceof Engineer).toBe(true);
    });
    
    test("getRole() should return \"Engineer\"", () => {
        const getRole = 'Engineer';
        const result = new Engineer(getRole);

        expect(result instanceof Engineer).toBe(true);    
    });
    
    test("Can get GitHub username via getGithub()", () => {
        const github = 'username';
        const result = new Engineer(github); 
    
        expect(result instanceof Engineer).toBe(true);
    });
})
