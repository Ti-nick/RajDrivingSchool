<template>
  <div>
    <!-- Header -->
    <header
      class="sticky-top border-bottom site-header"
      :class="{ 'is-scrolled': isScrolled }"
    >
      <nav class="navbar navbar-expand-lg navbar-light site-nav">
        <div class="container py-2">
          <!-- Logo -->
          <a class="navbar-brand d-flex align-items-center gap-2" href="#">
            <!-- <div class="logo-badge">
              <span class="logo-dot"></span>
            </div> -->
            <span class="fw-bold brand-text">RAJ DRIVING SCHOOL</span>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul class="navbar-nav align-items-lg-center gap-lg-2 mt-3 mt-lg-0">
              <li class="nav-item">
                <router-link to="/" class="nav-link fw-semibold" active-class="active">
                  Home
                </router-link>
              </li>

              <li class="nav-item">
                <router-link to="/contact" class="nav-link fw-semibold" active-class="active">
                  Contact
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <!-- Page content -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return { isScrolled: false };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, { passive: true });
    this.handleScroll();
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 10;
    }
  }
};
</script>

<style scoped>
/* =========================
   Header scroll behavior
========================= */
.site-header,
.site-nav {
  background-color: #ffffff !important;
  transition: background-color 0.25s ease;
}

.site-header.is-scrolled,
.site-header.is-scrolled .site-nav {
  background-color: rgb(249, 208, 0) !important; /* yellow */
}

/* =========================
   Logo
========================= */
.brand-text {
  color: #1f2937;
}

.logo-badge {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #fff3d6;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.logo-dot {
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #f4a000;
  box-shadow: 0 0 0 6px rgba(244, 160, 0, 0.2);
}

/* =========================
   Nav links
========================= */
.nav-link {
  color: rgba(0, 0, 0, 0.3);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: rgba(0, 0, 0, 0.85);
}

.nav-link.active {
  color: #000000 !important;
}
</style>