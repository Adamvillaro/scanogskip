import { db } from '../../../lib/firebase'
import { collection, addDoc, getDocs, serverTimestamp, query, orderBy } from 'firebase/firestore'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { store, items, total } = req.body
    try {
      const docRef = await addDoc(collection(db, 'orders'), {
        store: store || '',
        items: items || [],
        total: total || 0,
        status: 'pending',
        createdAt: serverTimestamp()
      })
      res.status(200).json({ id: docRef.id, status: 'pending' })
    } catch (err) {
      res.status(500).json({ error: 'Failed to create order', details: err.message })
    }
  } else if (req.method === 'GET') {
    try {
      const q = query(collection(db, 'orders'), orderBy('createdAt', 'desc'))
      const snapshot = await getDocs(q)
      const orders = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
      res.status(200).json(orders)
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch orders', details: err.message })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
