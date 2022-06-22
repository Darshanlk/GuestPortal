export const fetchFunction = async (url, body, reqType, authToken) => {
  const result = await fetch(url, {
    method: reqType,
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: authToken,
    },
    body:JSON.stringify(body)
  });

  const res = await result.json();
  console.log(res)

  return res;
};
