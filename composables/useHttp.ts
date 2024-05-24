interface IUseHttp {
  method?: string;
  endpoint: string;
}

const useHttp = async ({ method = "GET", endpoint }: IUseHttp) => {
  const { data, pending, error, refresh } = await useFetch(endpoint, {
    method,
    baseURL: "https://swapi.dev/api/",
  });

  return { data, pending, error, refresh };
};

export default useHttp;
