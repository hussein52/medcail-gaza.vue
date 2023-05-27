<template>
  <div>
     <!-- About Start -->
     <div class="container-fluid About" style="margin-top: -80px !important;">
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px">
              <div class="position-relative h-100 img-about">
                <img
                  class="position-absolute w-100 rounded ml-4"
                  src="../assets/about.jpg"
                  style="margin-top: 200px; margin-left: -190px; height: 500px"
                />
              </div>
            </div>
            <div class="col-lg-7">
              <div class="mb-4">
                <h5
                  class="d-inline-block text-primary text-uppercase border-bottom border-5"
                  style="margin-top: 280px"
                >
                  About Us
                </h5>
                <h1 class="display-4">
                  Best Medical Care For Yourself and Your Family
                </h1>
              </div>
              <p>
                Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam
                dolor diam ipsum et, tempor voluptua sit consetetur sit.
                Aliquyam diam amet diam et eos sadipscing labore. Clita erat
                ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus
                clita duo justo et tempor consetetur takimata eirmod, dolores
                takimata consetetur invidunt magna dolores aliquyam dolores
                dolore. Amet erat amet et magna
              </p>
              <div class="row g-3 pt-3">
                <div class="col-sm-3 col-6">
                  <div
                    class="bg-light text-center rounded-circle py-4"
                    style="height: 150px"
                  >
                    <img src="../assets/doctor.png" />
                    <h6 class="mb-0" style="font-weight: bold">
                      Qualified<small
                        class="d-block text-primary"
                        style="font-weight: bold"
                        >Doctors</small
                      >
                    </h6>
                  </div>
                </div>
                <div class="col-sm-3 col-6">
                  <div
                    class="bg-light text-center rounded-circle py-4"
                    style="height: 150px"
                  >
                    <img src="../assets/stretcher.png" />
                    <h6 class="mb-0" style="font-weight: bold">
                      Emergency<small
                        class="d-block text-primary"
                        style="font-weight: bold"
                        >Services</small
                      >
                    </h6>
                  </div>
                </div>
                <div class="col-sm-3 col-6">
                  <div
                    class="bg-light text-center rounded-circle py-4"
                    style="height: 150px"
                  >
                    <img src="../assets/microscope.png" />
                    <h6 class="mb-0" style="font-weight: bold">
                      Accurate<small
                        class="d-block text-primary"
                        style="font-weight: bold"
                        >Testing</small
                      >
                    </h6>
                  </div>
                </div>
                <div class="col-sm-3 col-6">
                  <div
                    class="bg-light text-center rounded-circle py-4"
                    style="height: 150px"
                  >
                    <img src="../assets/ambulance64.png" />
                    <h6 class="mb-0" style="font-weight: bold">
                      Free<small
                        class="d-block text-primary"
                        style="font-weight: bold"
                        >Ambulance</small
                      >
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- About End -->
      <FooterPage />
  </div>
</template>

<script>
  import FooterPage from '@/components/FooterPage.vue';
export default {
  name: "AboutPage",
  components: {
    FooterPage
  }
};
</script>
