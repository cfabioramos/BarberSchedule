class AppTypedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UserTypeError";
  }
}

export default AppTypedError;
