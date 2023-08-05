import { collection, getDocs, getFirestore } from 'firebase/firestore'
const db = getFirestore()

const blogsRef = collection(db ?? null, 'blogs')
export async function getBlogs() {
  const snapshot = await getDocs(blogsRef)
  return snapshot.docs.map((d) => d.data())
}

export async function getBlog(slug) {
  const snapshot = await getDocs(blogsRef)
  return snapshot.docs.map((d) => d.data()).find((b) => b.slug === slug)
}
