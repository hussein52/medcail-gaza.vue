<template>
  <div>
    <!-- Services Start -->
  
    <div class="container-fluid py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5" style="max-width: 500px; margin-top: 30px;">
          <h5
              class="d-inline-block text-primary text-uppercase border-bottom border-5"
              >
              Services
            </h5>
          <h1 class="display-4" style="margin-top: 60px; font-size: 43px">
            Excellent Medical Services
          </h1>
        </div>
        <div class="row g-5">
          <div class="col-lg-4 col-md-6">
            <div
              class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div class="service-icon mb-4">
                <img src="../assets/heartbeat.gif" style="width: 110px;
                border-radius: 40px;
                background-color: #fff !important;" />
              </div>
              <h4 class="mb-3">Emergency Care</h4>
              <p class="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div class="service-icon mb-4">
                <img src="../assets/medicine.gif" style="width: 110px;
                border-radius: 40px;
                background-color: #fff !important;" />
              </div>
              <h4 class="mb-3">Operation & Surgery</h4>
              <p class="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div class="service-icon mb-4">
                <img src="../assets/stethoscope.gif" style="width: 110px;
                border-radius: 40px;
                background-color: #fff !important;">
              </div>
              <h4 class="mb-3">Outdoor Checkup</h4>
              <p class="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div class="service-icon mb-4">
                <img src="../assets/ambulance.gif" style="width: 110px;
                border-radius: 40px;
                background-color: #fff !important;"/>
              </div>
              <h4 class="mb-3">Ambulance Service</h4>
              <p class="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div class="service-icon mb-4">
                <img src="../assets/dropper.gif" style="width: 110px;
                border-radius: 40px;
                background-color: #fff !important;" />
              </div>
              <h4 class="mb-3">Medicine & Pharmacy</h4>
              <p class="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div
              class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center"
            >
              <div class="service-icon mb-1">
                <img src="../assets/microscope.gif" style="width: 110px;
                border-radius: 40px;
                background-color: #fff !important;"/>
              </div>
              <h4 class="mb-3">Blood Testing</h4>
              <p class="m-0">
                Kasd dolor no lorem nonumy sit labore tempor at justo rebum
                rebum stet, justo elitr dolor amet sit
              </p>
              <i class="bi bi-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Services End -->

    

    <FooterPage />
     
      </div>
    </div>
    
    
    

    
        

    
  
</template>

<script>
  import FooterPage from '@/components/FooterPage.vue';
export default {
  name: "ServicePage",
  components: {
    FooterPage
  }
};
</script>

<style>
 
    .part-1{
      margin-left: -50px;
      /* height: 500px; */

    }


    
  
</style>
