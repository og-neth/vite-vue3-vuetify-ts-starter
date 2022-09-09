#!/usr/bin/env bash
set -e
COMPOSABLE=$1
DIR=${!#}

if [[ $1 == *"-"* ]]; then
    COMPONENT_UPPER=$( echo ${1} | gsed -r 's/(^|-)(\w)/\U\2/g')
else
    COMPONENT_UPPER=$( echo ${1:0:1} | tr -s  'a-z'  'A-Z')${1:1}
fi

NAME="use${COMPONENT_UPPER}"

file="$NAME.ts"
test="$NAME.test.ts"

echo 'Creating composable files...'
echo ""

if [ -d "src/composables/$NAME" ]; then
    echo 'Directory exists'
    echo ""
    cd src/composables/$DIR
else
    echo "Creating new directory path composables/$NAME..."
    echo ""
    cd src/composables && mkdir $NAME && cd $NAME
    echo "Created composables/$NAME..."
    echo ""
fi

# we are already in the chosen directory

touch $file && touch $test

echo 'Creating file boilerplate...'

cat <<EOF > $file
import { ref } from "vue";

export default function $NAME() {
  const myProp = ref(0);
  function myFunc() {
    return myProp.value++;
  }

  return {
    myProp,
    myFunc,
  };
}

EOF

echo ""
echo "Done with $file..."
echo ""

cat << EOF > $test
/**
 * @description: https://vitest.dev/api/
 */
import { describe, it, beforeAll, afterAll, expect } from "vitest";
import $NAME from "./$NAME";

let myPropRef, myFuncRef;

describe("$NAME", () => {
  beforeAll(() => {
    const { myProp, myFunc } = $NAME();
    myPropRef = myProp;
    myFuncRef = myFunc;
  });

  it("should do something", () => {
    expect(myPropRef.value).toBe(0);

    myFuncRef();
    expect(myPropRef.value).toBe(1);
  });
});

EOF

echo "Done with $test..."
echo ""

echo "Done scaffolding $NAME..."
echo ""


