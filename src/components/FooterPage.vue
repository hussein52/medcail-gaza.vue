<template>
  <div>
    <!-- Footer Start -->
    <div class="container-fluid part-1 " style="width: 102% !important; margin-left: -27px !important;">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <h4
              class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4"
            >
              Get In Touch
            </h4>
            <p class="mb-4 text-white">
              No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
              et dolor sed dolor
            </p>
            <p class="mb-2 text-white">
              <i class="fa fa-map-marker-alt text-primary me-3"></i>123 Street,
              New York, USA
            </p>
            <p class="mb-2 text-white">
              <i class="fa fa-envelope text-primary me-3"></i>
              info@example.com
            </p>
            <p class="mb-0 text-white">
              <!-- <i class="fa fa-phone-alt text-primary me-3"></i>+012 345 -->
              67890
            </p>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4
              class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4"
            >
              Quick Links
            </h4>
            <div class="d-flex flex-column justify-content-start">
              <a class="text-light mb-2" href="#"
                ><i
                  class="fa fa-angle-right me-2"
                  style="list-style: none; text-decoration: none"
                ></i
                >Home</a
              >
              <a class="text-light mb-2" href="#"
                ><i class="fa fa-angle-right me-2"></i>About Us</a
              >
              <a class="text-light mb-2" href="#"
                ><i class="fa fa-angle-right me-2"></i>Our Services</a
              >
              <a class="text-light mb-2" href="#"
                ><i class="fa fa-angle-right me-2"></i>Meet The Team</a
              >
              <a class="text-light mb-2" href="#"
                ><i class="fa fa-angle-right me-2"></i>Latest Blog</a
              >
              <a class="text-light" href="#"
                ><i class="fa fa-angle-right me-2"></i>Contact Us</a
              >
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4
              class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4"
            >
              Popular Links
            </h4>
            <div class="d-flex flex-column justify-content-start">
              <a class="text-light mb-2" href="#"
                ><i class="fa fa-angle-right me-2"></i>Home</a
              >
              <a class="text-light mb-2" href="#"
                ><i class="fa fa-angle-right me-2"></i>About Us</a
              >
              <a class="text-light mb-2" href="#"
                ><i class="fa fa-angle-right me-2"></i>Our Services</a
              >
              <a class="text-light mb-2" href="#"
                ><i class="fa fa-angle-right me-2"></i>Meet The Team</a
              >
              <a class="text-light mb-2" href="#"
                ><i class="fa fa-angle-right me-2"></i>Latest Blog</a
              >
              <a class="text-light" href="#"
                ><i class="fa fa-angle-right me-2"></i>Contact Us</a
              >
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h4
              class="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4"
            >
              Newsletter
            </h4>
            <form action="">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control p-3 border-0"
                  placeholder="Your Email Address"
                />
                <button class="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <h6 class="text-primary text-uppercase mt-4 mb-3">Follow Us</h6>
            <div class="d-flex">
              <a
                class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                style="width: 50px !important"
                href="#"
                ><img src="../assets/facebook32.png" style="margin-left: -8px"
              /></a>
              <a
                class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                style="width: 50px !important"
                href="#"
                ><img src="../assets/twitter.png" style="margin-left: -8px"
              /></a>
              <a
                class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                style="width: 50px !important"
                href="#"
                ><img src="../assets/whatsapp1.png" style="margin-left: -8px" />
              </a>
              <a
                class="btn btn-lg btn-primary btn-lg-square rounded-circle me-2"
                style="width: 50px !important"
                href="#"
                ><img src="../assets/instagram.png" style="margin-left: -8px" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="part-2" style="width:102% !important; margin-left: -27px !important">
      <div
        class="container-fluid bg-dark text-light border-top border-secondary py-4"
        
      >
        <div class="container">
          <div class="row g-5">
            <div class="col-md-6 text-center text-md-start">
              <p class="mb-md-0">
                &copy; <a class="text-primary" href="#">Your Site Name</a>. All
                Rights Reserved.
              </p>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <p class="mb-0">
                Designed by
                <a class="text-primary" href="https://htmlcodex.com"
                  >Devloper Frontend vue.js Hussein Al-tanany</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->
  </div>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style>

@media(min-width: 300px) and (max-width: 500px) {
    .part-1{
        /* width: 100% !important; */
        margin-left: -190px !important;
    }
}
/* .part-1{
        width: 124% !important;
        margin-left: -190px !important;
    } */
    /* .part-1{
  width: 1200px !important;
  margin-right: 27px !important;
} */

</style>
