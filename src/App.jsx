import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const initialFormData ={
  author:"",
  title: "",
  body:"",
  public:true
  }
function App() {
const [formData,setFormData]= useState(initialFormData)
const [article,setArticle] = useState([
  'ma sei andato in bagno?: di Antonio msio',
  ' controlli lo sciacquone?: di camillo ',
  'sei mai andato da qualche parte nello spazio?: di genoveffo'
])
const [newArticles,setNewArticles] = useState('')
function controllaSubmit (event){
  event.preventDefault();
  console.log('submit:',{newArticles});
  setNewArticles('')
  }
  function aggiornaForm(event){
    const key = event.target.author
    const inputTitle = event.target.title
    const inputText = event.target.body
  }
function aggiungiArticolo (event){
  event.preventDefault();
  setArticle((current)=>[...current, formData]);
  setFormData(initialFormData)
}
  return (
    <>
     <header>
      <h1>i nuovi articoli della miao corporation</h1>
     </header>
     <div className="container">
        <div className="row justify-content-between">
          <span>{article}</span>
          <div className="">
            <form onSubmit={aggiungiArticolo} action="">
             <input type="text" 
             name='author'
             id='name'
             className='form-control'
             value={formData.author}
             onChange={aggiornaForm}
             placeholder='inserisci il tuo nome per questo nuovo articolo'
             />
             <input type="text" 
             id='body'
             name='body'
             className='form-control'
             value={formData.body}
             onChange={aggiornaForm}
             placeholder='aggiungi qui il testo per questo articolo'
             />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
