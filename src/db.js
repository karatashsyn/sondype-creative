import { collection, getDocs, getFirestore } from 'firebase/firestore'
const db = getFirestore()

const blogsRef = collection(db, 'blogs')

export async function getBlogs() {
  const snapshot = await getDocs(blogsRef)
  return snapshot.docs.map((d) => d.data())
}
