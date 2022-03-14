import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
});

export default mongoose.model('Product', productsSchema);
