const fs = require("fs");

const actionsContent = fs.readFileSync("./src/api/entities/actions.json");
const elementsContent = fs.readFileSync("./src/api/entities/elements.json");

const actions = Object.keys(JSON.parse(actionsContent));
const elements = Object.keys(JSON.parse(elementsContent));

let commands = [];

for (let i = 0; i < actions.length; i++) {
  for (let j = 0; j < elements.length; j++) {
    commands.push({
      command: `${actions[i]} ${elements[j]}`,
      type: "simpleAction",
    });
  }
}

fs.writeFileSync("./src/api/datasets/commands.json", JSON.stringify(commands));
