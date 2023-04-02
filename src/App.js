import { useState } from 'react'
import { supabase } from './supabaseClient';
import logo from './logo.svg';
import './App.css';

function Library() {
  const [myBook, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: Books, error } = await supabase
    .from('Books')
    .select('*')
   setMyBooks(books);
  }
  
  getBooks();
  return (
    <table>
    {
      myBooks.map(b => {
        <tr>
          <td>{b.title}</td>
          <td>{b.author}</td>
          <td>{b.description}</td>
        </tr>
      })
    }
    </table>
  );
}

const magazines = [
  {id: 1, title: 'Journalism', theme: 'communication', isAvailable: true},
  {id: 2, title: 'Media Politics', theme: 'media', isAvailable: true},
  {id: 3, title: 'Mass Communication', theme: 'communication', isAvailable: false},
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'blue':'orange'
      }}
    >
      <h3>{zine.title}</h3>
    </li>
  );
  return(
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'Zhamilia',
  author: 'Chyngyz Aitmatov',
  published: '1958',
  image: logo,
  width: '200',
  height: '300'
};

function Bookshelf() {
  return (
    <div>
      <h2>{book.title}({book.published})</h2>
      <p>{book.author}</p>
      {book.image &&
      <img
        className="bookCover"
        src={book.image}
        alt={book.title+ ' cover'}
        style={{
          width: book.width,
          height: book.height
        }}
      />
      } 
    </div>
  );
}

function MagicButton() {
  const [count, setCount] = useState(0);
  function doMagic(){
    setCount(count + 1);
  }
  return (
    <div>
      <h5>This is a magic button</h5>
        <button onClick={doMagic}>Magic {count}</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <Bookshelf />
        <ZineRack />
        <MagicButton />
      </header>
      
    </div>
  );
}

export default App;
