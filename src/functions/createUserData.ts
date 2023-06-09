import { getDatabase, ref, set } from 'firebase/database';

export function createUserData(userId: string, email: string | null) {
   const db = getDatabase();
   set(ref(db, 'users/' + userId), {
      email: email,
   });
}
