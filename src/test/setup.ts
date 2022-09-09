import { afterAll, afterEach, beforeAll } from "vitest";
import { setupServer } from "msw/node";
import { rest } from "msw";
import exampleData from "../../cypress/fixtures/example.json";

const BASE_URL = "https://api.example.com/v1";
const getUrl = (url: string) => `${BASE_URL}/${url}`;

export const restHandlers = [
  rest.get(getUrl(`endpoint/:param?query=value`), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(exampleData));
  }),
  rest.put(getUrl(`anotherEndpoint/:someId/type/:otherId`), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(exampleData));
  }),
  rest.post(getUrl(`someItems/:id`), (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(exampleData));
  }),
];

const server = setupServer(...restHandlers);

// Start server before all tests
beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

//  Close server after all tests
afterAll(() => server.close());

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers());
