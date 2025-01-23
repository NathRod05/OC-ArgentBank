async function loginUser(body) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "post", // correction ici
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body), // conversion au format JSON
  });
  if (response.ok) {
    const loginInfo = await response.json();
    return loginInfo;
  } else {
    alert("Identifiants invalides. Veuillez réessayer.");
  }
}

export default loginUser;
