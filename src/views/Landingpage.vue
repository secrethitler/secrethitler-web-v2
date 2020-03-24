<template>
  <div>
    <div class="border-b-4 border-red-800 bg-red-600 text-yellow-200">
      <div class="container">
        <div class="flex flex-wrap items-center relative lg:w-3/4 mx-auto lg:px-4">
          <div class="w-full lg:w-1/2 py-6 lg:pb-16 lg:pt-12">
            <h1
              class="font-old font-bold uppercase tracking-widest text-center lg:text-left mb-4 lg:mb-0 text-5xl lg:text-6xl whitespace-no-wrap"
            >Secret Hitler</h1>
            <div class="text-white font-serif text-xl mb-12">
              <p
                class="mb-4"
              >Secret Hitler is a social deduction game for 5-10 people about finding and stopping the Secret Hitler.</p>
            </div>
            <div class="flex flex-wrap">
              <router-link
                :to="{ name: 'game.join' }"
                class="btn lg:mr-6 w-full lg:w-auto mb-4 lg:mb-0"
              >Join Game</router-link>

              <router-link
                :to="{ name: 'game.create' }"
                class="btn btn--secondary btn--fancy w-full lg:w-auto"
              >
                <span>Create a new Game</span>
              </router-link>
            </div>
          </div>
          <div class="w-full lg:w-1/2 flex justify-center relative py-4">
            <img
              src="../assets/landingpage/illustration.png"
              alt="Illustration"
              class="illustration mx-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-yellow-100 border-b-2 border-yellow-300">
      <div class="container flex justify-center">
        <div class="flex flex-wrap relative lg:w-3/4 -mx-4">
          <div class="w-full lg:w-1/2 pt-12 lg:px-4 lg:pr-20">
            <div>
              <img src="../assets/landingpage/liberal.png" alt />
            </div>
            <div>
              <blockquote>
                "We are gonna get dem nazis."
                <br />
                <span>Josef Eisenhauer</span>
              </blockquote>
            </div>
          </div>
          <div class="w-full lg:w-1/2 py-12 text-gray-700 font-serif text-lg px-4">
            <h3 class="font-old text-4xl mb-4">How do you play?</h3>
            <p
              class="mb-6"
            >Players are secretly divided into two teams: the liberals, who have a majority, and the fascists, who are hidden to everyone but each other. If the liberals can learn to trust each other, they have enough votes to control the elections and save the day. But the fascists will say whatever it takes to get elected, advance their agenda, and win the game.</p>
            <h3 class="font-old text-3xl mb-8">Do you have friends?</h3>
            <router-link :to="{ name: 'game.create' }" class="btn btn--red">
              <span>Start a lobby</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="container pt-8 lg:pt-12 pb-4">
      <h3 class="px-4 mb-8 font-old text-5xl text-center">The Parties</h3>
      <div class="-mx-4 mb-12 flex justify-center items-center">
        <div class="px-4">
          <img src="../assets/role_fascist.jpg" alt="Fascist" />
        </div>
        <div class="px-4 font-old text-6xl">VS</div>
        <div class="px-4">
          <img src="../assets/role_liberal.jpg" alt="Fascist" />
        </div>
      </div>

      <div class="py-4 mb-4 flex justify-center">
        <img src="../assets/landingpage/trenner.png" alt />
      </div>

      <h3 class="px-4 mb-8 font-old text-5xl text-center">What people say</h3>

      <div class="flex flex-wrap justify-around -mx-4 py-4">
        <div class="px-4 mb-4 w-full lg:w-auto">
          <blockquote>
            "Liberals make me sick!"
            <br />
            <span>Adolf Hitler, probably</span>
          </blockquote>
        </div>
        <div class="px-4 mb-4 w-full lg:w-auto">
          <blockquote>
            "This is so much fun!"
            <br />
            <span>Tim</span>
          </blockquote>
        </div>
        <div class="px-4 mb-4 w-full lg:w-auto">
          <blockquote>
            "Why are you yelling at me?"
            <br />
            <span>Some dude getting yelled at</span>
          </blockquote>
        </div>
        <div class="px-4 mb-4 w-full lg:w-auto">
          <blockquote>
            "Fascism isn't funny..."
            <br />
            <span>Yes it is</span>
          </blockquote>
        </div>
      </div>

      <div class="flex justify-center py-8">
        <router-link :to="{ name: 'game.join' }" class="btn btn--red">Join a Game</router-link>
      </div>
    </div>

    <div class="bg-yellow-100 border-b-2 border-yellow-300 font-serif">
      <div class="container py-12">
        <div class="lg:w-3/4 mx-auto">
          <h3 class="text-center font-old text-6xl mb-6">Rules</h3>
          <div class="flex flex-wrap -mx-4">
            <div class="px-4 mb-6 w-full lg:w-1/2">
              <h3 class="text-xl underline mb-4">Start of the game</h3>
              <p class="mb-4">
                You can play this game with 5-10 Players.
                At the beginning of the game, each player gets assigned one of 3 Roles:
                <strong>Liberal</strong>,
                <strong>Fascist</strong> or
                <strong>Hitler</strong>.
              </p>
              <p
                class="mb-4"
              >Liberals have the majority, but they don't know anybodys role yet. The Facists know secret Hitler and each other and must work in secret and try to elect Hitler with any means necessary.</p>
              <table>
                <tr>
                  <th># Players</th>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                </tr>
                <tr>
                  <th>Liberals</th>
                  <td>3</td>
                  <td>4</td>
                  <td>4</td>
                  <td>5</td>
                  <td>5</td>
                  <td>6</td>
                </tr>
                <tr>
                  <th>Fascists</th>
                  <td>1 + H</td>
                  <td>1 + H</td>
                  <td>2 + H</td>
                  <td>2 + H</td>
                  <td>3 + H</td>
                  <td>3 + H</td>
                </tr>
              </table>
            </div>

            <div class="px-4 mb-6 w-full lg:w-1/2">
              <h3 class="text-xl underline mb-4">How to win the game</h3>
              <p class="mb-4">
                In order to win, the
                <strong>Liberals</strong> need to enact 6 liberal Policies or kill Hitler.
                <br />The
                <strong>Fascists</strong> need to enact only 5 fascist Policies to win the game or they can try to elect as Chancellor Hitler after already having enacted at least 3 of their Policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  @screen lg {
    font-size: 5rem;
  }
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
}

.illustration {
  // bottom: -9rem;
  max-width: 12rem;
}

blockquote {
  @apply font-serif italic text-xl text-gray-600 text-center p-4;

  span {
    @apply ml-20 text-red-700 text-base;

    &::before {
      content: "— ";
    }
  }
}

table {
  @apply w-full;

  th,
  td {
    @apply p-2 text-center;

    &:not(:last-child) {
      @apply border-r border-gray-700;
    }
  }

  tr:not(:last-child) {
    @apply border-b border-gray-700;
  }
}
</style>
