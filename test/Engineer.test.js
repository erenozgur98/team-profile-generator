// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    test("Can set GitHub account via constructor", () => {
    const gitHub = 'username';
    const result = new Engineer(gitHub);

    expect(result instanceof Engineer).toBe(true);
    });
    
    test("getRole() should return \"Engineer\"", () => {
        const getRole = 'Engineer';
        const result = new Engineer('test', 1, 'email@email.com',getRole);
        const newRole = result.getRole();

        expect(newRole).toEqual(getRole);    
    });
    
    test("Can get GitHub username via getGithub()", () => {
        const github = 'username';
        const result = new Engineer('test', 1, 'email@email.com', github); 
        const newGithub = result.getGithub();
    
        expect(newGithub).toEqual(github);
    });
})
