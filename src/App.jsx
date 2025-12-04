import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const initialFormData = {
  author: "",
  title: "",
  body: "",
  public: true
}

function App() {
  const [formData, setFormData] = useState(initialFormData)
  const [articles, setArticles] = useState([
    {
      author: 'piermenti sfracellozzi',
      title: 'come andare in bagno serenamente',
      body: 'lorem ipsum che va in bagno',
    },
    {
      author: 'cornelio rompiangurie',
      title: 'come rompere le angurie',
      body: 'le angurie ho rotto '
    }
  ])

  function aggiornaForm(event) {
    const { name, value } = event.target;
    setFormData(prec => ({ ...prec, [name]: value }));
  }

  function aggiungiArticolo(event) {
    event.preventDefault();
    setArticles((current) => [...current, formData]);
    setFormData(initialFormData);
  }

  return (
    <>
      <header className="bg-primary text-white text-center py-4 mb-4">
        <h1 className="mb-0">i nuovi articoli della miao corporation</h1>
      </header>
      
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h2>Articoli recenti</h2>
            <div className="row g-4">
              {articles.map((article, index) => (
                <div key={index} className="col-md-6">
                  <div className="card h-100" style={{width: '100%'}}>
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <h6 className="card-subtitle mb-2 text-body-secondary">
                        autore: {article.author}
                      </h6>
                      <p className="card-text">{article.body}</p>
                      <a href="#" className="card-link">vedi l'intero articolo</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="col-md-4">
            <h2>Aggiungi nuovo articolo</h2>
            <form onSubmit={aggiungiArticolo}>
              <div className="mb-3">
                <input 
                  type="text"
                  name="author"
                  className="form-control"
                  value={formData.author}
                  onChange={aggiornaForm}
                  placeholder="Inserisci il tuo nome"
                />
              </div>
              
              <div className="mb-3">
                <input 
                  type="text"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={aggiornaForm}
                  placeholder="Titolo dell'articolo"
                />
              </div>
              
              <div className="mb-3">
                <textarea 
                  name="body"
                  className="form-control"
                  rows="5"
                  value={formData.body}
                  onChange={aggiornaForm}
                  placeholder="Testo dell'articolo"
                />
              </div>
              
              <button type="submit" className="btn btn-primary w-100">
                Aggiungi articolo
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
