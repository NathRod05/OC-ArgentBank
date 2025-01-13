import "./error.css";

function Error() {
  return (
    <div className="not-found">
      <h1 className="error">404</h1>
      <p className="text">Oups! La page que vous demandez nexiste pas.</p>
      <nav>
        <a className="lien" href="/">
          Retourner sur la page d’accueil
        </a>
      </nav>
    </div>
  );
}

export default Error;
