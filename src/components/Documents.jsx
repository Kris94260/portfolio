
import "../App.css";
import "./Documents.css"

function Documents() {
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
        <p className="menu">Epreuve E4</p><br/>
        <div className="docs">
        <iframe src="/E4.pdf" width="50%" height="900px" />
        </div><br/><br/>

        <p className="menu">Epreuve E5</p><br/>
        <div className="docs">
        [1]<iframe src="/sp1.pdf" width="50%" height="900px" />
        [2]<iframe src="/sp2.pdf" width="50%" height="900px" />
        </div><br/><br/>

        <p className="menu">Stages</p><br/>
        <div className="docs">
        <iframe src="/stages.pdf" width="50%" height="900px" />
        
        </div>
    
    </body>
    </>

  );
};


export default Documents;