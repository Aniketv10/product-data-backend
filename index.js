const express = require(express);
const ProductData = require('./ProductData');
const app = express();
require('./config');
const product = require('./ProductData');
app.use(express.json());

app.post('/product',async(req,res)=>{
    let product = new ProductData(req.body);
    let result = await product.save();
    res.send(result)
})

app.listen(7000,()=>{
    console.log(`$ listening the port 7000`)
});