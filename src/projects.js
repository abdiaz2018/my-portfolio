import React, { Component } from "react";

class Projects extends Component {
    render() {
        return (
            <main>
                <h2>My Personal projects</h2>
                <p>
                    This is my first personal project and I am working to add more to this site!
                </p>
                <h2>My School Projects</h2>
                <div class="project">
                    <h3>Animal Crossing tracker</h3>
                    <p>
                        The first project that I made was a simple command line interface. I was able to scrape from an api of over 500 characters. I made it so that it would select 5 random characters for you to pick from by typing 1-5. From there it would get more information on the character you picked. 
                        <a href="https://github.com/abdiaz2018/frontend-animal-cross-checker" target="_blank" rel="noreferrer noopener">Here is the frontend github.</a>
                        <a href="https://github.com/abdiaz2018/backend-animal-cross-checker" target="_blank" rel="noreferrer noopener">Here is the backend github.</a>
                    </p>
                </div>

                <div class="project">
                    <h3>Force User API</h3>
                    <p>
                        This project was an api for force users that you can create. You can pick a name, add a race, force alignment, and force ability.
                        <a href="https://github.com/abdiaz2018/the-force-js-frontend" target="_blank" rel="noreferrer noopener">Here is the frontend github.</a>
                        <a href="https://github.com/abdiaz2018/the-force-js-backend" target="_blank" rel="noreferrer noopener">Here is the backend github.</a>
                    </p>
                </div>

                <div class="project">
                    <h3>Create a Funko</h3>
                    <p>
                        This project is a little similar to the transformer one but it also has google authentication and you can leave comments on others people funkos.
                        <a href="https://github.com/abdiaz2018/create-a-funko" target="_blank" rel="noreferrer noopener">Here is the github.</a>
                    </p>
                </div>

                
                
                <div class="project">
                    <h3>Character CLI</h3>
                    <p>
                        The first project that I made was a simple command line interface. I was able to scrape from an api of over 500 characters. I made it so that it would select 5 random characters for you to pick from by typing 1-5. From there it would get more information on the character you picked. 
                        <a href="https://github.com/abdiaz2018/characterbioCLI" target="_blank" rel="noreferrer noopener">Here is the github.</a>
                    </p>
                </div>
            </main>
        )
    }
}

export default Projects;