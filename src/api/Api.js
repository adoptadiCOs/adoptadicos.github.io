const baseUrl = "http://localhost:8080/api";

function serverRequest(path, requestOptions) {
  let token = localStorage.getItem("token");
  console.log("token: " + token);
  // Añadimos el token de sesión a la petición si estamos loggeados
  if (token) {
    token = JSON.parse(token);
    requestOptions.headers["Authorization"] = "Bearer " + token;
  }
  console.log(requestOptions);

  return fetch(baseUrl + path, requestOptions).then(async (response) => {
    if (response.ok) {
      return await response.json();
    }
    throw await response.json();
  });
}

function postRequest(path, body) {
  let requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return serverRequest(path, requestOptions);
}

// function putRequest(path, body) {
//   let requestOptions = {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(body),
//   };
//   return serverRequest(path, requestOptions);
// }

function getRequest(path, body = {}) {
  let params = new URLSearchParams();
  for (let [key, value] of Object.entries(body)) {
    params.append(key, value);
  }

  let requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };
  return serverRequest(
    path + (params.length > 0 ? "?" + params : ""),
    requestOptions
  );
}

export async function registerUser({
  username,
  email,
  password,
  repeatedPassword,
}) {
  return postRequest("/users", arguments[0]);
}

export async function loginUser({ email, password }) {
  return postRequest("/users/login", arguments[0]);
}

export async function logoutUser() {
  return getRequest("/users/logout");
}

// TODO: no me dicen si algo esta o no listo
// export async function updateUser({ bio, avatar }) {
//   return putRequest("/users", arguments[0]);
// }