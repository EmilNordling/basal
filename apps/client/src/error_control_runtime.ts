globalThis.Ok = <T, _K>(value: T) => {
  return {
    err: null,
    ok: value,
  };
};

globalThis.Err = <_T, K>(value?: K) => {
  return {
    err: value || new Error(),
    ok: null,
  };
};
