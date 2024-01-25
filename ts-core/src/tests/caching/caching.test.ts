import { d } from "./d";
import { productService } from "./product";

describe("Caching", () => {
  beforeAll(async () => {
    // wait 7s for service definition cache to expire
    // this is not great and we have to create api secrets
    // for each e2e test run to avoid this
    await new Promise((resolve) => setTimeout(resolve, 7000));

    await productService.start();
  }, 10000);

  afterAll(async () => {
    await productService.stop();
  });

  it("should get the cached results when possible", async () => {
    const client = d.client<typeof productService>("product");

    const productId = Math.random().toString();

    const result1 = await client.getProductLongCache(productId, {
      $cacheKey: productId,
    });

    const result2 = await client.getProductLongCache(productId, {
      $cacheKey: productId,
    });

    expect(result1).toEqual(result2);
  }, 10000);

  it("should respect cache ttl", async () => {
    const client = d.client<typeof productService>("product");

    const productId = Math.random().toString();

    const result1 = await client.getProductShortCache(productId, {
      $cacheKey: productId,
    });

    await new Promise((resolve) => setTimeout(resolve, 1000)); // wait for cache to expire

    const result2 = await client.getProductShortCache(productId, {
      $cacheKey: productId,
    });

    expect(result1).not.toEqual(result2);
  });
});
