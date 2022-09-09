/**
 * @description: https://vitest.dev/api/
 */
import { describe, it, beforeAll, expect } from "vitest";
import { Ref } from "vue";
import useExample from "./useExample";

let myPropRef: Ref<number>, myFuncRef: () => void;

describe("useExample", () => {
  beforeAll(() => {
    const { myProp, myFunc } = useExample();
    myPropRef = myProp;
    myFuncRef = myFunc;
  });

  it("should do something", () => {
    expect(myPropRef.value).toBe(0);

    myFuncRef();
    expect(myPropRef.value).toBe(1);
  });
});
