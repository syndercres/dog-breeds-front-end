export const BackendURL =
  process.env.NODE_ENV === "production"
    ? "https://breed-battle.onrender.com/"
    : "http://localhost:4000";
