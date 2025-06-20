import { db } from '../../../lib/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'

export default async function handler(req, res) {
  const { id } = req.query

  if (req.method === 'GET') {
    const ref = doc(db, 'orders', id)
    const snap = await getDoc(ref)
    if (!snap.exists()) return res.status(404).json({ error: 'Not found' })
    res.status(200).json({ id: snap.id, ...snap.data() })
  } else if (req.method === 'PUT') {
    const ref = doc(db, 'orders', id)
    try {
      await updateDoc(ref, { status: req.body.status })
      const snap = await getDoc(ref)
      res.status(200).json({ id: snap.id, ...snap.data() })
    } catch (err) {
      res.status(500).json({ error: 'Failed to update order', details: err.message })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}
