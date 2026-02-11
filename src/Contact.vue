<script>
export default {
  name: "Contact"
};
</script>

<template>
  <div>
    <!-- ================= HERO ================= -->
    <section class="hero">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-lg-8 d-flex flex-column align-items-center">
            <h1 class="display-5 fw-bold text-white mb-0">
              Contact Information
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= CONTACT CONTENT ================= -->
    <section class="py-5 py-lg-6">
      <div class="container">
        <div class="text-center">
          <p class="lead mb-0">
            <span class="fw-semibold">Phone and WhatsApp:</span>
            +61 478 665 789
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ================= HERO (same as Home) ================= */
.hero {
  min-height: 50vh; /* same height as Home */
  display: flex;
  align-items: center;

  background:
    linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url('./assets/hero.jpg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* ================= SPACING ================= */
.py-lg-6 {
  padding-top: 4rem !important;
  padding-bottom: 4rem !important;
}
</style>