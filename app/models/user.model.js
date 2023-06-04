const sql = require("../config/database.config");
const User = function (user) {
  this.firstname = user.firstname;
  this.lastname = user.lastname;
  this.email = user.email;
  this.mobile = user.mobile;
  this.password = user.password;
  this.role = user.role;
};

User.create = (newUser, result) => {
  sql.query("INSERT INTO User SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Created User: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};
User.findById = (id, result) => {
  sql.query(`SELECT * FROM User WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("Found User: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};
User.getAll = (result) => {
  let query = "SELECT * FROM User";
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("Users: ", res);
    result(null, res);
  });
};
User.updateById = (id, user, result) => {
  sql.query(
    "UPDATE User SET firstname = ?, lastname = ?, email = ?, mobile = ? WHERE id = ?",
    [user.firstname, user.lastname, user.email, user.mobile, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Updated user: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};
User.updateRoleById = (id, user, result) => {
  sql.query(
    "UPDATE User SET role = ? WHERE id = ?",
    [user.role, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      console.log("Updated Role: ", { id: id, ...user });
      result(null, { id: id, ...user });
    }
  );
};
User.remove = (id, result) => {
  sql.query("DELETE FROM User WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      return;
    }
    console.log("Deleted User with id: ", id);
    result(null, res);
  });
};
User.removeAll = (result) => {
  sql.query("DELETE FROM User", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log(`Deleted ${res.affectedRows} users`);
    result(null, res);
  });
};

module.exports = User;
