// --- Chocolate Data ---
const chocolates = [
  // Classic Chocolates
  {
    id: 'c-milk',
    name: 'Milk Chocolates',
    category: 'classic',
    description: 'Smooth, rich, and creamy milk chocolate that melts in your mouth.',
    price_small: 60,
    price_large: 125,
    color: '#8d5b4c',
    shape: 'square'
  },
  {
    id: 'c-dark',
    name: 'Dark Chocolates',
    category: 'classic',
    description: 'Deep, rich dark chocolate with a perfect balance of cocoa intensity.',
    price_small: 65,
    price_large: 130,
    color: '#3e2723',
    shape: 'round'
  },
  {
    id: 'c-white',
    name: 'White Chocolates',
    category: 'classic',
    description: 'Sweet, buttery white chocolate with a delicate vanilla finish.',
    price_small: 70,
    price_large: 140,
    color: '#f5e6d3',
    shape: 'oval'
  },

  // Roasted Almond
  {
    id: 'n-milk-almond',
    name: 'Milk Roasted Almond',
    category: 'nuts',
    description: 'Creamy milk chocolate studded with crunchy, slow-roasted almonds.',
    price_small: 65,
    price_large: 135,
    color: '#8d5b4c',
    shape: 'almond-shape'
  },
  {
    id: 'n-dark-almond',
    name: 'Dark Roasted Almond',
    category: 'nuts',
    description: 'Intense dark chocolate paired with crisp, roasted whole almonds.',
    price_small: 70,
    price_large: 145,
    color: '#3e2723',
    shape: 'almond-shape'
  },
  {
    id: 'n-white-almond',
    name: 'White Roasted Almond',
    category: 'nuts',
    description: 'Sweet white chocolate loaded with golden-brown roasted almonds.',
    price_small: 75,
    price_large: 155,
    color: '#f5e6d3',
    shape: 'almond-shape'
  },

  // Fruit and Nut
  {
    id: 'e-milk-fn',
    name: 'Milk Fruit and Nut',
    category: 'exotic',
    description: 'Creamy milk chocolate with a mix of sweet raisins and crunchy nuts.',
    price_small: 75,
    price_large: 155,
    color: '#8d5b4c',
    shape: 'cluster'
  },
  {
    id: 'e-dark-fn',
    name: 'Dark Fruit and Nut',
    category: 'exotic',
    description: 'Rich dark chocolate packed with premium dried fruits and roasted nuts.',
    price_small: 80,
    price_large: 160,
    color: '#3e2723',
    shape: 'cluster'
  },
  {
    id: 'e-white-fn',
    name: 'White Fruit and Nut',
    category: 'exotic',
    description: 'Smooth white chocolate embedded with sweet cranberries and nuts.',
    price_small: 80,
    price_large: 150,
    color: '#f5e6d3',
    shape: 'cluster'
  },

  // Crunchy Nuts
  {
    id: 'n-milk-cn',
    name: 'Milk Crunchy Nuts',
    category: 'nuts',
    description: 'Milk chocolate featuring a crisp blend of crushed caramelised nuts.',
    price_small: 70,
    price_large: 135,
    color: '#8d5b4c',
    shape: 'swirl'
  },
  {
    id: 'n-dark-cn',
    name: 'Dark Crunchy Nuts',
    category: 'nuts',
    description: 'Deep dark chocolate with a crunchy roasted nut crust.',
    price_small: 75,
    price_large: 140,
    color: '#3e2723',
    shape: 'swirl'
  },
  {
    id: 'n-white-cn',
    name: 'White Crunchy Nuts',
    category: 'nuts',
    description: 'White chocolate dome packed with crunchy nut praline.',
    price_small: 80,
    price_large: 150,
    color: '#f5e6d3',
    shape: 'swirl'
  },

  // Nutty Delights (Peanut Butter)
  {
    id: 'e-milk-pb',
    name: 'Milk Peanut Butter',
    category: 'exotic',
    description: 'Milk chocolate shell filled with a smooth, salted peanut butter cream.',
    price_small: 80,
    price_large: 155,
    color: '#8d5b4c',
    shape: 'dome'
  },
  {
    id: 'e-dark-pb',
    name: 'Dark Peanut Butter',
    category: 'exotic',
    description: 'Dark chocolate dome filled with rich, savory peanut butter fudge.',
    price_small: 85,
    price_large: 165,
    color: '#3e2723',
    shape: 'dome'
  },
  {
    id: 'e-white-pb',
    name: 'White Peanut Butter',
    category: 'exotic',
    description: 'White chocolate cup layered with crunchy salted peanut butter.',
    price_small: 90,
    price_large: 175,
    color: '#f5e6d3',
    shape: 'dome'
  },

  // Gulkand
  {
    id: 'e-milk-gulkan',
    name: 'Milk Gulkand',
    category: 'exotic',
    description: 'Unique fusion of milk chocolate and sweet, aromatic rose-petal preserve (Gulkand).',
    price_small: 80,
    price_large: 155,
    color: '#8d5b4c',
    shape: 'rose'
  },
  {
    id: 'e-dark-gulkan',
    name: 'Dark Gulkand',
    category: 'exotic',
    description: 'A beautiful pairing of bittersweet dark chocolate and floral rose petal filling.',
    price_small: 85,
    price_large: 165,
    color: '#3e2723',
    shape: 'rose'
  },
  {
    id: 'e-white-gulkan',
    name: 'White Gulkand',
    category: 'exotic',
    description: 'Sweet white chocolate cup encasing fragrant, velvety rose preserve.',
    price_small: 90,
    price_large: 175,
    color: '#f5e6d3',
    shape: 'rose'
  },

  // Cookie Crunch
  {
    id: 'c-milk-cookie',
    name: 'Milk Cookie Crunch',
    category: 'crunchy',
    description: 'Milk chocolate loaded with crushed chocolate chip cookies.',
    price_small: 70,
    price_large: 135,
    color: '#8d5b4c',
    shape: 'cookie-shape'
  },
  {
    id: 'c-dark-cookie',
    name: 'Dark Cookie Crunch',
    category: 'crunchy',
    description: 'Bittersweet chocolate blended with crunchy dark cocoa cookies.',
    price_small: 75,
    price_large: 140,
    color: '#3e2723',
    shape: 'cookie-shape'
  },
  {
    id: 'c-white-cookie',
    name: 'White Cookie Crunch',
    category: 'crunchy',
    description: 'Velvety white chocolate mixed with crunchy Oreo-style cookie bits.',
    price_small: 80,
    price_large: 150,
    color: '#f5e6d3',
    shape: 'cookie-shape'
  },

  // Crackles
  {
    id: 'c-milk-crackle',
    name: 'Milk Crackle',
    category: 'crunchy',
    description: 'Milk chocolate loaded with puffed rice crispy crackles.',
    price_small: 70,
    price_large: 135,
    color: '#8d5b4c',
    shape: 'crispy'
  },
  {
    id: 'c-dark-crackle',
    name: 'Dark Crackle',
    category: 'crunchy',
    description: 'Dark chocolate containing airy puffed rice crackles for a light bite.',
    price_small: 75,
    price_large: 140,
    color: '#3e2723',
    shape: 'crispy'
  },
  {
    id: 'c-white-crackle',
    name: 'White Crackle',
    category: 'crunchy',
    description: 'Creamy white chocolate with crispy crackling inclusions.',
    price_small: 80,
    price_large: 150,
    color: '#f5e6d3',
    shape: 'crispy'
  },

  // Butter Scotch Delights
  {
    id: 'c-milk-bs',
    name: 'Milk Butter Scotch',
    category: 'crunchy',
    description: 'Smooth milk chocolate with crunchy, buttery toffee crystals.',
    price_small: 70,
    price_large: 135,
    color: '#8d5b4c',
    shape: 'hexagon'
  },
  {
    id: 'c-dark-bs',
    name: 'Dark Butter Scotch',
    category: 'crunchy',
    description: 'Rich dark chocolate highlighting crisp sweet butterscotch pearls.',
    price_small: 75,
    price_large: 140,
    color: '#3e2723',
    shape: 'hexagon'
  },
  {
    id: 'c-white-bs',
    name: 'White Butter Scotch',
    category: 'crunchy',
    description: 'White chocolate bar packed with buttery toffee brittle.',
    price_small: 80,
    price_large: 150,
    color: '#f5e6d3',
    shape: 'hexagon'
  }
];

// --- Global UI State ---
let selectedSize = 'small'; // 'small' (4 slots) or 'large' (9 slots)
let builderSize = 4; // 4 or 9
let builderSlots = Array(4).fill(null);
let activeBuilderSlot = 0;
let currentMenuFilter = 'all';
let currentBuilderTab = 'all';

// --- Custom Mouse Cursor Logic ---
const cursor = document.getElementById('customCursor');
const cursorRing = document.getElementById('customCursorRing');
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top = mouseY + 'px';
});

function animateRing() {
  // Spring interpolation
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

// Add hover effects on cursor
function setupCursorHovers() {
  const hoverables = document.querySelectorAll('a, button, .filter-btn, .size-btn, .box-slot, .builder-choc-item, .craft-step-trigger, .ig-card');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}
setupCursorHovers();

// --- Sticky Navigation header ---
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile navbar toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// --- Scroll reveals ---
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.15 });

reveals.forEach(el => revealObserver.observe(el));

// --- Stepper Logic for Craft Animations ---
const craftTriggers = document.querySelectorAll('.craft-step-trigger');
const stages = document.querySelectorAll('.craft-stage-art');

craftTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const stageNum = parseInt(trigger.dataset.stage);
    
    // Deactivate all triggers & SVGs
    craftTriggers.forEach(t => t.classList.remove('active'));
    stages.forEach(s => s.classList.remove('active'));
    
    // Activate target
    trigger.classList.add('active');
    document.getElementById(`stage${stageNum}-svg`).classList.add('active');
  });
});

// --- Digital Menu Renderer ---
const menuGrid = document.getElementById('menuGrid');
const sizeToggleWrap = document.getElementById('sizeToggleWrap');
const btnSmallSize = document.getElementById('btnSmallSize');
const btnLargeSize = document.getElementById('btnLargeSize');

function renderMenu() {
  menuGrid.innerHTML = '';
  
  const filtered = chocolates.filter(item => {
    if (currentMenuFilter === 'all') return true;
    return item.category === currentMenuFilter;
  });

  filtered.forEach(item => {
    const price = selectedSize === 'small' ? item.price_small : item.price_large;
    const sizeLabel = selectedSize === 'small' ? 'Box of 4 Pcs' : 'Box of 9 Pcs';
    
    const card = document.createElement('div');
    card.className = 'menu-item-card glass-card';
    card.innerHTML = `
      <div class="menu-item-header">
        <h3 class="menu-item-name">${item.name}</h3>
        <div class="menu-item-price-wrap">
          <span class="menu-item-price">${price}</span>
          <div class="menu-item-size-label">${sizeLabel}</div>
        </div>
      </div>
      <p class="menu-item-desc">${item.description}</p>
      <div class="menu-item-footer">
        <span class="menu-item-cat">${item.category}</span>
        <button class="add-box-btn" onclick="addChocolateToBuilderDirect('${item.id}')">
          Add To Box <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    `;
    menuGrid.appendChild(card);
  });
  setupCursorHovers();
}

// Filter listeners
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMenuFilter = btn.dataset.filter;
    renderMenu();
  });
});

// Size toggle listeners
btnSmallSize.addEventListener('click', () => {
  btnSmallSize.classList.add('active');
  btnLargeSize.classList.remove('active');
  sizeToggleWrap.classList.remove('large-selected');
  selectedSize = 'small';
  renderMenu();
});

btnLargeSize.addEventListener('click', () => {
  btnLargeSize.classList.add('active');
  btnSmallSize.classList.remove('active');
  sizeToggleWrap.classList.add('large-selected');
  selectedSize = 'large';
  renderMenu();
});

// --- Custom Box Builder Simulator ---
const boxGridDisplay = document.getElementById('boxGridDisplay');
const boxSizeBtns = document.querySelectorAll('.box-size-btn');
const builderTabs = document.querySelectorAll('.builder-tab');
const builderScroller = document.getElementById('builderChocScroller');

const summaryBoxSize = document.getElementById('summaryBoxSize');
const summarySlotsFilled = document.getElementById('summarySlotsFilled');
const summaryTotal = document.getElementById('summaryTotal');

// Change box sizes in workspace
boxSizeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    boxSizeBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    const size = parseInt(btn.dataset.size);
    changeBuilderBoxSize(size);
  });
});

function changeBuilderBoxSize(size) {
  builderSize = size;
  builderSlots = Array(size).fill(null);
  activeBuilderSlot = 0;
  
  if (size === 4) {
    boxGridDisplay.className = 'box-grid small-box';
    summaryBoxSize.textContent = 'Small Box (4 Pcs)';
  } else {
    boxGridDisplay.className = 'box-grid large-box';
    summaryBoxSize.textContent = 'Large Box (9 Pcs)';
  }
  
  renderBoxSlots();
  updateBuilderCalculations();
}

// Render the grid empty/filled slots
function renderBoxSlots() {
  boxGridDisplay.innerHTML = '';
  for (let i = 0; i < builderSize; i++) {
    const slot = document.createElement('div');
    slot.className = 'box-slot';
    if (i === activeBuilderSlot) slot.classList.add('active');
    slot.dataset.index = i;
    
    const item = builderSlots[i];
    if (item) {
      // Shape templates
      let iconHTML = '';
      if (item.shape === 'square') {
        iconHTML = `<div style="width: 25px; height: 25px; background: ${item.color}; border-radius: 4px; border: 1px solid var(--color-gold);"></div>`;
      } else if (item.shape === 'round') {
        iconHTML = `<div style="width: 25px; height: 25px; background: ${item.color}; border-radius: 50%; border: 1px solid var(--color-gold);"></div>`;
      } else if (item.shape === 'oval') {
        iconHTML = `<div style="width: 28px; height: 18px; background: ${item.color}; border-radius: 50%; border: 1px solid var(--color-gold);"></div>`;
      } else if (item.shape === 'rose') {
        iconHTML = `<div style="width: 24px; height: 24px; color: ${item.color}; font-size: 1.5rem; text-align: center;"><i class="fas fa-certificate"></i></div>`;
      } else {
        // Default box/bean icon
        iconHTML = `<div style="width: 24px; height: 20px; background: ${item.color}; border-radius: 6px; transform: rotate(15deg); border: 1.5px solid var(--color-gold);"></div>`;
      }

      slot.innerHTML = `
        <div class="filled-chocolate">
          ${iconHTML}
          <div class="filled-chocolate-name">${item.name}</div>
        </div>
        <button class="slot-remove-btn" onclick="removeChocolateFromSlot(event, ${i})">
          <i class="fas fa-times"></i>
        </button>
      `;
    } else {
      slot.innerHTML = `<span class="box-slot-number">${i + 1}</span>`;
    }
    
    // Set slot click listener
    slot.addEventListener('click', (e) => {
      // Don't trigger if clicked remove button
      if (e.target.closest('.slot-remove-btn')) return;
      
      activeBuilderSlot = i;
      document.querySelectorAll('.box-slot').forEach(s => s.classList.remove('active'));
      slot.classList.add('active');
    });
    
    boxGridDisplay.appendChild(slot);
  }
  setupCursorHovers();
}

// Remove from slot
window.removeChocolateFromSlot = function(event, index) {
  event.stopPropagation();
  builderSlots[index] = null;
  renderBoxSlots();
  updateBuilderCalculations();
};

// Render chocolate item selections for panel
function renderBuilderChocolates() {
  builderScroller.innerHTML = '';
  
  const filtered = chocolates.filter(choc => {
    if (currentBuilderTab === 'all') return true;
    return choc.category === currentBuilderTab;
  });

  filtered.forEach(choc => {
    const item = document.createElement('div');
    item.className = 'builder-choc-item';
    
    // Prorated unit price representation
    const unitPrice = builderSize === 4 
      ? Math.round(choc.price_small / 4) 
      : Math.round(choc.price_large / 9);

    item.innerHTML = `
      <div style="width: 32px; height: 32px; background: ${choc.color}; border-radius: 6px; border: 1.5px solid var(--color-gold-border);"></div>
      <div class="builder-choc-info">
        <div class="builder-choc-name">${choc.name}</div>
        <div class="builder-choc-type">${choc.category}</div>
      </div>
      <div class="builder-choc-price">₹${unitPrice}</div>
    `;
    
    item.addEventListener('click', () => {
      addChocolateToActiveSlot(choc);
    });
    
    builderScroller.appendChild(item);
  });
  setupCursorHovers();
}

// Select a tab category inside Builder panel
builderTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    builderTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentBuilderTab = tab.dataset.category;
    renderBuilderChocolates();
  });
});

// Logic to add chocolate
function addChocolateToActiveSlot(choc) {
  builderSlots[activeBuilderSlot] = choc;
  
  // Auto-advance to next empty slot
  let nextEmpty = builderSlots.indexOf(null);
  if (nextEmpty !== -1) {
    activeBuilderSlot = nextEmpty;
  } else {
    // Keep active on same if fully filled
  }
  
  renderBoxSlots();
  updateBuilderCalculations();
}

// Let direct "Add to Box" buttons from the menu place chocolates directly into the builder
window.addChocolateToBuilderDirect = function(chocId) {
  const choc = chocolates.find(c => c.id === chocId);
  if (!choc) return;
  
  // Set builder selection box size based on menu sizing
  const targetSize = selectedSize === 'small' ? 4 : 9;
  if (builderSize !== targetSize) {
    changeBuilderBoxSize(targetSize);
    // Mark appropriate size tab active in visual builder
    boxSizeBtns.forEach(btn => {
      if (parseInt(btn.dataset.size) === targetSize) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }
  
  // Put chocolate in active builder slot
  builderSlots[activeBuilderSlot] = choc;
  
  // Advance slot
  let nextEmpty = builderSlots.indexOf(null);
  if (nextEmpty !== -1) {
    activeBuilderSlot = nextEmpty;
  }
  
  renderBoxSlots();
  updateBuilderCalculations();
  renderBuilderChocolates(); // update unit prices on picker list
  
  // Smooth scroll down to builder section so they can review their selection
  document.getElementById('builder').scrollIntoView({ behavior: 'smooth' });
};

// Calculate total box price dynamically
function updateBuilderCalculations() {
  const filledCount = builderSlots.filter(s => s !== null).length;
  summarySlotsFilled.textContent = `${filledCount} / ${builderSize}`;
  
  let totalPrice = 0;
  
  // Custom box rate: if completely empty, price is 0
  if (filledCount > 0) {
    // Unit price calculation: Sum of individual chocolates' prorated prices
    builderSlots.forEach(slot => {
      if (slot) {
        const itemUnitPrice = builderSize === 4 
          ? (slot.price_small / 4) 
          : (slot.price_large / 9);
        totalPrice += itemUnitPrice;
      }
    });
    
    // Round to clean currency values
    totalPrice = Math.round(totalPrice);
  }
  
  summaryTotal.textContent = totalPrice;
}

// --- Order Checkout via DM & Clipboard Template ---
const checkoutBtn = document.getElementById('checkoutBtn');
checkoutBtn.addEventListener('click', () => {
  // Validate slots
  const filledCount = builderSlots.filter(s => s !== null).length;
  if (filledCount === 0) {
    alert("Please add at least one chocolate flavor to your box before ordering!");
    return;
  }
  
  // Get contact details if filled
  const name = document.getElementById('formName').value.trim() || 'Valued Customer';
  const phone = document.getElementById('formPhone').value.trim() || 'Not Provided';
  
  // Gather item quantities
  const counts = {};
  builderSlots.forEach(slot => {
    if (slot) {
      counts[slot.name] = (counts[slot.name] || 0) + 1;
    }
  });
  
  let itemDescription = '';
  for (const [key, val] of Object.entries(counts)) {
    itemDescription += `  - ${val}x ${key}\n`;
  }
  
  const boxTypeName = builderSize === 4 ? 'Small Box (4 Pcs)' : 'Large Box (9 Pcs)';
  const totalPriceVal = summaryTotal.textContent;
  
  // Generate WhatsApp style checkout message
  const checkoutMessage = `Hi Aurora Cocoa! 🍫 I would like to order a Custom Chocolate Box:\n\n` +
                          `📦 Box Size: ${boxTypeName}\n` +
                          `✨ Assortment Details:\n${itemDescription}` +
                          `💰 Estimated Price: ₹${totalPriceVal}\n\n` +
                          `👤 Name: ${name}\n` +
                          `📞 Phone: ${phone}\n\n` +
                          `Let's connect to confirm delivery!`;
                          
  // Copy to clipboard
  navigator.clipboard.writeText(checkoutMessage).then(() => {
    alert("Your custom chocolate box configuration has been copied to your clipboard! Paste it directly into the Instagram DM to message the business.");
    // Open Instagram link
    window.open("https://www.instagram.com/aurora.cocoa.chocolates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
  }).catch(err => {
    console.error('Could not copy text: ', err);
    // Fallback if clipboard fails: open link anyway with warning
    window.open("https://www.instagram.com/aurora.cocoa.chocolates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
  });
});

// --- Contact Form FormSubmit redirection ---
window.handleFormSubmit = function(event) {
  event.preventDefault();
  
  const name = document.getElementById('formName').value;
  const phone = document.getElementById('formPhone').value;
  const message = document.getElementById('formMessage').value;
  
  const encodedText = encodeURIComponent(
    `Hi Aurora Cocoa! 🍫\n\nName: ${name}\nPhone: ${phone}\nInquiry Details: ${message}`
  );
  
  // Send inquiry using whatsapp link API (gourmet food standards usually prefer direct communication links)
  // Or copy and open instagram
  const targetURL = `https://wa.me/919999999999?text=${encodedText}`; // Placeholder phone number, standard format.
  window.open(targetURL, "_blank");
};

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  changeBuilderBoxSize(4);
  renderBuilderChocolates();
});
