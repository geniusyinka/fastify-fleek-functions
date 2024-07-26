import fastify from "fastify";

const app = fastify();

app.get("/", async (request, reply) => {
  return { foo: "bar" };
});

app.get("/hello", async (request, reply) => {
  return { hello: "world" };
});

export async function main(param) {
  return app.inject({
    method: param.method,
    url: param.path,
    query: param.query,
    payload: param.body,
    headers: param.headers,
  });
}