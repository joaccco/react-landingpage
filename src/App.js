import logo from './logo.svg';
import './App.css';
import Nav from './components/pure/nav';
import Footer from './components/pure/footer';

function App() {
  return (
    <div className="App" class="bg-gradient-to-r from-slate-50 to-slate-300">
    <Nav></Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <blockquote class="text-2xl font-semibold italic text-center text-slate-900">
          Welcome to 
          <span class="before:block before:absolute before:-inset-1 before:-skew-y-3    before:bg-sky-500 relative inline-block">
          <span class="relative text-white">JoaccoDev</span>
          </span>
          a programming platform created by 
          <a
            className="App-link"
            href="https://github.com/joaccco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joaquin Franco
          </a>
        </blockquote>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
