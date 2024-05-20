const getAppendInputHandler = (e, setter) => {
  const { name, value } = e.target;

  setter((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export { getAppendInputHandler };
