import { mutation } from "./_generated/server";

export default mutation(({ db }, name, description, published) => {
  const message = { name, description, published };
  db.insert("courses", message);
});