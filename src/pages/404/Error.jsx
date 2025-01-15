import "./error.css";

function Error() {
  return (
    <main className="not-found">
      <h1 className="error">404</h1>
      <p className="error-text">Oups! La page que vous demandez nexiste pas.</p>
      <nav>
        <a className="lien" href="/">
          Retourner sur la page d’accueil
        </a>
      </nav>
    </main>
  );
}

export default Error;
