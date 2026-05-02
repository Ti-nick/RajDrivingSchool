<script>
export default {
  name: "RedeemGuideline",
  data() {
    return {
      steps: [
        {
          title: "Book an Appointment",
          desc: "Visit the booking page and book an appointment as you normally would.",
          link: "https://book.squareup.com/appointments/8c5megok1g64p7/location/LBD9DNG5PFQRR/services",
          linkLabel: "Open booking page",
          img: new URL('./assets/S1.png', import.meta.url).href
        },
        {
          title: "Sign In & Open the Menu",
          desc: "On the payment page, sign in with your phone number first. Then tap the menu icon in the top-right corner.",
          img: new URL('./assets/S2.png', import.meta.url).href
        },
        {
          title: "Go to My Account",
          desc: 'Select "My Account" from the menu.',
          img: new URL('./assets/S3.png', import.meta.url).href
        },
        {
          title: "Complete Your Profile",
          desc: 'Fill in your profile information and tap "Save and view account".',
          img: new URL('./assets/S4.png', import.meta.url).href
        },
        {
          title: "Redeem Your Package",
          desc: "Return to the payment page — your purchased package will now appear and be ready to redeem.",
          img: new URL('./assets/S5.png', import.meta.url).href
        }
      ]
    };
  }
};
</script>

<template>
  <div>
    <!-- ================= HERO ================= -->
    <section class="hero">
      <div class="container">
        <div class="row align-items-center justify-content-center text-center">
          <div class="col-lg-8 d-flex flex-column align-items-center">
            <h1 class="display-5 fw-bold text-white mb-2">Redeem Guideline</h1>
            <p class="lead text-white mb-0">How to redeem your purchased package when booking</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= STEPS ================= -->
    <section class="py-5 py-lg-6">
      <div class="container">
        <div class="text-center mb-5">
          <p class="lead text-muted">
            If this is your first time redeeming a package, follow the steps below and you'll be all set.
          </p>
        </div>

        <div class="steps-list">
          <div
            v-for="(step, idx) in steps"
            :key="idx"
            class="step-card"
          >
            <!-- Left: number + text -->
            <div class="step-card__content">
              <div class="step-card__badge">{{ idx + 1 }}</div>
              <h3 class="step-card__title">{{ step.title }}</h3>
              <p class="step-card__desc">{{ step.desc }}</p>
              <a
                v-if="step.link"
                :href="step.link"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-theme btn-sm mt-2"
              >{{ step.linkLabel }}</a>
            </div>

            <!-- Right: screenshot -->
            <div class="step-card__img-wrap">
              <img :src="step.img" :alt="step.title" class="step-card__img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ================= HERO ================= */
.hero {
  min-height: 35vh;
  display: flex;
  align-items: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)),
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

/* ================= STEPS ================= */
.steps-list {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.step-card {
  display: flex;
  align-items: center;
  gap: 2.5rem;
  background: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  padding: 2rem;
}

.step-card:nth-child(even) {
  flex-direction: row-reverse;
}

.step-card__content {
  flex: 1;
}

.step-card__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #1a1a2e;
  color: #fff;
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

.step-card__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 0.5rem;
}

.step-card__desc {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 0;
}

.step-card__img-wrap {
  flex: 0 0 220px;
  display: flex;
  justify-content: center;
}

.step-card__img {
  width: 100%;
  max-width: 220px;
  border-radius: 0.75rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.12);
  object-fit: cover;
}

/* ================= BUTTON ================= */
.btn-theme {
  background-color: #f4cb00;
  border-color: #f4cb00;
  color: #1a1a2e;
  font-weight: 700;
}

.btn-theme:hover {
  background-color: #e2bc00;
  border-color: #e2bc00;
  color: #1a1a2e;
}

/* ================= MOBILE ================= */
@media (max-width: 640px) {
  .step-card,
  .step-card:nth-child(even) {
    flex-direction: column;
  }

  .step-card__img-wrap {
    flex: unset;
    width: 100%;
  }

  .step-card__img {
    max-width: 100%;
  }
}
</style>
