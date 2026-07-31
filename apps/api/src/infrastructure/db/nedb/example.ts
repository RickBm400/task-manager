import { NeDBClass } from './index.js';

const db = new NeDBClass();

const users = db.model<{ name: string; age: string }>('users');
const credits = db.model<{ name: string; age: string }>('credits');
const tasks = db.model('tasks');

export default db;

(async () => {
  console.log(await users.find({}));
  console.log(await credits.find({}));
})();
