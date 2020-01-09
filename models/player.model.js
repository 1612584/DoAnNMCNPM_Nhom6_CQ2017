const db = require("../utils/db.js");

module.exports = {
  add: async player => {
    const query = `insert into VANDONGVIEN 
                        (name, birthDay, skill, tenToChuc)
                        values ('${player.name}', '${player.birthDay}', '${player.skill}','${player.tenToChuc}')`;
    const result = await db.load(query);
  }
};
