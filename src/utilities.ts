import React from 'react';

export function api<T>(url: RequestInfo, options: RequestInit | undefined = undefined): Promise<T> {
  return fetch(process.env.REACT_APP_BONS_BASE_URL + url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} | ${response.statusText}`);
      }
      return response.json() as Promise<T>
    })
    .catch((error: Error) => {
      throw error /* <-- rethrow the error so consumer can catch it */
    })
};

// https://www.carlrippon.com/react-context-with-typescript-p4/
export function createCtx<ContextType>() {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = React.useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a Provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

export const noop = () => {};