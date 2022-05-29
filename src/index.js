import { firebaseConfig } from '../firebaseConfig'
import { initializeApp } from 'firebase/app'
import {
  collection,
  getDocs,
  getFirestore
} from 'firebase/firestore'

// initializing app
initializeApp(firebaseConfig)

// connect firestore db
const db = getFirestore()

// reference the db collection
const collectionRef = collection(db, 'books')

// reference the collection document
getDocs(collectionRef)
.then((snapshot) => {
  let books = []
  snapshot.docs.forEach((doc) => {
    books.push({...doc.data(), id: doc.id})
  })
  console.log(books)
})
.catch(error => console.log(error.message))