<template>
  <div class="main container">
    <div class="cont-box">
      <div class="header box">Presidential Elections</div>
      <div class="content">
        <small>
          <h6></h6>
          <i class="fas fa-asterisk"></i>
          Official results as per IEBC
        </small>
      </div>

      <div class="columns">
        <div class="is-column box m-2">
          <img src="../assets/Raila.webp" alt="" class="candidate-image" />
          <br />
          <b>Raila Amollo Odinga</b>
          <p>6,942,930</p>
          <p>48.85%</p>
          <progress
            class="progress is-small is-primary"
            value="48.85"
            max="100"
          ></progress>
        </div>
        <div class="is-column box m-2">
          <img
            src="../assets/William-Ruto-Biography.webp"
            alt=""
            class="candidate-image"
          />
          <br />
          <b>William Samoei Ruto</b>
          <p>
            <input class="is-danger" type="checkbox" checked />
            <b> President Elect</b>
          </p>
          <p>7,176, 141</p>
          <p>50.49%</p>
          <progress
            class="progress is-small is-warning"
            value="50.49"
            max="100"
            style="background-color: blue"
          ></progress>
        </div>
      </div>
      <div class="columns">
        <div class="is-column box m-2">
          <img
            src="../assets/George-Wajackoyah-.webp"
            alt=""
            class="candidate-image"
          />
          <br />
          <b>George Luchiri Wajackoyah</b>
          <p>61,969</p>
          <p>0.43%</p>
          <progress
            class="progress is-small is-danger"
            value="0.43"
            max="100"
            style="background-color: blue"
          >
            80%
          </progress>
        </div>
        <div class="is-column box m-2">
          <img src="../assets/mwaure.webp" alt="" class="candidate-image" />
          <br />
          <b>David Waihiga Mwaure</b>
          <p>31,987</p>
          <p>0.23%</p>
          <progress class="progress is-small is-success" value="0.23" max="100">
            80%
          </progress>
        </div>
      </div>
    </div>
    <div class="notables">
      <div class="map">
        <h3>Map</h3>
        <!-- <MapChart /> -->
      </div>
      <h3 class="title">Statistics</h3>
      <h4>
        Total Registered Voters: <span>22, 200, 400</span> -- <span>100%</span>
      </h4>
      <h4>Total TurnOut: <span> </span></h4>
      <h4>Valid Votes: <span>14 213 027</span>-- <span>64.5%</span></h4>
      <p>Rejected Votes: <span>***</span></p>

      <p>Spoilt Votes: <span>***</span></p>
    </div>
  </div>
</template>

<script>
import MapChart from "@/components/MapChart.vue";

export default {
  name: "Main",
  components: {
    MapChart,
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.candidate-image {
  height: 150px;
  width: 150px;
  /* width: 100%; */
  object-fit: cover;
  object-position: center;
  margin: auto auto;

  border-radius: 50%;
}

.cont-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.is-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 298px;
  width: 250px;
}
.header {
  font-size: 1.5rem;
  font-weight: bold;
  margin: auto;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
