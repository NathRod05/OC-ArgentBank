async function loginUser(body) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "post", // correction ici
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body), // conversion au format JSON
  });
  if (response.ok) {
    const loginData = await response.json();
    const loginToken = loginData.body.token;
    return loginToken;
  } else {
    alert("Identifiants invalides. Veuillez réessayer.");
  }
}

async function fetchUserProfile(token) {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const userDate = await response.json();
    const userProfile = userDate.body;
    return userProfile;
  } else {
    console.error("utilisateur introuvable");
    return null;
  }
}

export { loginUser, fetchUserProfile };
