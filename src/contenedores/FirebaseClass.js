import admin from 'firebase-admin'
import serviceAccount from '../../firebase.json'


let count = 0;
class FirebaseClass {
  constructor(collectionName) {
    this.connect()
    this.db = admin.firestore();
    this.collection = this.db.collection(collectionName);
  }

  connect() {
    if (!count) {
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
      });
      console.log("conectado a Firestore!")
    }
    count++
  }

  async getAll() {
    try {
      const all = await this.collection.get();
      return all.docs.map(doc =>
      ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (err) {
      throw new Error(err);
    }
  }
  async getOne(id) {
    try {
      const one = await this.collection.doc(id).get();
      return {
        id: one.id,
        ...one.data()
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async create(doc) {
    try {
      const newDoc = await this.collection.add(doc);
      return {
        id: newDoc.id,
        ...doc
      }
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(id, doc) {
    try {
      const updatedDoc = await this.collection.doc(id).update(doc);
      return updatedDoc;
    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(id) {
    try {
      const deletedDoc = await this.collection.doc(id).delete();
      return deletedDoc;
    } catch (err) {
      throw new Error(err);
    }
  }

}

export default FirebaseClass;