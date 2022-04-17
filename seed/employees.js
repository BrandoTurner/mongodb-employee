const db = require("../db")
const Employee = require("../models/employee")

db.on("error", console.error.bind(console, "MongoDB connection error: "))


const main = async () => {
    const employees = 
        [
            {
                first_name: "Bruno",
                last_name: "Galvao",
                email: "bruno.galvao@ga.co",
                job_title: "Software Engineering Instructor",
                address: {
                    street: "10 E 21St St",
                    city: "New York",
                    state: "NY",
                    zip: "10010"
                }
            },
            {
                first_name: "Kirby",
                last_name: "Super Star",
                email: "hallaboratory.org",
                job_title: "Galactic Defender",
                address: {
                    street: "Eat St",
                    city: "Anywhere",
                    state: "PS",
                    zip: "99999"
                }

            },
            {
                first_name: "Sonic",
                last_name: "The Hedgehog",
                email: "nospoilers@sega.com",
                job_title: "Blue Blur",
                address: {
                    street: "Too fast",
                    city: "Philly",
                    state: "PA",
                    zip: "12345"
                }

            },
        ];
    await Employee.insertMany(employees);  
    console.log("Created users!")
};

const run = async () => {
    await main();
    db.close()
};

run()