const apiURL = "https://wedev-api.sky.pro/api/user";

const signin = async ({ login, password }) => {
  const response = await fetch(apiURL + "/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Неверный логин или пароль");
  }

  if (!response.ok) {
    throw new Error("Ошибка при авторизации");
  }

  return response.json();
};

const signup = async ({ login, password, name }) => {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже существует");
  }

  if (!response.ok) {
    throw new Error("Ошибка при регистрации");
  }

  return response.json();
};

export { signin, signup };
