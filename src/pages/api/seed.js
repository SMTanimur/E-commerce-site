import nc from 'next-connect';
import { Products } from 'utils/data';
import db from 'utils/db';
import Product from 'utils/models/product';

const handler = nc()
handler.get(async(req, res) => {
  await db.connect()
 await Product.deleteMany()
 await Product.insertMany(Products)
  await db.disconnect()
  res.send({massage:'seeded successfully'})
})

export default handler
