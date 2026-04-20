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
        <div class="d-flex justify-content-center">
          <div class="contact-card">
            <h2 class="contact-card__title">Get in Touch</h2>
            <p class="contact-card__subtitle">Tap a button below to call or message me on WhatsApp</p>

            <div class="contact-card__number">+61 478 665 789</div>

            <div class="contact-card__actions">
              <a href="tel:+61478665789" class="contact-btn contact-btn--call">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58z"/>
                </svg>
                Call Now
              </a>
              <a href="https://wa.me/61478665789" target="_blank" rel="noopener noreferrer" class="contact-btn contact-btn--whatsapp">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* ================= HERO (same as Home) ================= */
.hero {
  min-height: 50vh;
  /* same height as Home */
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

/* ================= CONTACT CARD ================= */
.contact-card {
  background: #fff;
  border-radius: 1.25rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.10);
  padding: 2.5rem 2rem;
  max-width: 420px;
  width: 100%;
  text-align: center;
}

.contact-card__title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #1a1a2e;
}

.contact-card__subtitle {
  color: #6c757d;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
}

.contact-card__number {
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #1a1a2e;
  margin-bottom: 1.75rem;
}

.contact-card__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  border-radius: 2rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: opacity 0.15s, transform 0.15s;
}

.contact-btn:hover {
  opacity: 0.88;
  transform: translateY(-1px);
}

.contact-btn--call {
  background: #1a1a2e;
  color: #fff;
}

.contact-btn--whatsapp {
  background: #25d366;
  color: #fff;
}
</style>