
import "../App.css";
import "./Documents.css"

function Haproxy() {
  return (
    <>
    <header className="header">
      <nav>
        <div className="logo">
          <a href="/">
          &lt;Kris
            <span>Moreau&#47;&gt;</span>
          </a>
        </div>
        <div className="menu">
        <a href="/" className="navbar-btn">RETOUR</a>
        </div>
      </nav>
    </header><br/><br/>

    <body>
        <p className="menu">Documentation de HaProxy</p><br/>
        <div className="docs">
        <iframe src="/haproxy.pdf" width="50%" height="900px" />
        </div><br/><br/>

    
    </body>
    </>

  );
};


export default Haproxy;