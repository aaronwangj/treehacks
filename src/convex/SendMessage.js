import { mutation } from "./_generated/server";

export default mutation(({ db }, description, title) => {
  const message = { description, title };
  console.log(message);
  db.insert("lessons", message);
});