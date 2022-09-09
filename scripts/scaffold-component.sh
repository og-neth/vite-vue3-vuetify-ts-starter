#!/usr/bin/env bash
set -e
COMPONENT=$1
DIR=${!#}

if [[ $1 == *"-"* ]]; then
    COMPONENT_UPPER=$( echo ${1} | gsed -r 's/(^|-)(\w)/\U\2/g')
else
    COMPONENT_UPPER=$( echo ${1:0:1} | tr -s  'a-z'  'A-Z')${1:1}
fi

NAME="${COMPONENT_UPPER}"

vue="$NAME.vue"
spec="$NAME.spec.ct.ts"

echo 'Creating component file...'
echo ""

if [ -d "src/components/$DIR" ]; then
    echo 'Directory exists'
    echo ""
    cd src/components/$DIR
else
    echo "Creating new directory path components/$NAME..."
    echo ""
    cd src/components && mkdir $NAME && cd $NAME
    echo "Created components/$NAME..."
    echo ""
fi

# we are already in the chosen directory

touch $vue && touch $spec

echo 'Creating vue boilerplate...'

cat <<EOF > $vue
<template>
    <div data-testid="$NAME">
        <v-btn data-testid="myBtn" @click="aFunc">{{ aProp }}</v-btn>
    </div>
</template>

<script setup lang="ts">
// ATTN: DO NOT FORGET TO UPDATE THE UNIT TEST, AT A MINIMUM WE SHOULD AT LEAST TEST THE MOUNTING OF THE COMPONENT
import { ref } from "vue";

const aProp = ref(0);

function aFunc() {
    aProp.value++
}
</script>

<style lang="scss" scoped></style>

EOF

echo ""
echo "Done with $vue..."
echo ""

cat << EOF > $spec
import vuetify from "@/plugins/vuetify"
import { mount } from "@cypress/vue"
import $NAME from "./$NAME.vue"

beforeEach(() => {
  mount($NAME, {
    extensions: {
      use: [vuetify],
    },
  });
});

describe("$NAME", () => {
  it("renders $NAME", () => {
    cy.get("[data-testid=$NAME]").should("exist");
  });

  it("should increment by 1 on click", () => {
    cy.get("[data-testid=myBtn]").click().should("contain", 1);
  });
});

EOF

echo "Done with $spec..."
echo ""

echo "Done scaffolding $NAME..."
echo ""


