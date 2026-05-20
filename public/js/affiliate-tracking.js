/**
 * Affiliate click tracking — fires GA4 events on every /go/ link click.
 * Must be included in base layout so GA4 is already loaded when this runs.
 * No external dependencies. Works on all pages.
 */
(function () {
  function getArticleSlug() {
    var path = window.location.pathname.replace(/\/$/, "");
    return path.split("/").pop() || "homepage";
  }

  function extractProgramSlug(href) {
    var match = href.match(/\/go\/([^\/]+)/);
    return match ? match[1] : "unknown";
  }

  function trackClick(link) {
    var programSlug = extractProgramSlug(link.href);
    var articleSlug = getArticleSlug();
    var linkText = (link.textContent || link.innerText || "").trim().substring(0, 60);
    var placement = link.dataset.placement || "inline"; // CTAs can set data-placement="top-table|post-feature|conclusion"

    if (typeof gtag !== "undefined") {
      gtag("event", "affiliate_click", {
        affiliate_program: programSlug,
        article_slug: articleSlug,
        link_text: linkText,
        cta_placement: placement,
      });
    }

    // Also push to dataLayer for any GTM setup
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "affiliate_click",
        affiliate_program: programSlug,
        article_slug: articleSlug,
        cta_placement: placement,
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Track all /go/ link clicks (affiliate redirect links)
    document.querySelectorAll('a[href*="/go/"]').forEach(function (link) {
      link.addEventListener("click", function () {
        trackClick(link);
        // Don't preventDefault — let navigation proceed normally
      });
    });

    // Track email opt-in form submissions
    document.querySelectorAll('form[data-ml-form]').forEach(function (form) {
      form.addEventListener("submit", function () {
        if (typeof gtag !== "undefined") {
          gtag("event", "email_signup", {
            form_id: form.dataset.mlForm || "unknown",
            article_slug: getArticleSlug(),
          });
        }
      });
    });
  });
})();
