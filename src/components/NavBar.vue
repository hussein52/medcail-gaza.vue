<template>
  <div>
    <header class="header">
      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <div class="logo-name-website">
            <img src="../assets/hospital64.png" />
            <h1 class="name-h1">Gaza Medical</h1>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="Navbar-medaicl collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <router-link to="/" tag="li">Home</router-link>

              <router-link to="/AboutPage" tag="li">About</router-link>

              <router-link to="/ServicePage" tag="li">Service</router-link>


              <router-link to="/ContactPage" tag="li">Contact</router-link>
            </ul>
          </div>
        </div>
      </nav>
    </header>

  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
header {
  background-color: #fff !important;
  width: 100%;
}
.Navbar-medaicl ul {
  margin-left: 480px;
  margin-top: 20px;
  right: 40px;
}
.Navbar-medaicl ul li {
  padding: 20px;
  font-weight: bold;
  transition: 0.4s;
  color: black;
}
@media (min-width: 300px) and (max-width: 551px) {
  .Navbar-medaicl ul {
    margin-left: 230px !important;
    background-color: #fff;
  }
}
.Navbar-medaicl ul li:hover {
  color: rgb(62, 180, 235);
  transition: 0.2s;
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 2px;
  transition: all 0.2s linear;
  background-size: 0px 2px;
  background-repeat: no-repeat;
  background-position: left 100%;
}
.logo-name-website img {
  float: right;
  margin-right: 25px;
}
.logo-name-website h1 {
  font-size: 22px;
  position: absolute;
  margin-left: 90px;
  margin-top: 20px;
  font-weight: bold;
  color: rgb(62, 180, 235);
}
.line {
  margin-top: 102px;
  border: 2px solid;
}
</style>
