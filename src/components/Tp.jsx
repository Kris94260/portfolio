
import "../App.css";
import "./Documents.css"

function Tp() {
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
        <p className="menu">Documentations</p><br/>
        <div className="docs">
        <iframe src="/alcasar.pdf" width="50%" height="900px" />
        <iframe src="/glpi.pdf" width="50%" height="900px" /></div>

        <div className="docs">
        <iframe src="/zabbix.pdf" width="50%" height="900px" />
        <iframe src="/openvpn.pdf" width="50%" height="900px" />
        
        </div>
        <div className="docs">
        <iframe src="/truenas.pdf" width="50%" height="900px" />
        <iframe src="/cert.pdf" width="50%" height="900px" />
        
        </div><br/><br/>

    
    </body>
    </>

  );
};


export default Tp;