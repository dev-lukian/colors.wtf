export default async function getSearchedColors(query) {
  const data = await fetch(
    "https://api.thegraph.com/subgraphs/name/cameron-morrongiello/colors-wtf-subgraph-dev-v1",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    }
  );
  return await data.json();
}