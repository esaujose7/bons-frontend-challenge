export function api<T>(url: string, options: Object = {}): Promise<T> {
  return fetch(url, options)
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
