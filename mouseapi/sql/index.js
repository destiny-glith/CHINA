const sql={

    insert: function(collection,insertData){
       return new Promise(function(resolve,reject){
        collection.insertMany(insertData,(err,data)=>{
            if(err) throw err;
            resolve(data)
    })

       })
    },
    
    // find (collection,whereObj,showObj){
    //     collection.find(whereObj,showObj).exec((err,data)=>{
    //         if (err) throw err;
    //         console.log(data);
    //     })
    // }
    find(collection,whereObj,showObj){

        return new Promise(function(resolve,reject){

            collection.find(whereObj,showObj).exec((err,data)=>{
                if(err)throw err;
                resolve(data);
                
            })


        })
    },






    update (collection,whereObj,updateObj,updateType){

        updateType=updateType||'updateOne'

        return new Promise((resolve,reject)=>{
            collection[updateType](whereObj,updateObj,(err,data)=>{
                if (err) throw err;
                resolve(data)
            })
        })

    },
    sort: function * (Collection, whereObj, showObj, sortObj) {
        return new Promise(function (resolve, reject) {
          Collection.find(whereObj, showObj).sort(sortObj).exec((err, data) => {
            if (err) throw err;
            resolve(data)
          })
        })
      },
    
// 分页方法
      paging: function(Collection, whereObj, showObj,count,pageNum) {   //查询 find().limit().skip()
        return new Promise(function (resolve, reject) {
          Collection.find(whereObj, showObj).limit(count).skip((pageNum - 1)*count).exec((err, data) => {
            if (err) throw err;
            resolve(data)
          })
        })
      },



    
      delete (collection,whereObj,deleteType){
        
        return new Promise((resolve,reject)=>{
            
            deleteType=deleteType||'deleteOne';
            
            collection[deleteType](whereObj,(err,data)=>{ //注意 collection.deleeOne(deleteMany)()
                if(err) throw err;
               resolve(data);
                
            })
        })

    }


    
}

module.exports=sql;