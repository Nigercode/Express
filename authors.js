const express = require('express')
const bodyParser = require('body-parser')
const authorsRouter = express.Router()


const authors = [

    { name: "auth 1",
      id: 1,
      pages: 450
    },
    {   name: "Auth 2",
      id: 2,
      pages: 450
    },
    {
        name: " Auth 3",
      id: 3,
      pages: 450
    }
    
    ]
    

   // TO CREATE 
   authorsRouter.post("/", (req, res) => {
    const newData = req.body;
    const lastAuthorId = authors[authors.length-1].id;
    const newId = lastAuthorId + 1;
    const newAuthor = {...newData, id:newId};
    authors.push(newAuthor)
    res.status(200).json(authors)
    

})


   //TO READ ONE OR ALL
    authorsRouter.get('/', (req,res)=> {
    res.send(authors)
    })

    authorsRouter.get('/:id', (req,res)=> {
      const id = req.params.id
      const author = authors.find(author =>{return author.id === parseInt(id)
      })
      if(!author){
        res.send('author does not exist')
      }

      res.send(author)
      })
      
  
    // ---TO UPDATE

    authorsRouter.put('/:id', (req, res) => {
       const author = authors.find(author =>{return author.id === parseInt(id)
       })
      if(!author){
      res.send('author does not exist')
      }
      const newUpdate = req.body;
     const id = req.params.id;
     const index = authors.findIndex(author => author.id == id)

     if (index == -1) {
      res.status(404).end("author not found")
      return
    }
     authors[index] = {...authors[index], ...newUpdate}

    res.send(authors)
   
    })


    // TO DELETE 
    authorsRouter.delete('/:id', (req,res)=> {
        const id = req.params.id
        const Index = authors.findIndex(author =>{return author.id === parseInt(id)
        })
        if(Index == -1){
          res.send('author does not exist')
        }
  
      authors.splice(Index,1)
      res.send(authors)
        })

        module.exports = authorsRouter