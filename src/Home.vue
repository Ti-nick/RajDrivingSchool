<script>
export default {
  name: "HomePage",
  data() {
    return {
      singlePricingItems: [
        // {
        //   title: "45 mins session",
        //   price: "A$65.00",
        //   desc: "This 45-minute session offers interactive content and expert guidance tailored to your needs, focusing on building practical skills in a professional and engaging environment.",
        //   link: ""
        // },
        {
          title: "60 mins session",
          price: "A$80.00",
          desc: "One-on-one lesson with personalized guidance.",
          link: "https://book.squareup.com/appointments/ha8lqllsr67p68/location/L3JKHMAAXNT7R/services"
        },
        {
          title: "90 mins session",
          price: "A$130.00",
          desc: "Extended session for more in-depth practice.",
          link: "https://book.squareup.com/appointments/ha8lqllsr67p68/location/L3JKHMAAXNT7R/services"
        },
        {
          title: "Lesson + Test",
          price: "A$235.00",
          desc: "A lesson followed by your driving test.",
          link: "https://book.squareup.com/appointments/ha8lqllsr67p68/location/L3JKHMAAXNT7R/services"
        }
      ],
      packagesPricingItems: [
        {
          title: "3 Driving Lessons (60 Minutes Each)",
          price: "A$226.00",
          desc: "Three individual driving lessons, each lasting 60 minutes.",
          link: "https://square.link/u/M2K2PmS3"
        },
        {
          title: "5 Driving Lessons (60 Minutes Each)",
          price: "A$398.00",
          desc: "Five individual driving lessons, each lasting 60 minutes.",
          link: "https://square.link/u/LJhSPz3s"
        }
        // ,{
        //   title: "5 Driving Lessons (45 Minutes Each)",
        //   price: "A$321.00",
        //   desc: "Five individual driving lessons, each lasting 45 minutes.",
        //   link: ""
        // }
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
        <div class="row justify-content-center text-center">
          <div class="col-lg-10 d-flex flex-column align-items-center">
            <p class="text-white mb-2 fw-semibold">Trusted local instructor</p>

            <h1 class="display-5 fw-bold text-white mb-3">
              Professional driving lessons for learners, seniors, and specialised needs
            </h1>

            <p class="lead text-white mb-4">
              Inner Melbourne & Eastern Suburbs Driving Lessons
            </p>

            <a href="#pricing" class="btn btn-theme btn-lg">
              Book a lesson
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= PRICING ================= -->
    <section id="pricing" class="py-5 py-lg-6">
      <div class="container">
        <!-- Single lessons -->
        <div class="text-center mb-5">
          <h2 class="fw-bold mb-2">Single Lesson Pricing</h2>
          <p class="text-muted">
            Flexible lesson lengths for one-off sessions or test preparation.
          </p>
        </div>

        <div class="row justify-content-center mb-5">
          <div class="col-12 col-md-8 col-lg-6">
            <div class="card shadow-sm">
              <div class="card-body">
                <div
                  v-for="(item, idx) in singlePricingItems"
                  :key="idx"
                  class="price-row"
                  :class="{ 'price-row--last': idx === singlePricingItems.length - 1 }"
                >
                  <div class="price-row__left">
                    <span class="price-row__title">{{ item.title }}</span>
                    <span class="price-row__desc">{{ item.desc }}</span>
                  </div>
                  <span class="price-row__price">{{ item.price }}</span>
                </div>

                <a
                  :href="singlePricingItems[0].link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-theme w-100 mt-4"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <hr class="pricing-divider" />

        <!-- Packages -->
        <div class="text-center mb-5">
          <h2 class="fw-bold mb-2">Package Lesson Pricing</h2>
          <p class="text-muted">
            Better value for consistent learners.
          </p>
        </div>

        <div class="row g-4">
          <div
            v-for="(item, idx) in packagesPricingItems"
            :key="idx"
            class="col-12 col-md-6 col-lg-3"
          >
            <div class="card h-100 shadow-sm">
              <div class="card-body d-flex flex-column">
                <h5 class="fw-bold">{{ item.title }}</h5>
                <div class="fs-3 fw-bold my-2">{{ item.price }}</div>
                <p class="text-muted flex-grow-1">{{ item.desc }}</p>

                <a
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn btn-theme w-100"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-4">
          <small class="text-muted">
            Packages are valid for 6 months and can be redeemed when booking.
          </small>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ================= HERO ================= */
.hero {
  min-height: 65vh;                 /* 👈 BIG HERO */
  display: flex;
  align-items: center;

  background:
    linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)),
    url('./assets/hero.jpg');

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* ================= BUTTONS ================= */
.btn-theme {
  background-color: #f4cb00;
  border-color: #f4cb00;
  color: #ffffff;
  font-weight: 700;
}

.btn-theme:hover {
  background-color: #e2bc00;
  border-color: #e2bc00;
  color: #ffffff;
}

/* ================= PRICE ROWS ================= */
.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.price-row--last {
  border-bottom: none;
}

.price-row__left {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding-right: 1rem;
}

.price-row__title {
  font-weight: 600;
  color: #1a1a2e;
}

.price-row__desc {
  font-size: 0.82rem;
  color: #6c757d;
}

.price-row__price {
  font-weight: 700;
  font-size: 1.1rem;
  color: #1a1a2e;
}

/* ================= DIVIDER ================= */
.pricing-divider {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.50);
  margin: 1rem 0 3rem;
}

/* ================= SPACING ================= */
.py-lg-6 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
</style>