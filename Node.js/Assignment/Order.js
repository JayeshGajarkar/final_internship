const express=require("express");
const app=express();
app.use(express.json());
const {sql,poolPromise}=require("./database")

//orders={};

async function getOrder(id){
    return new Promise((resolve,reject)=>{
        console.log("Order is in preparation");
        setTimeout(async ()=>{

            //orders[id].status="Ready";
            const pool= await poolPromise;
            await pool.request().input("id",sql.INT,id).input("status",sql.NVarChar,"Ready")
            .query("UPDATE Order_J SET status=(@status) WHERE id=(@id)");

            // resolve(`Order is ready for ${id}|${orders[id].item}|${orders[id].name}`);
            resolve("Order is ready ..!")
        },20000)
    })
}

app.post("/order",async (req,res)=>{
    try{
        const {id,item,name}=req.body;
        //orders[id]={foodItem:item,customerName:name,status:"Processing"};
        console.log(`Order received for ${id} ${item} from ${name}`);
        
        const pool= await poolPromise;
        await pool.request().input("id",sql.INT,id)
        .input("item",sql.NVarChar,item).input("name",sql.NVarChar,name).input("status",sql.NVarChar,"Processing")
        .query("INSERT INTO Order_J (id,item,name,status) VALUES(@id,@item,@name,@status)");

        getOrder(id).then(()=>{
            console.log("Order is Ready");
        }).catch((err)=>{
            console.log(err);
        })

        res.send("Order received sucessfully");

    }catch(error){
        console.log(error);
        res.status(500).send(error.message);
    }
})


app.get('/order/:id',async(req,res)=>{
    try{
      id=req.params.id;
      
      const pool= await poolPromise;
      const result=await pool.request().input("id",sql.INT,id)
      .query("SELECT * FROM Order_J WHERE id=(@id)");

      res.send(result.recordset);
    }catch(error){
        console.log("Error",error)
        res.send(error);
    }
});

app.listen(3000,()=>{
    console.log("Server running on port 3000:")
})