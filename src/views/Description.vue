<template>
  <div>
    <v-card class="mx-auto" max-width="30rem" margin-top="2rem" tile>
      <v-list-item three-line v-for="(player) of players" :key="player.id">
        <router-link :to="{path: '/player' + player.id}">
          <v-list-item-avatar>
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src="player.flag_url"
              transition="scale-transition"
              max-height="40"
              position="left"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{player.name}}</v-list-item-title>
            <v-list-item-subtitle>Nationality: {{player.nationality}}</v-list-item-subtitle>
            <v-list-item-subtitle>Position: {{player.position}}</v-list-item-subtitle>
          </v-list-item-content>
        </router-link>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Description",
  data() {
    return { players: [] };
  },
  mounted() {
    fetch("https://alphafx-code-test-api.herokuapp.com/api/teams/players", {
      method: "POST",
      body: {
        team_id: this.$route.params.id
      }
    })
      .then(res => res.json())
      .then(({ data }) => {
        this.players = data;
      });
  }
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
