const apiURL = "https://wedev-api.sky.pro/api/kanban";

const getTasks = async ({ token }) => {
  const response = await fetch(apiURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка при загрузке задач");
  }

  return response.json();
};

const addTask = async ({ task, token }) => {
  const response = await fetch(apiURL, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка при добавлении задачи");
  }

  return response.json();
};

const updateTask = async ({ task, token }) => {
  const response = await fetch(apiURL + `/${task._id}`, {
    method: "PUT",
    body: JSON.stringify(task),
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка при обновлении задачи");
  }

  return response.json();
};

const deleteTask = async ({ id, token }) => {
  const response = await fetch(apiURL + `/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка при удалении задачи");
  }

  return response.json();
};

export { getTasks, addTask, updateTask, deleteTask };
