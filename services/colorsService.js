export default async function querySubgraph(query) {
  const data = await fetch(
    "https://api.thegraph.com/subgraphs/name/cameron-morrongiello/colors-wtf-dev-goerli",
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