// testimonial  other data constants
const testimonials = [
  {
    id: 1,
    quote:
      "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    rating: 4,
    author: {
      name: "John Williams",
      position: "Lead designer",
      image: "./images/Ellipse.svg",
    },
  },
  {
    id: 2,
    quote:
      "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    rating: 5,
    author: {
      name: "John Williams",
      position: "Lead designer",
      image: "./images/Ellipse.svg",
    },
  },
  {
    id: 3,
    quote:
      "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    rating: 4,
    author: {
      name: "John Williams",
      position: "Lead designer",
      image: "./images/Ellipse.svg",
    },
  },
  {
    id: 4,
    quote:
      "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    rating: 5,
    author: {
      name: "John Williams",
      position: "Lead designer",
      image: "./images/Ellipse.svg",
    },
  },
  {
    id: 5,
    quote:
      "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    rating: 4,
    author: {
      name: "John Williams",
      position: "Lead designer",
      image: "./images/Ellipse.svg",
    },
  },
  {
    id: 6,
    quote:
      "I've tried every home remedy and hair care treatment but ended up with long waits and no results. Since I've started using Hims my hair has grown, thickened, and darkened tremendously.",
    rating: 5,
    author: {
      name: "John Williams",
      position: "Lead designer",
      image: "./images/Ellipse.svg",
    },
  },
];

// Function to create category cards
function createCategoryCard(category) {
  return `
    <div class="category_card" data-category-id="${category.id}" style="background: ${category.gradient}">
      <img class="bg_image" src="${category.bgImage}" alt="background pattern">
      <div class="card_content">
        <h3>${category.title}</h3>
        <img src="${category.image}" alt="${category.title}">
      </div>
    </div>
  `;
}

// Function to create testimonial HTML
function createTestimonialCard(testimonial) {
  // Create rating stars with filled and blank stars
  const stars = Array(5)
    .fill("")
    .map((_, index) => {
      const starType =
        index < testimonial.rating ? "starfill.svg" : "starBlank.svg";
      return `<img src="./images/icons/${starType}" alt="star" style="opacity: 1;">`;
    })
    .join("");

  return `
        <div class="testimonial_item">
            <div class="testimonial_content">
                <div class="quote-icon">
                    <img src="./images/icons/quote.svg" alt="quote">
                </div>
                <div class="quote">
                    <p>${testimonial.quote}</p>
                </div>
                <div class="rating">
                    ${stars}
                </div>
                <div class="author">
                    <img src="${testimonial.author.image}" alt="${testimonial.author.name}">
                    <div class="author_info">
                        <h4>${testimonial.author.name}</h4>
                        <p>${testimonial.author.position}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Fetch categories from API
async function fetchCategories() {
  try {
    const response = await fetch(
      "https://project-nirvoya-server.vercel.app/api/rizz-category"
    );
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Initialize categories
async function initializeCategories() {
  const categoryGrid = document.querySelector(".category_grid");
  if (categoryGrid) {
    const categories = await fetchCategories();

    // Create three columns
    const columns = [
      categories.slice(0, 2), // First two categories
      categories.slice(2, 4), // Next two categories
      categories.slice(4, 6), // Last two categories
    ];

    // Generate HTML for all columns
    categoryGrid.innerHTML = columns
      .map(
        (columnCategories) => `
      <div class="category_column">
        ${columnCategories
          .map((category) => createCategoryCard(category))
          .join("")}
      </div>
    `
      )
      .join("");

    // Add click event listeners
    document.querySelectorAll(".category_card").forEach((card) => {
      card.addEventListener("click", () => {
        const categoryId = card.dataset.categoryId;
        console.log(`Clicked category: ${categoryId}`);
      });
    });
  }
}

// Fetch products from API
async function fetchProducts() {
  try {
    const response = await fetch(
      "https://project-nirvoya-server.vercel.app/api/rizz-products"
    );
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Updated initializeProducts function
async function initializeProducts() {
  const productGrid = document.querySelector(".product_grid");
  const filterContainer = document.querySelector(".product_filter");
  const filterBtns = Array.from(document.querySelectorAll(".filter_btn"));

  // Tab Navigation
  const tabPrevBtn = document.querySelector(".tab_nav_btn.prev");
  const tabNextBtn = document.querySelector(".tab_nav_btn.next");

  // Product Navigation
  const productNav = document.querySelector(".product_navigation");
  const productPrevBtn = productNav?.querySelector(".nav_btn.prev");
  const productNextBtn = productNav?.querySelector(".nav_btn.next");

  const tabsToShow = 5;
  let currentTabIndex = 0;
  let currentCategory = "all";
  let currentPage = 0;
  const productsPerPage = 8;

  // Fetch products from API
  const products = await fetchProducts();

  // Product Display Function
  function displayProducts(category = "all", page = 0) {
    const filteredProducts =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);

    const start = page * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = filteredProducts.slice(start, end);

    if (productGrid) {
      productGrid.innerHTML = paginatedProducts.map(createProductCard).join("");
    }

    // Update product navigation visibility and button states
    if (productNav) {
      productNav.style.display =
        filteredProducts.length > productsPerPage ? "flex" : "none";

      if (productPrevBtn) {
        productPrevBtn.disabled = page === 0;
      }
      if (productNextBtn) {
        productNextBtn.disabled = end >= filteredProducts.length;
      }
    }
  }

  // Tab Navigation Functions
  function updateTabVisibility() {
    const totalTabs = filterBtns.length;

    filterBtns.forEach((btn, index) => {
      btn.style.display =
        index >= currentTabIndex && index < currentTabIndex + tabsToShow
          ? "block"
          : "none";
    });

    if (currentTabIndex === 0) {
      tabPrevBtn.disabled = true;
      tabPrevBtn.style.display = "none";
    } else {
      tabPrevBtn.disabled = false;
      tabPrevBtn.style.display = "block";
    }

    if (currentTabIndex + tabsToShow >= totalTabs && currentTabIndex !== 0) {
      tabNextBtn.disabled = true;
      tabNextBtn.style.display = "none";
    } else {
      tabNextBtn.disabled = false;
      tabNextBtn.style.display = "block";
    }
  }

  // Event Listeners
  if (tabPrevBtn) {
    tabPrevBtn.addEventListener("click", () => {
      if (currentTabIndex > 0) {
        currentTabIndex--;
        updateTabVisibility();
      }
    });
  }

  if (tabNextBtn) {
    tabNextBtn.addEventListener("click", () => {
      const totalTabs = filterBtns.length;
      if (currentTabIndex + tabsToShow < totalTabs) {
        currentTabIndex++;
        updateTabVisibility();
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      currentPage = 0;
      displayProducts(currentCategory, currentPage);
    });
  });

  if (productPrevBtn) {
    productPrevBtn.addEventListener("click", () => {
      if (currentPage > 0) {
        currentPage--;
        displayProducts(currentCategory, currentPage);
      }
    });
  }

  if (productNextBtn) {
    productNextBtn.addEventListener("click", () => {
      const filteredProducts =
        currentCategory === "all"
          ? products
          : products.filter((p) => p.category === currentCategory);

      const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

      if (currentPage < totalPages - 1) {
        currentPage++;
        displayProducts(currentCategory, currentPage);
      }
    });
  }

  // Initialize both navigations
  updateTabVisibility();
  displayProducts("all", 0);
}

// Function to create product cards
function createProductCard(product) {
  return `
        <div class="product_card" data-category="${product.category}">
            ${
              product.badge
                ? `
                <span class="badge ${
                  product.badge === "Research use only"
                    ? "research"
                    : "recurring"
                }">
                    ${product.badge}
                </span>
            `
                : ""
            }
            <div class="product_image">
                <img src="${product.image}" alt="${product.name}">
                 <h3>${product.name}</h3>
            </div>
            <div class="product_info">
                <div class="price_cart">
                    <p class="price">${product.price}</p>
                </div>
                 <button class="add_to_cart">
                        <img src="../images/icons/cartWithPlus.svg" alt="Cart">
                    </button>
            </div>
        </div>
    `;
}
// Service slider functionality
function initializeServiceSlider() {
  const sliderTrack = document.querySelector(".slider_track");

  if (sliderTrack) {
    function updateSliderContent() {
      const items = sliderTrack.querySelectorAll(".service_item");
      const itemWidth = items[0].offsetWidth;
      const totalWidth = itemWidth * items.length;
      sliderTrack.style.animationDuration = `${totalWidth / 50}s`;
    }

    window.addEventListener("load", updateSliderContent);
    window.addEventListener("resize", updateSliderContent);
  }
}

// Add this function to handle filter navigation
function initializeFilterNavigation() {
  const filterContainer = document.querySelector(".product_filter");
  const filterBtns = filterContainer.querySelectorAll(".filter_btn");
  const prevBtn = filterContainer.querySelector(".nav_btn.prev");
  const nextBtn = filterContainer.querySelector(".nav_btn.next");

  let scrollPosition = 0;
  const scrollStep = 200; // Adjust this value based on your needs

  nextBtn.addEventListener("click", () => {
    scrollPosition += scrollStep;
    filterContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    updateNavigationState();
  });

  prevBtn.addEventListener("click", () => {
    scrollPosition -= scrollStep;
    filterContainer.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
    updateNavigationState();
  });

  function updateNavigationState() {
    prevBtn.disabled = scrollPosition <= 0;
    nextBtn.disabled =
      scrollPosition >=
      filterContainer.scrollWidth - filterContainer.clientWidth;
  }

  // Initial state
  updateNavigationState();

  // Update on scroll
  filterContainer.addEventListener("scroll", () => {
    scrollPosition = filterContainer.scrollLeft;
    updateNavigationState();
  });
}

// Function to initialize testimonial slider
function initializeTestimonialSlider() {
  const testimonialSlider = document.querySelector(".testimonial_slider");
  if (testimonialSlider) {
    // Insert testimonial cards
    testimonialSlider.innerHTML = testimonials
      .map(createTestimonialCard)
      .join("");

    // Initialize slick slider
    $(".testimonial_slider").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
      centerMode: false,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
}

// Add this function to handle header scroll behavior
function initializeHeaderScroll() {
  const header = document.getElementById("header");
  let lastScrollTop = 0;
  let isScrollingUp = false;

  // Add necessary CSS classes for transition
  header.style.position = "fixed";
  header.style.width = "100%";
  header.style.top = "0";
  header.style.transition = "transform 0.3s ease-in-out";
  header.style.zIndex = "1000";

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Determine scroll direction
    isScrollingUp = scrollTop < lastScrollTop;

    // Apply transformations based on scroll position and direction
    if (scrollTop > 100) {
      if (isScrollingUp) {
        // Scrolling up - show header
        if (window.innerWidth > 1025) {
          header.style.transform = "translateY(-92px)";
        } else {
          header.style.transform = "translateY(0)";
        }
        header.style.backdropFilter = "blur(10px)";
      } else {
        // Scrolling down - hide header
        header.style.transform = "translateY(-100%)";
        header.style.backdropFilter = "none";
      }
    } else {
      // Reset position when at top
      header.style.transform = "translateY(0)";
      header.style.backdropFilter = "none";
    }

    lastScrollTop = scrollTop;
  });
}

// Update the initialization in DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {
  initializeHeaderScroll();
  initializeTestimonialSlider();
  await initializeCategories();
  initializeServiceSlider();
  await initializeProducts(); // Now awaiting products initialization
  initializeFilterNavigation();
});

$(document).ready(function () {
  $(".testimonial_slider").slick({
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const menusLinks = document.querySelector(".menus_links");

  if (checkbox && menusLinks) {
    checkbox.addEventListener("change", function () {
      menusLinks.classList.toggle("show");
      document.body.style.overflow = this.checked ? "hidden" : "";
    });
  }
});
