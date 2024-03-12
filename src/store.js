const initialState = {
  count: 0,
};

export const states = [initialState];
export const notifiers = [];

export const update = (action) => {
  if (typeof action !== 'function') {
    throw new Error('action should be a function');
  }

  const prev = Object.freeze({ ...states[0] });
  const next = Object.freeze({ ...action(prev) });

  const handler = (notify) => notify(prev, next);
  notifiers.forEach(handler);

  states.unshift(next);
};

export const subscribe = (notify) => {
  notifiers.push(notify);

  const unsubscribe = () => {
    const result = notifiers.filter((current) => {
      current !== notify;
    });
    notifiers = result;
  };

  return unsubscribe;
};
