const controller = {
    
    productList: (req,res)=>{
        res.render('productList')
    },
    
    productCart: (req,res)=>{
        res.render('productCart')
    }

    
}

module.exports=controller