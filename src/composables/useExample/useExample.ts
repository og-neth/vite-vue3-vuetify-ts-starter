import { ref } from "vue";

export default function useExample() {
  const myProp = ref(0);
  function myFunc() {
    return myProp.value++;
  }

  return {
    myProp,
    myFunc,
  };
}

