export default interface Action<T, P extends object> {
  type: T;
  payload: P;
}
