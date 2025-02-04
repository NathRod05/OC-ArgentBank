async function loginUser(body) {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (response.ok) {
    const loginData = await response.json();
    const loginToken = loginData.body.token;
    return loginToken;
  } else {
    alert("Incorrect user or password. Please try again.");
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
    console.error("User unavailable");
    return null;
  }
}

async function editUsername(username, token) {
  const body = JSON.stringify({ userName: username });
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: body,
  });
  if (response.ok) {
    const editDate = await response.json();
    const updateUsername = editDate.body;
    return updateUsername;
  } else {
    alert("Enable to change username");
    return null;
  }
}

export { loginUser, fetchUserProfile, editUsername };
