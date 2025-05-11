export const login = () => {
  localStorage.setItem("token", "your_token_value");
};

export const logout = () => {
  localStorage.removeItem("token");
};

export const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};

export const saveUser = (email, password) => {
  localStorage.setItem("user", JSON.stringify({ email, password }));
};

export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
