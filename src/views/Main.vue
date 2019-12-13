<template>
  <div>
    <v-card class="mx-auto" max-width="30rem" margin-top="2rem" tile>
      <v-list-item three-line v-for="(team) of teams" :key="team.id">
        <router-link :to="{path: '/desc' + team.id}">
          <v-list-item-avatar>
            <v-img
              alt="Vuetify Logo"
              class="shrink mr-2"
              contain
              :src="team.logo_url"
              transition="scale-transition"
              max-height="30"
              position="left"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{team.name}}</v-list-item-title>
            <v-list-item-subtitle>Fouded: {{team.founded}}</v-list-item-subtitle>
            <v-list-item-subtitle>City: {{team.city}}</v-list-item-subtitle>
          </v-list-item-content>
        </router-link>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return { teams: [] };
  },
  mounted() {
    fetch("https://alphafx-code-test-api.herokuapp.com/api/teams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(({ data }) => {
        this.teams = data;
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  text-decoration: none;
}
</style>
