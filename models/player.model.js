const db = require("../utils/db.js");

module.exports = {
  //   add: async player => {
  //     const query = `insert into VANDONGVIEN
  //                         (name, birthDay, skill, tenToChuc)
  //                         values ('${player.name}', '${player.birthDay}', '${player.skill}','${player.tenToChuc}')`;
  //     const result = await db.load(query);
  //     return result[0].insertedId;
  //   }
  add: async entity => {
    const result = await db.add("VANDONGVIEN", entity);
    return result.insertedId;
  }
};
