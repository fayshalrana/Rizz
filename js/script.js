// Category data
const categories = [
  {
    id: "weight-loss",
    title: "Weight Loss",
    image: "./images/categoryImage1.svg",
    bgImage: "./images/categoryBgOne.svg",
    categoryName: "weight-loss",
    gradient: "linear-gradient(145deg, #FF9797, #FF6B6B)",
  },
  {
    id: "testosterone",
    title: "Testosterone HRT",
    image: "./images/categoryImage2.svg",
    bgImage: "./images/categoryBgTwo.svg",
    categoryName: "testosterone",
    gradient: "linear-gradient(145deg, #F27070, #97B5FB)",
  },
  {
    id: "sexual-health",
    title: "Sexual Health",
    image: "./images/categoryImage3.svg",
    bgImage: "./images/categoryBgTwo.svg",
    categoryName: "sexual-health",
    gradient: "linear-gradient(145deg, #FFA97A, #FF8A5B)",
  },
  {
    id: "athletic",
    title: "Athletic Performance",
    image: "./images/categoryImage4.svg",
    bgImage: "./images/categoryBgOne.svg",
    categoryName: "athletic",
    gradient: "linear-gradient(145deg, #F29B70, #FBD197)",
  },
  {
    id: "brain-health",
    title: "Brain Health",
    image: "./images/categoryImage5.svg",
    bgImage: "./images/categoryBgOne.svg",
    categoryName: "brain-health",
    gradient: "linear-gradient(145deg, #A78BFA, #8B5CF6)",
  },

  {
    id: "beauty",
    title: "Beauty and Hair Loss",
    image: "./images/categoryImage6.svg",
    bgImage: "./images/categoryBgTwo.svg",
    categoryName: "beauty",
    gradient: "linear-gradient(145deg, #70CBF2, #97B0FB)",
  },
];

// Product data
const products = [
  {
    id: 1,
    name: "Retarutide",
    image: "./images/Rizz-Reta-GLP3-24mg.svg",
    price: "$39.99/per month",
    category: "weight-loss",
    badge: "Research use only",
  },
  {
    id: 2,
    name: "Lyopholized Glow (GHK-CU/ BPC-157/ TB-500)",
    image: "./images/Rizz-2X-Blend-CJC_Ipa-5_5mg-research use only.svg",
    price: "$39.99/per month",
    category: "beauty",
    badge: "Research use only",
  },
  {
    id: 3,
    name: "Compounded Sermorelin 15mg",
    image:
      "./images/Untitled-design-2024-06-27T162222.562-removebg-preview 1.svg",
    price: "Starting at $179 Monthly + $45 Physician consult",
    category: "weight-loss",
    badge: "Recurring Plan",
  },
  {
    id: 4,
    name: "2X CJC / Ipamorelin",
    image: "./images/Rizz-2X-Blend-CJC_Ipa-5_5mg-research use only.svg",
    price: "Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge",
    category: "testosterone",
    badge: null, // No badge
  },
  {
    id: 5,
    name: "Lyopholized Oxytocin",
    image: "./images/Rizz-2X-Blend-CJC_Ipa-5_5mg-research use only (1).svg",
    price: "$39.99/per month",
    category: "sexual-health",
    badge: "Research use only",
  },
  {
    id: 6,
    name: "Lyopholized Fi masteride 1mg",
    image: "./images/Rizz-PT-141-10mg.pdf",
    price: "$39.99/per month",
    category: "beauty",
    badge: "Recurring Plan",
  },
  {
    id: 7,
    name: "Compounded NAD+ 1000 mg",
    image: "./images/Rizz-2X-Blend-CJC_Ipa-5_5mg-research use only.svg",
    price: "Starting at $179 Monthly + $45 Physician consult",
    category: "brain-health",
    badge: null, // No badge
  },
  {
    id: 8,
    name: "Lyopholized PT- 141 10mg",
    image: "./images/Rizz-2X-Blend-CJC_Ipa-5_5mg-research use only.svg",
    price: "Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge",
    category: "sexual-health",
    badge: "Research use only",
  },
  {
    id: 9,
    name: "Lyopholized Fi masteride 1mg",
    image: "./images/Rizz-PT-141-10mg.pdf",
    price: "$39.99/per month",
    category: "beauty",
    badge: "Recurring Plan",
  },
  {
    id: 10,
    name: "Compounded NAD+ 1000 mg",
    image: "./images/Rizz-2X-Blend-CJC_Ipa-5_5mg-research use only.svg",
    price: "Starting at $179 Monthly + $45 Physician consult",
    category: "brain-health",
    badge: "Recurring Plan",
  },
  {
    id: 11,
    name: "Lyopholized PT- 141 10mg",
    image: "./images/Rizz-2X-Blend-CJC_Ipa-5_5mg-research use only.svg",
    price: "Starting at $149 Monthly + $45 Physician consult + $100 Lab Charge",
    category: "sexual-health",
    badge: "Recurring Plan",
  },
];

// Add this testimonial data at the top with your other data constants
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
    <div class="category_card ${category.categoryName}" 
         style="background: ${category.gradient}"
         data-category-id="${category.id}">
         <img src="${category.bgImage}" alt="${category.title}" class="bg_image">
        <div class="card_content">
            <h3>${category.title}</h3>
            <img src="${category.image}" alt="${category.title}">
        </div>
    </div>
  `;
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

// Function to initialize category section
function initializeCategories() {
  const categoryGrid = document.querySelector(".category_grid");
  if (categoryGrid) {
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

// Function to initialize product section
function initializeProducts() {
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

  // Tab Navigation Functions
  function updateTabVisibility() {
    const totalTabs = filterBtns.length;

    filterBtns.forEach((btn, index) => {
      btn.style.display =
        index >= currentTabIndex && index < currentTabIndex + tabsToShow
          ? "block"
          : "none";
    });

    // Update prev button visibility
    if (currentTabIndex === 0) {
      tabPrevBtn.disabled = true;
      tabPrevBtn.style.display = "none";
    } else {
      tabPrevBtn.disabled = false;
      tabPrevBtn.style.display = "block";
    }

    // Update next button visibility
    if (currentTabIndex + tabsToShow >= totalTabs && currentTabIndex !== 0) {
      tabNextBtn.disabled = true;
      tabNextBtn.style.display = "none";
    } else {
      tabNextBtn.disabled = false;
      tabNextBtn.style.display = "block";
    }
  }

  // Tab Navigation Event Listeners
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

  // Filter Button Event Listeners
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      currentPage = 0; // Reset page when changing category
      displayProducts(currentCategory, currentPage);
    });
  });

  // Product Navigation Event Listeners
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
        header.style.transform = "translateY(0)";
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

// Initialize all components
document.addEventListener("DOMContentLoaded", () => {
  initializeHeaderScroll();
  initializeTestimonialSlider();
  initializeCategories();
  initializeServiceSlider();
  initializeProducts();
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
