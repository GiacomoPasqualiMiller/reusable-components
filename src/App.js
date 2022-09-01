import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="">
      <div className='border-red-600 border-2 border-dotted w-full flex justify-center p-4 mb-4'>
        <span className="text-2xl uppercase font-bold text-center w-full mx-auto">reusable components</span>
      </div>

      {/* FOOTER FONDAMENTA */}
      <div className="btn-footer-container">
          <button className="save-btn" type="button">
            Salva
          </button>
          <button
            className="close-btn"
            type="button"
          >
            Chiudi
          </button>
        </div>
    </div>
  );
}

export default App;
