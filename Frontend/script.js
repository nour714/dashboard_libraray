/**
 * ============================================================
 * TRANSLATIONS
 * ============================================================
 */
const TRANSLATIONS = {
  ar: {
    title: 'مكتبة الدولي | نظام إدارة المكتبة',
    brand: 'مكتبة الدولي',
    dashboard: 'لوحة التحكم',
    books: 'الكتب',
    orders: 'الطلبات',
    users: 'المستخدمون',
    departments: 'الأقسام',
    publishers: 'دور النشر',
    authors: 'المؤلفون',
    profile: 'الملف الشخصي',
    logout: 'تسجيل الخروج',
    login: 'تسجيل الدخول',
    register: 'حساب جديد',
    admin_login: 'دخول Admin',
    user_login: 'دخول User',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    name: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    address: 'العنوان',
    account_type: 'نوع الحساب',
    user: 'مستخدم',
    admin: 'مدير',
    total_books: 'إجمالي الكتب',
    total_users: 'إجمالي المستخدمين',
    total_orders: 'الطلبات الكلية',
    total_revenue: 'إجمالي الإيرادات (ج.م)',
    monthly_orders: 'الطلبات الشهرية',
    latest_activity: 'آخر النشاطات',
    manage_books: 'إدارة الكتب',
    add_book: 'إضافة كتاب',
    edit: 'تعديل',
    delete: 'حذف',
    details: 'تفاصيل',
    all: 'الكل',
    arabic: 'عربي',
    english: 'English',
    all_depts: 'كل الأقسام',
    search_placeholder: 'ابحث عن كتاب، مستخدم، طلب...',
    books_search: 'ابحث في الكتب...',
    users_search: 'ابحث في المستخدمين...',
    orders_search: 'ابحث في الطلبات...',
    save_changes: 'حفظ التغييرات',
    new_order: 'طلب جديد',
    confirm_order: 'تأكيد الطلب',
    quantity: 'الكمية',
    delivery_address: 'عنوان التوصيل',
    unit_price: 'سعر الكتاب',
    total: 'الإجمالي',
    success_login: 'مرحباً',
    error_login: 'بيانات غير صحيحة',
    success_register: 'تم إنشاء الحساب بنجاح',
    logout_msg: 'تم تسجيل الخروج',
    empty_books: 'لا توجد كتب',
    empty_users: 'لا يوجد مستخدمون',
    empty_orders: 'لا توجد طلبات',
    confirm_delete: 'هل أنت متأكد من الحذف؟',
    save_success: 'تم حفظ التغييرات بنجاح',
    currency: 'ج.م',
    pages: 'الصفحات',
    publisher: 'الناشر',
    author: 'المؤلف',
    role_admin: 'مدير النظام',
    role_user: 'مستخدم',
    change_theme: 'تغيير المظهر',
    notifications: 'الإشعارات',
    settings: 'الإعدادات',
    save: 'حفظ',
    order: 'طلب',
    completed: 'مكتمل',
    deleted_book: 'كتاب محذوف',
    no_matching_orders: 'لا توجد طلبات مطابقة',
    try_diff_search: 'جرّب كلمة بحث مختلفة.',
    place_order_now: 'اطلب كتابك الأول الآن!',
    error_fields: 'يرجى إكمال جميع الحقول',
    error_pub_delete: 'لا يمكن حذف ناشر له كتب',
    error_name_author: 'يرجى إدخال اسم المؤلف',
    error_author_delete: 'لا يمكن حذف مؤلف له كتب',
    stats: 'الإحصائيات',
    added_book: 'تمت إضافة كتاب',
    new_order_from: 'طلب جديد من',
    customer: 'عميل',
    new_label: 'جديد',
    active_label: 'نشط',
    login_google: 'المتابعة باستخدام جوجل'
  },
  en: {
    title: 'El-Dawle Library | Library Management',
    brand: 'El-Dawle Library',
    dashboard: 'Dashboard',
    books: 'Books',
    orders: 'Orders',
    users: 'Users',
    departments: 'Departments',
    publishers: 'Publishers',
    authors: 'Authors',
    profile: 'Profile',
    logout: 'Logout',
    login: 'Login',
    register: 'Register',
    admin_login: 'Admin Login',
    user_login: 'User Login',
    email: 'Email',
    password: 'Password',
    name: 'Full Name',
    phone: 'Phone Number',
    address: 'Address',
    account_type: 'Account Type',
    user: 'User',
    admin: 'Admin',
    total_books: 'Total Books',
    total_users: 'Total Users',
    total_orders: 'Total Orders',
    total_revenue: 'Total Revenue (EGP)',
    monthly_orders: 'Monthly Orders',
    latest_activity: 'Latest Activity',
    manage_books: 'Manage Books',
    add_book: 'Add Book',
    edit: 'Edit',
    delete: 'Delete',
    details: 'Details',
    all: 'All',
    arabic: 'Arabic',
    english: 'English',
    all_depts: 'All Departments',
    search_placeholder: 'Search for book, user, order...',
    books_search: 'Search books...',
    users_search: 'Search users...',
    orders_search: 'Search orders...',
    save_changes: 'Save Changes',
    new_order: 'New Order',
    confirm_order: 'Confirm Order',
    quantity: 'Quantity',
    delivery_address: 'Delivery Address',
    unit_price: 'Unit Price',
    total: 'Total',
    success_login: 'Welcome',
    error_login: 'Invalid credentials',
    success_register: 'Account created successfully',
    logout_msg: 'Logged out successfully',
    empty_books: 'No books found',
    empty_users: 'No users found',
    empty_orders: 'No orders found',
    confirm_delete: 'Are you sure you want to delete?',
    save_success: 'Changes saved successfully',
    save: 'Save',
    currency: 'EGP',
    pages: 'Pages',
    publisher: 'Publisher',
    author: 'Author',
    role_admin: 'System Admin',
    role_user: 'User',
    change_theme: 'Toggle Theme',
    notifications: 'Notifications',
    settings: 'Settings',
    order: 'Order',
    completed: 'Completed',
    deleted_book: 'Deleted Book',
    no_matching_orders: 'No matching orders',
    try_diff_search: 'Try a different search term.',
    place_order_now: 'Place your first order now!',
    error_fields: 'Please fill all fields',
    error_pub_delete: 'Cannot delete publisher with books',
    error_name_author: 'Please enter author name',
    error_author_delete: 'Cannot delete author with books',
    stats: 'Statistics',
    added_book: 'Added book',
    new_order_from: 'New order from',
    customer: 'Customer',
    new_label: 'New',
    active_label: 'Active',
    login_google: 'Continue with Google'
  }
};

/**
 * ============================================================
 * IN-MEMORY CACHE (populated from API)
 * ============================================================
 */
const DB = {
  books: [], authors: [], departments: [], publishers: [],
  users: [], customers: [], orders: [], order_items: []
};

// No-op — we no longer write to localStorage for data
function saveDB() {}

/**
 * ============================================================
 * STATE
 * ============================================================
 */
let currentLang = localStorage.getItem('library_lang') || 'ar';
let currentUser = JSON.parse(localStorage.getItem('lib_user') || 'null');
let currentPage = 'dashboard';
let booksViewMode = 'table';
let filteredBooks = [];
let booksPage = 1;
const BOOKS_PER_PAGE = 6;
const bookFilters = { lang: 'all', dept: '', query: '' };
let usersFiltered = [];
let usersPage = 1;
let orderSearchQuery = '';

/**
 * ============================================================
 * LANGUAGE SYSTEM
 * ============================================================
 */
function t(key) {
  return TRANSLATIONS[currentLang][key] || key;
}

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('library_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  currentLang = lang;

  // Update logo mark based on language
  document.querySelectorAll('.logo-mark').forEach(el => {
    el.textContent = lang === 'ar' ? 'د' : 'D';
  });

  // Update static elements with data-t attribute
  document.title = t('title');
  document.querySelectorAll('[data-t]').forEach((el) => {
    const key = el.dataset.t;
    const translation = t(key);
    
    // If it has a title attribute, translate the title
    if (el.hasAttribute('title')) {
      el.setAttribute('title', translation);
    }

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = translation;
    } else if (!el.classList.contains('icon-btn') && !el.classList.contains('nav-icon')) {
      // Only replace text content for non-icon elements
      let textFound = false;
      el.childNodes.forEach(node => {
        if (node.nodeType === 3 && node.textContent.trim().length > 0) {
          node.textContent = translation;
          textFound = true;
        }
      });
      if (!textFound && el.children.length === 0) el.textContent = translation;
    }
  });

  // Re-render current state if app is open
  if (currentUser) {
    setupApp();
  } else {
    // Update auth tabs
    switchAuthTab('login');
  }
}


/**
 * ============================================================
 * API HELPERS — wired to api.js
 * ============================================================
 */
async function apiGet(endpoint)        { return GET(endpoint); }
async function apiPost(endpoint, data) { return POST(endpoint, data); }

/**
 * ============================================================
 * UI UTILITIES
 * ============================================================
 */
function setInputValue(id, value) {
  const el = document.getElementById(id);
  if (el) el.value = value;
}

function normalizeExternalUrl(value) {
  const raw = String(value || '').trim();
  if (!raw) return '';

  const candidate = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`;

  try {
    const url = new URL(candidate);
    if (!url.hostname || !['http:', 'https:'].includes(url.protocol)) {
      return '';
    }
    return url.toString();
  } catch {
    return '';
  }
}

function updateSidebarToggle(isOpen) {
  const toggle = document.getElementById('sidebar-toggle');
  if (toggle) {
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }
}

function closeSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.remove('open');
  }
  document.body.classList.remove('sidebar-open');
  updateSidebarToggle(false);
}

function openSidebar() {
  if (window.innerWidth > 768) return;
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.add('open');
  }
  document.body.classList.add('sidebar-open');
  updateSidebarToggle(true);
}

function toggleSidebar() {
  if (document.body.classList.contains('sidebar-open')) {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function syncSidebarState() {
  if (window.innerWidth > 768) {
    closeSidebar();
  }
}

function updateSidebarCounters() {
  const usersBadge = document.querySelector('.nav-badge');
  if (usersBadge) {
    usersBadge.textContent = DB.users.length;
  }
}

function resetUserForm() {
  setInputValue('u-name', '');
  setInputValue('u-email', '');
  setInputValue('u-pass', '');
  setInputValue('u-type', 'USER');
  setInputValue('u-phone', '');
  setInputValue('u-address', '');
}

function resetSearchState() {
  bookFilters.lang = 'all';
  bookFilters.dept = '';
  bookFilters.query = '';
  booksPage = 1;
  usersFiltered = [...DB.users];
  usersPage = 1;
  orderSearchQuery = '';
  setInputValue('books-search', '');
  setInputValue('users-search', '');
  setInputValue('orders-search', '');
}

/**
 * ============================================================
 * AUTH
 * ============================================================
 */
function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach((t, i) => {
    t.classList.toggle('active', i === (tab === 'login' ? 0 : 1));
  });
  document.getElementById('tab-login').style.display = tab === 'login' ? '' : 'none';
  document.getElementById('tab-register').style.display = tab === 'register' ? '' : 'none';
}

function quickLogin(type) {
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-pass');
  
  if (type === 'admin') {
    emailInput.value = 'admin@library.com';
    passInput.value = 'admin123';
  } else {
    emailInput.value = 'user@library.com';
    passInput.value = 'user123';
  }
  doLogin();
}

function initGoogleSignIn() {
  if (typeof google === 'undefined' || !google.accounts) return;
  google.accounts.id.initialize({
    // ⚠️ ضع الـ Client ID الخاص بك من Google Cloud Console هنا:
    client_id: "YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com",
    callback: handleGoogleResponse
  });

  const btnOptions = { theme: "outline", size: "large", type: "standard", text: "continue_with", width: 300, locale: currentLang };
  
  const loginBtn = document.getElementById("google-btn-login");
  if (loginBtn) google.accounts.id.renderButton(loginBtn, btnOptions);
  
  const regBtn = document.getElementById("google-btn-register");
  if (regBtn) google.accounts.id.renderButton(regBtn, btnOptions);
}

function handleGoogleResponse(response) {
   const jwt = response.credential;
   const base64Url = jwt.split('.')[1];
   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
   }).join(''));

   const payload = JSON.parse(jsonPayload);
   const email = payload.email;
   const name = payload.name;
   
   let user = DB.users.find(u => u.USER_EMAIL === email);
   if (!user) {
      // For now we just create a temp object or wait for backend. 
      // But let's fix the crash by using a timestamp as ID if needed, 
      // though ideally this should call a Register API for Google users.
      user = {
        USER_ID: Date.now(),
        USER_NAME: name,
        USER_EMAIL: email,
        USER_PASSWORD: '',
        USER_TYPE: 'USER'
      };
      DB.users.push(user);
   }
   
   currentUser = user;
   resetSearchState();
   showToast(`✅ ${t('success_login')} ${user.USER_NAME}`, 'success');
   document.getElementById('auth-overlay').style.display = 'none';
   document.getElementById('app').classList.add('visible');
   setupApp();
}

window.addEventListener('load', () => {
  setTimeout(initGoogleSignIn, 500); // Wait for GSI to load
});

async function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value.trim();

  if (!email || !pass) { showToast(`❌ ${t('error_fields')}`, 'error'); return; }

  try {
    const res = await AuthAPI.login(email, pass);
    Token.set(res.token);
    localStorage.setItem('lib_user', JSON.stringify(res.user));
    currentUser = res.user;
    // map field names for compatibility
    currentUser.USER_TYPE  = res.user.user_type  || res.user.USER_TYPE;
    currentUser.USER_NAME  = res.user.user_name  || res.user.USER_NAME;
    currentUser.USER_EMAIL = res.user.user_email || res.user.USER_EMAIL;
    currentUser.USER_ID    = res.user.user_id    || res.user.USER_ID;

    resetSearchState();
    showToast(`✅ ${t('success_login')} ${currentUser.USER_NAME}`, 'success');
    document.getElementById('auth-overlay').style.display = 'none';
    document.getElementById('app').classList.add('visible');
    setupApp();
  } catch (e) {
    showToast(`❌ ${t('error_login')}`, 'error');
  }
}

async function doRegister() {
  const name    = document.getElementById('reg-name').value.trim();
  const email   = document.getElementById('reg-email').value.trim();
  const pass    = document.getElementById('reg-pass').value.trim();
  const phone   = document.getElementById('reg-phone').value.trim();
  const address = document.getElementById('reg-address').value.trim();

  if (!name || !email || !pass || !phone || !address) {
    showToast(`❌ ${t('error_fields')}`, 'error');
    return;
  }

  try {
    const res = await AuthAPI.register(name, email, pass, phone, address);
    Token.set(res.token);
    const user = res.user;
    currentUser = {
      USER_ID:    user.user_id    || user.USER_ID,
      USER_NAME:  user.user_name  || user.USER_NAME,
      USER_EMAIL: user.user_email || user.USER_EMAIL,
      USER_TYPE:  user.user_type  || user.USER_TYPE,
    };
    localStorage.setItem('lib_user', JSON.stringify(currentUser));
    resetSearchState();
    showToast(`✅ ${t('success_register')}`, 'success');
    document.getElementById('auth-overlay').style.display = 'none';
    document.getElementById('app').classList.add('visible');
    setupApp();
  } catch (e) { /* error shown by apiRequest */ }
}

function doLogout() {
  AuthAPI.logout();
  currentUser = null;
  resetSearchState();
  closeSidebar();
  document.getElementById('global-search').value = '';
  document.getElementById('auth-overlay').style.display = 'flex';
  document.getElementById('app').classList.remove('visible');
  showToast(`👋 ${t('logout_msg')}`);
}

/**
 * ============================================================
 * APP SETUP
 * ============================================================
 */
async function setupApp() {
  const isAdmin = currentUser.USER_TYPE === 'ADMIN';

  // Sidebar user info
  document.getElementById('sidebar-avatar').textContent = currentUser.USER_NAME[0];
  document.getElementById('sidebar-name').textContent = currentUser.USER_NAME;
  
  const roleEl = document.getElementById('sidebar-role');
  roleEl.textContent = isAdmin ? t('role_admin') : t('role_user');
  roleEl.className = `role ${isAdmin ? 'role-admin' : 'role-user'}`;

  // Profile
  document.getElementById('profile-avatar').textContent = currentUser.USER_NAME[0];
  document.getElementById('profile-name').textContent = currentUser.USER_NAME;
  document.getElementById('profile-email').textContent = currentUser.USER_EMAIL;
  document.getElementById('profile-role').textContent = isAdmin ? t('role_admin') : t('role_user');
  
  document.getElementById('pf-name').value = currentUser.USER_NAME;
  document.getElementById('pf-email').value = currentUser.USER_EMAIL;
  
  // Ensure customers are loaded for profile
  if (!DB.customers.length) {
    try {
      const res = await CustomersAPI.getAll();
      DB.customers = Array.isArray(res) ? res : [res];
    } catch (e) {}
  }
  
  const cust = DB.customers.find((c) => c.USER_ID === currentUser.USER_ID);
  if (cust) {
    document.getElementById('pf-phone').value = cust.CUSTOMER_PHONE || '';
    document.getElementById('pf-address').value = cust.CUSTOMER_ADDRESS || '';
  } else {
    document.getElementById('pf-phone').value = '';
    document.getElementById('pf-address').value = '';
  }

  document.getElementById('customer-fields').style.display = isAdmin ? 'none' : '';

  // Build nav
  const nav = document.getElementById('sidebar-nav');
  const adminNav = isAdmin ? `
    <div class="nav-section">
      <div class="nav-section-title">${t('admin')}</div>
      <div class="nav-item" onclick="navigate('users')">
        <span class="nav-icon">👥</span>${t('users')} 
        <span class="nav-badge">${DB.users.length}</span>
      </div>
      <div class="nav-item" onclick="navigate('departments')">
        <span class="nav-icon">🏛️</span>${t('departments')}
      </div>
      <div class="nav-item" onclick="navigate('publishers')">
        <span class="nav-icon">🏢</span>${t('publishers')}
      </div>
      <div class="nav-item" onclick="navigate('authors')">
        <span class="nav-icon">✍️</span>${t('authors')}
      </div>
    </div>
  ` : '';

  nav.innerHTML = `
    <div class="nav-section">
      <div class="nav-section-title">${t('all')}</div>
      <div class="nav-item active" onclick="navigate('dashboard')">
        <span class="nav-icon">📊</span>${t('dashboard')}
      </div>
    </div>
    <div class="nav-section">
      <div class="nav-section-title">${t('books')}</div>
      <div class="nav-item" onclick="navigate('books')">
        <span class="nav-icon">📚</span>${t('books')}
      </div>
      <div class="nav-item" onclick="navigate('orders')">
        <span class="nav-icon">🛒</span>${t('orders')}
      </div>
    </div>
    ${adminNav}
  `;
  
  updateSidebarCounters();
  setInputValue('orders-search', orderSearchQuery);

  // Admin-only elements
  document.querySelectorAll('.admin-only').forEach((el) => {
    el.style.display = isAdmin ? '' : 'none';
  });

  // Orders button for user
  const btnNewOrder = document.getElementById('btn-new-order');
  if (btnNewOrder) btnNewOrder.style.display = !isAdmin ? '' : 'none';
  
  const ordersSubtitle = document.getElementById('orders-subtitle');
  if (ordersSubtitle) ordersSubtitle.textContent = isAdmin ? t('orders') : t('orders');

  navigate(currentPage);
  closeSidebar();
}

/**
 * ============================================================
 * NAVIGATION
 * ============================================================
 */
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.page').forEach((p) => p.classList.remove('active'));
  
  const targetPage = document.getElementById(`page-${page}`);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update sidebar active state
  document.querySelectorAll('.nav-item').forEach((i) => {
    const clickAttr = i.getAttribute('onclick') || '';
    i.classList.toggle('active', clickAttr.includes(`'${page}'`));
  });

  const titles = {
    dashboard: t('dashboard'),
    books: t('books'),
    orders: t('orders'),
    users: t('users'),
    departments: t('departments'),
    publishers: t('publishers'),
    authors: t('authors'),
    profile: t('profile')
  };
  
  const topbarTitle = document.getElementById('topbar-title');
  if (topbarTitle) topbarTitle.textContent = titles[page] || page;

  if (page === 'dashboard') loadDashboard();
  else if (page === 'books') loadBooks();
  else if (page === 'orders') loadOrders();
  else if (page === 'users') loadUsers();
  else if (page === 'departments') loadDepts();
  else if (page === 'publishers') loadPubs();
  else if (page === 'authors') loadAuthors();
  else if (page === 'profile') syncSettingsUI();

  closeSidebar();
}

/**
 * ============================================================
 * DASHBOARD
 * ============================================================
 */
async function loadDashboard() {
  // For admin: use real stats API
  if (currentUser && currentUser.USER_TYPE === 'ADMIN') {
    try {
      const data = await DashboardAPI.stats();
      const s = data.stats;
      animateNumber('stat-books',   s.total_books);
      animateNumber('stat-users',   s.total_customers);
      animateNumber('stat-orders',  s.total_orders);
      animateNumber('stat-revenue', Math.round(s.total_revenue));

      // Activity list from recent orders
      const activityList = document.getElementById('activity-list');
      if (activityList && data.recent_orders) {
        activityList.innerHTML = data.recent_orders.map((o) => `
          <div class="activity-item">
            <div class="activity-dot" style="background:var(--success)"></div>
            <div class="activity-text">🛒 ${t('new_order_from')} ${o.CUSTOMER_NAME || t('customer')}</div>
            <div class="activity-time">${o.ORDER_DATE?.slice(0,10) || t('active_label')}</div>
          </div>
        `).join('');
      }

      // Chart using revenue as base
      const totalRevenue = parseFloat(s.total_revenue) || 0;
      renderMonthlyChart(totalRevenue);
      return;
    } catch(e) { /* fallback to local */ }
  }

  // Fallback: use cached DB data
  if (!DB.orders.length) {
    try {
      DB.orders = await OrdersAPI.getAll();
    } catch(e) {}
  }
  const totalRevenue = DB.orders.reduce((sum, o) => sum + parseFloat(o.TOTAL_COST || 0), 0);
  animateNumber('stat-books',   DB.books.length);
  animateNumber('stat-users',   DB.users.length);
  animateNumber('stat-orders',  DB.orders.length);
  animateNumber('stat-revenue', Math.round(totalRevenue));
  renderMonthlyChart(totalRevenue);

  const recentOrders = [...DB.orders].reverse().slice(0, 3);
  const activities = recentOrders.map((o) => {
    const cust = DB.customers.find((c) => c.CUSTOMER_ID === o.CUSTOMER_ID);
    const user = cust ? DB.users.find((u) => u.USER_ID === cust.USER_ID) : null;
    return { icon: '🛒', text: `${t('new_order_from')} ${user ? user.USER_NAME : t('customer')}`, time: t('active_label'), color: 'var(--success)' };
  });
  const activityList = document.getElementById('activity-list');
  if (activityList) {
    activityList.innerHTML = activities.map((a) => `
      <div class="activity-item">
        <div class="activity-dot" style="background:${a.color}"></div>
        <div class="activity-text">${a.icon} ${a.text}</div>
        <div class="activity-time">${a.time}</div>
      </div>
    `).join('');
  }
}

function renderMonthlyChart(totalRevenue) {
  const monthsAr = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const monthsEn = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const months   = currentLang === 'ar' ? monthsAr : monthsEn;
  const baseVal  = totalRevenue / 12;
  const vals     = months.map(() => Math.round(baseVal * (0.8 + Math.random() * 0.4)));
  const max      = Math.max(...vals, 1);
  const monthlyChart = document.getElementById('monthly-chart');
  
  if (monthlyChart) {
    monthlyChart.innerHTML = vals.map((v, i) => `
      <div class="bar-col" onclick="showToast('📊 ${months[i]}: ${v} ${t('currency')}')">
        <div class="bar-val">${Math.round(v)}</div>
        <div class="bar" id="bar-${i}" style="height: 0%"></div>
        <div class="bar-label">${months[i]}</div>
      </div>
    `).join('');

    // Trigger animation
    setTimeout(() => {
      vals.forEach((v, i) => {
        const bar = document.getElementById(`bar-${i}`);
        if (bar) bar.style.height = `${(v / max) * 100}%`;
      });
    }, 100);
  }
}

function animateNumber(id, target) {
  const el = document.getElementById(id);
  if (!el) return;
  
  let cur = 0;
  const duration = 30; // Steps
  const step = Math.ceil(target / duration);
  const locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';
  
  const timer = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur.toLocaleString(locale);
    if (cur >= target) {
      clearInterval(timer);
    }
  }, 30);
}

/**
 * ============================================================
 * BOOKS
 * ============================================================
 */
async function loadBooks() {
  try {
    // Fetch data from API in parallel
    const [books, depts, pubs, authors] = await Promise.all([
      BooksAPI.getAll(),
      DeptsAPI.getAll(),
      PubsAPI.getAll(),
      AuthorsAPI.getAll()
    ]);
    DB.books       = books   || [];
    DB.departments = depts   || [];
    DB.publishers  = pubs    || [];
    DB.authors     = authors || [];
  } catch(e) { /* use cached */ }

  // Populate dept filter
  const df = document.getElementById('dept-filter');
  if (df) {
    df.innerHTML = `<option value="">${t('all_depts')}</option>` +
      DB.departments.map((d) => `<option value="${d.DEPARTMENT_ID}">${d.DEPARTMENT_NAME}</option>`).join('');
    df.value = bookFilters.dept;
  }

  // Populate modal selects
  const bkDept = document.getElementById('bk-dept');
  if (bkDept) bkDept.innerHTML = DB.departments.map((d) => `<option value="${d.DEPARTMENT_ID}">${d.DEPARTMENT_NAME}</option>`).join('');

  const bkPub = document.getElementById('bk-pub');
  if (bkPub) bkPub.innerHTML = DB.publishers.map((p) => `<option value="${p.PUBLISHER_ID}">${p.PUBLISHER_NAME}</option>`).join('');

  const bkAuthor = document.getElementById('bk-author');
  if (bkAuthor) bkAuthor.innerHTML = DB.authors.map((a) => `<option value="${a.AUTHOR_ID}">${a.FIRST_NAME} ${a.LAST_NAME}</option>`).join('');

  setInputValue('books-search', bookFilters.query);
  syncBookFilterButtons();
  applyBookFilters();
}

function renderBooks() {
  const start = (booksPage - 1) * BOOKS_PER_PAGE;
  const paged = filteredBooks.slice(start, start + BOOKS_PER_PAGE);
  const isAdmin = currentUser && currentUser.USER_TYPE === 'ADMIN';

  // Table View
  const tableBody = document.getElementById('books-table-body');
  if (tableBody) {
    tableBody.innerHTML = paged.length ? paged.map((b) => {
      const dept = DB.departments.find((d) => d.DEPARTMENT_ID === b.DEPARTMENT_ID);
      const pub = DB.publishers.find((p) => p.PUBLISHER_ID === b.PUBLISHER_ID);
      return `
        <tr>
          <td><strong style="color:var(--text)">${b.TITLE}</strong></td>
          <td><span class="badge badge-gold">${dept ? dept.DEPARTMENT_NAME : '-'}</span></td>
          <td style="color:var(--text-dim)">${pub ? pub.PUBLISHER_NAME : '-'}</td>
          <td style="color:var(--text-dim)">${b.PAGES_NUMBER}</td>
          <td><strong style="color:var(--gold)">${parseFloat(b.PRICE).toFixed(2)} ${t('currency')}</strong></td>
          <td>
            <span class="badge ${b.LANGUAGE === 'AR' ? 'badge-green' : 'badge-blue'}">
              ${b.LANGUAGE === 'AR' ? t('arabic') : t('english')}
            </span>
          </td>
          <td>
            <div class="td-actions">
              <button class="btn-edit" onclick="showBookDetail(${b.BOOK_ID})">📖 ${t('details')}</button>
              ${isAdmin ? `<button class="btn-danger" onclick="deleteBook(${b.BOOK_ID})">🗑️ ${t('delete')}</button>` : ''}
            </div>
          </td>
        </tr>
      `;
    }).join('') : `
      <tr>
        <td colspan="7">
          <div class="empty-state">
            <div class="empty-icon">📚</div>
            <div class="empty-title">${t('empty_books')}</div>
          </div>
        </td>
      </tr>
    `;
  }

  // Grid View
  const gridBody = document.getElementById('books-grid-body');
  if (gridBody) {
    gridBody.innerHTML = paged.map((b) => {
      const dept = DB.departments.find((d) => d.DEPARTMENT_ID === b.DEPARTMENT_ID);
      const emojis = { 1: '📖', 2: '🔬', 3: '🏛️', 4: '🧠', 5: '🌍' };
      return `
        <div class="book-card" onclick="showBookDetail(${b.BOOK_ID})">
          <div class="book-cover ${b.LANGUAGE === 'AR' ? 'ar' : 'en'}">
            ${emojis[b.DEPARTMENT_ID] || '📚'}
            <span class="book-lang-badge">${b.LANGUAGE}</span>
          </div>
          <div class="book-info">
            <div class="book-title">${b.TITLE}</div>
            <div class="book-dept">${dept ? dept.DEPARTMENT_NAME : '-'}</div>
            <div class="book-price">${parseFloat(b.PRICE).toFixed(2)} <span>${t('currency')}</span></div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Pagination
  const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
  renderPagination('books-pagination', booksPage, totalPages, (p) => {
    booksPage = p;
    renderBooks();
  });
}

function syncBookFilterButtons() {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === bookFilters.lang);
  });
}

function applyBookFilters() {
  const query = bookFilters.query.trim().toLowerCase();
  filteredBooks = DB.books.filter((b) => {
    const matchesLang = bookFilters.lang === 'all' || b.LANGUAGE === bookFilters.lang;
    const matchesDept = !bookFilters.dept || String(b.DEPARTMENT_ID) === String(bookFilters.dept);
    const matchesQuery = !query || b.TITLE.toLowerCase().includes(query);
    return matchesLang && matchesDept && matchesQuery;
  });
  syncBookFilterButtons();
  renderBooks();
}

function filterBooks(lang, btn) {
  bookFilters.lang = lang;
  if (btn) btn.blur();
  booksPage = 1;
  applyBookFilters();
}

function filterBooksByDept(deptId) {
  bookFilters.dept = deptId;
  booksPage = 1;
  applyBookFilters();
}

function searchBooks(q) {
  bookFilters.query = q;
  booksPage = 1;
  applyBookFilters();
}

function toggleView() {
  booksViewMode = booksViewMode === 'table' ? 'grid' : 'table';
  document.getElementById('books-view-table').style.display = booksViewMode === 'table' ? '' : 'none';
  document.getElementById('books-view-grid').style.display = booksViewMode === 'grid' ? '' : 'none';
}

function showBookDetail(id) {
  const b = DB.books.find((x) => x.BOOK_ID === id);
  const deptName = b.DEPARTMENT_NAME || '-';
  const pubName = b.PUBLISHER_NAME || '-';
  const authorsStr = b.AUTHORS || '-';

  const isUser = currentUser && currentUser.USER_TYPE === 'USER';
  
  const detailTitle = document.getElementById('detail-title');
  if (detailTitle) detailTitle.textContent = b.TITLE;

  const detailContent = document.getElementById('book-detail-content');
  if (detailContent) {
    detailContent.innerHTML = `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:20px">
        <div style="background:var(--black3);border-radius:var(--radius);padding:14px">
          <div style="font-size:11px;color:var(--text-dim);margin-bottom:4px;text-transform:uppercase;letter-spacing:1px">${t('departments')}</div>
          <div style="font-size:14px;font-weight:700;color:var(--gold)">${deptName}</div>
        </div>
        <div style="background:var(--black3);border-radius:var(--radius);padding:14px">
          <div style="font-size:11px;color:var(--text-dim);margin-bottom:4px;text-transform:uppercase;letter-spacing:1px">${t('publisher')}</div>
          <div style="font-size:14px;font-weight:700;color:var(--text)">${pubName}</div>
        </div>
        <div style="background:var(--black3);border-radius:var(--radius);padding:14px">
          <div style="font-size:11px;color:var(--text-dim);margin-bottom:4px;text-transform:uppercase;letter-spacing:1px">${t('author')}</div>
          <div style="font-size:14px;font-weight:700;color:var(--text)">${authorsStr}</div>
        </div>
        <div style="background:var(--black3);border-radius:var(--radius);padding:14px">
          <div style="font-size:11px;color:var(--text-dim);margin-bottom:4px;text-transform:uppercase;letter-spacing:1px">${t('pages')}</div>
          <div style="font-size:14px;font-weight:700;color:var(--text)">${b.PAGES_NUMBER} ${t('pages')}</div>
        </div>
      </div>
      <div style="background:linear-gradient(135deg,rgba(201,168,76,0.08),rgba(201,168,76,0.03));border:1px solid rgba(201,168,76,0.2);border-radius:var(--radius-lg);padding:20px;text-align:center;margin-bottom:20px">
        <div style="font-size:13px;color:var(--text-dim);margin-bottom:4px">${t('total')}</div>
        <div style="font-size:36px;font-weight:700;color:var(--gold)">${parseFloat(b.PRICE).toFixed(2)}</div>
        <div style="font-size:14px;color:var(--text-dim)">${t('currency')}</div>
      </div>
      ${isUser ? `<button class="btn-primary" onclick="closeModal('modal-book-detail');openNewOrderModal(${b.BOOK_ID})">🛒 ${t('new_order')}</button>` : ''}
    `;
  }
  openModal('modal-book-detail');
}

async function addBook() {
  const title = document.getElementById('bk-title').value.trim();
  const pages = parseInt(document.getElementById('bk-pages').value);
  const price = parseFloat(document.getElementById('bk-price').value);
  const lang = document.getElementById('bk-lang').value;
  const dept = parseInt(document.getElementById('bk-dept').value);
  const pub = parseInt(document.getElementById('bk-pub').value);
  const author = parseInt(document.getElementById('bk-author').value);

  if (!title || !pages || !price) {
    showToast(`❌ Please complete all fields`, 'error');
    return;
  }

  try {
    await BooksAPI.create({
      title,
      pages_number: pages,
      price,
      language: lang,
      publisher_id: pub,
      department_id: dept,
      author_ids: [author]
    });
    
    closeModal('modal-add-book');
    document.getElementById('bk-title').value = '';
    showToast(`✅ ${t('save_success')}`, 'success');
    loadBooks();
  } catch (e) {
    // Error shown by apiRequest
  }
}

async function deleteBook(id) {
  if (!confirm(t('confirm_delete'))) return;
  try {
    await BooksAPI.delete(id);
    showToast(`🗑️ ${t('delete')}`);
    loadBooks();
  } catch (e) {}
}

/**
 * ============================================================
 * USERS
 * ============================================================
 */
async function loadUsers() {
  updateSidebarCounters();
  setInputValue('users-search', '');
  
  try {
    const [users, customers] = await Promise.all([
      UsersAPI.getAll(),
      CustomersAPI.getAll()
    ]);
    
    // Store in DB for synchronous render functions to use
    DB.users = users;
    DB.customers = Array.isArray(customers) ? customers : [customers];
  } catch (err) {
    // API error already shown by apiRequest
  }

  usersFiltered = [...DB.users];
  renderUsers();
}

function renderUsers() {
  const pageSize = 8;
  const paged = usersFiltered.slice((usersPage - 1) * pageSize, usersPage * pageSize);
  
  const tableBody = document.getElementById('users-table-body');
  if (tableBody) {
    tableBody.innerHTML = paged.length ? paged.map((u) => {
      const cust = DB.customers.find((c) => c.USER_ID === u.USER_ID);
      const isSelf = currentUser && u.USER_ID === currentUser.USER_ID;
      return `
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:32px;height:32px;border-radius:50%;background:${u.USER_TYPE === 'ADMIN' ? 'rgba(201,168,76,0.15)' : 'rgba(55,138,221,0.15)'};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;color:${u.USER_TYPE === 'ADMIN' ? 'var(--gold)' : '#5BA5E8'}">
                ${u.USER_NAME[0]}
              </div>
              <strong>${u.USER_NAME}</strong>
            </div>
          </td>
          <td style="color:var(--text-dim);font-size:12px">${u.USER_EMAIL}</td>
          <td>
            <span class="badge ${u.USER_TYPE === 'ADMIN' ? 'badge-gold' : 'badge-blue'}">
              ${u.USER_TYPE === 'ADMIN' ? t('admin') : t('user')}
            </span>
          </td>
          <td style="color:var(--text-dim)">${cust ? cust.CUSTOMER_PHONE : '-'}</td>
          <td style="color:var(--text-dim);font-size:12px">${cust ? cust.CUSTOMER_ADDRESS : '-'}</td>
          <td>
            <div class="td-actions">
              ${!isSelf ? `<button class="btn-danger" onclick="deleteUser(${u.USER_ID})">🗑️ ${t('delete')}</button>` : `<span style="color:var(--text-muted);font-size:12px">${currentLang === 'ar' ? 'أنت' : 'You'}</span>`}
            </div>
          </td>
        </tr>
      `;
    }).join('') : `
      <tr>
        <td colspan="6">
          <div class="empty-state">
            <div class="empty-icon">👥</div>
            <div class="empty-title">${t('empty_users')}</div>
          </div>
        </td>
      </tr>
    `;
  }
  
  const tp = Math.ceil(usersFiltered.length / pageSize);
  renderPagination('users-pagination', usersPage, tp, (p) => {
    usersPage = p;
    renderUsers();
  });
}

async function addUser() {
  const name = document.getElementById('u-name').value.trim();
  const email = document.getElementById('u-email').value.trim();
  const pass = document.getElementById('u-pass').value.trim();
  const type = document.getElementById('u-type').value;
  const phone = document.getElementById('u-phone').value.trim();
  const addr = document.getElementById('u-address').value.trim();

  if (!name || !email || !pass) {
    showToast(`❌ Please complete all fields`, 'error');
    return;
  }

  if (type === 'USER' && ((phone && !addr) || (!phone && addr))) {
    showToast(`❌ ${t('error_fields')} (الهاتف والعنوان)`, 'error');
    return;
  }
  
  try {
    const data = {
      name,
      email,
      password: pass,
      type,
      phone,
      address: addr
    };
    
    await UsersAPI.create(data);
    
    closeModal('modal-add-user');
    resetUserForm();
    showToast(`✅ ${t('save_success')}`, 'success');
    loadUsers();
  } catch (err) {
    // Error is shown by apiRequest
  }
}

async function deleteUser(id) {
  if (currentUser && id === currentUser.USER_ID) {
    showToast(`❌ ${t('error_login')}`, 'error'); 
    return;
  }
  
  if (!confirm(t('confirm_delete'))) return;
  
  try {
    await UsersAPI.delete(id);
    showToast(`🗑️ ${t('delete')}`);
    loadUsers();
  } catch (err) {
    // Error is shown by apiRequest
  }
}

/**
 * ============================================================
 * DEPARTMENTS
 * ============================================================
 */
async function loadDepts() {
  try {
    DB.departments = await DeptsAPI.getAll();
  } catch (e) {}

  const tableBody = document.getElementById('depts-table-body');
  if (tableBody) {
    tableBody.innerHTML = DB.departments.map((d) => {
      const booksCount = DB.books.filter((b) => b.DEPARTMENT_ID === d.DEPARTMENT_ID).length;
      return `
        <tr>
          <td style="color:var(--text-dim)">#${d.DEPARTMENT_ID}</td>
          <td><strong>${d.DEPARTMENT_NAME}</strong></td>
          <td style="color:var(--text-dim)">-</td>
          <td><span class="badge badge-gold">${booksCount} ${t('books')}</span></td>
          <td>
            <div class="td-actions">
              <button class="btn-danger" onclick="deleteDept(${d.DEPARTMENT_ID})">🗑️ ${t('delete')}</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }
}

async function addDept() {
  const name = document.getElementById('d-name').value.trim();
  if (!name) {
    showToast(`❌ Please enter name`, 'error');
    return;
  }
  try {
    await DeptsAPI.create({ name });
    closeModal('modal-add-dept');
    document.getElementById('d-name').value = '';
    showToast(`✅ ${t('save_success')}`, 'success');
    loadDepts();
  } catch (e) {}
}

async function deleteDept(id) {
  if (DB.books.find((b) => b.DEPARTMENT_ID === id)) {
    showToast(`❌ Cannot delete department with books`, 'error');
    return;
  }
  if (!confirm(t('confirm_delete'))) return;
  try {
    await DeptsAPI.delete(id);
    showToast(`🗑️ ${t('delete')}`);
    loadDepts();
  } catch (e) {}
}

/**
 * ============================================================
 * PUBLISHERS
 * ============================================================
 */
async function loadPubs() {
  try {
    DB.publishers = await PubsAPI.getAll();
  } catch (e) {}

  const tableBody = document.getElementById('pubs-table-body');
  if (tableBody) {
    tableBody.innerHTML = DB.publishers.map((p) => {
      const cnt = DB.books.filter((b) => b.PUBLISHER_ID === p.PUBLISHER_ID).length;
      const websiteHref = normalizeExternalUrl(p.PUBLISHER_WEBSITE);
      return `
        <tr>
          <td><strong>${p.PUBLISHER_NAME}</strong></td>
          <td style="color:var(--text-dim);font-size:12px">${p.PUBLISHER_ADDRESS || '-'}</td>
          <td style="color:var(--text-dim)">${p.PUBLISHER_PHONE || '-'}</td>
          <td>
            ${websiteHref ? `<a href="${websiteHref}" target="_blank" rel="noopener noreferrer" style="color:var(--info);font-size:12px">${currentLang === 'ar' ? 'رابط' : 'Link'}</a>` : '-'}
          </td>
          <td><span class="badge badge-gold">${cnt} ${t('books')}</span></td>
          <td>
            <div class="td-actions">
              <button class="btn-danger" onclick="deletePub(${p.PUBLISHER_ID})">🗑️ ${t('delete')}</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }
}

async function addPublisher() {
  const name = document.getElementById('p-name').value.trim();
  const addr = document.getElementById('p-addr').value.trim();
  const phone = document.getElementById('p-phone').value.trim();
  const fax = document.getElementById('p-fax').value.trim();
  const rawWebsite = document.getElementById('p-web').value.trim();
  const web = normalizeExternalUrl(rawWebsite);
  
  if (!name) {
    showToast(`❌ ${t('error_fields')}`, 'error');
    return;
  }

  if (rawWebsite && !web) {
    showToast(currentLang === 'ar' ? 'رابط الموقع غير صالح' : 'Invalid publisher website', 'error');
    return;
  }
  
  try {
    await PubsAPI.create({
      name,
      address: addr,
      phone,
      fax,
      website: web
    });
    closeModal('modal-add-pub');
    showToast(`✅ ${t('save_success')}`, 'success');
    loadPubs();
  } catch (e) {}
}

async function deletePub(id) {
  if (DB.books.find((b) => b.PUBLISHER_ID === id)) {
    showToast(`❌ ${t('error_pub_delete')}`, 'error');
    return;
  }
  if (!confirm(t('confirm_delete'))) return;
  try {
    await PubsAPI.delete(id);
    showToast(`🗑️ ${t('delete')}`);
    loadPubs();
  } catch (e) {}
}

/**
 * ============================================================
 * AUTHORS
 * ============================================================
 */
async function loadAuthors() {
  try {
    DB.authors = await AuthorsAPI.getAll();
  } catch (e) {}

  const tableBody = document.getElementById('authors-table-body');
  if (tableBody) {
    tableBody.innerHTML = DB.authors.map((a) => {
      const booksStr = a.BOOKS || '';
      return `
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px">
              <div style="width:36px;height:36px;border-radius:50%;background:rgba(201,168,76,0.1);display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;color:var(--gold)">
                ${a.FIRST_NAME[0]}
              </div>
              <div><strong>${a.FIRST_NAME} ${a.LAST_NAME}</strong></div>
            </div>
          </td>
          <td>
            ${booksStr ? booksStr.split(',').map((t) => `<span class="badge badge-gray" style="margin-left:4px">${t}</span>`).join('') : `<span style="color:var(--text-muted)">${t('empty_books')}</span>`}
          </td>
          <td>
            <div class="td-actions">
              <button class="btn-danger" onclick="deleteAuthor(${a.AUTHOR_ID})">🗑️ ${t('delete')}</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }
}

async function addAuthor() {
  const first = document.getElementById('a-first').value.trim();
  const last = document.getElementById('a-last').value.trim();
  
  if (!first) {
    showToast(`❌ ${t('error_name_author')}`, 'error');
    return;
  }
  
  try {
    await AuthorsAPI.create({ first_name: first, last_name: last });
    closeModal('modal-add-author');
    document.getElementById('a-first').value = '';
    document.getElementById('a-last').value = '';
    showToast(`✅ ${t('save_success')}`, 'success');
    loadAuthors();
  } catch (e) {}
}

async function deleteAuthor(id) {
  if (!confirm(t('confirm_delete'))) return;
  try {
    await AuthorsAPI.delete(id);
    showToast(`🗑️ ${t('delete')}`);
    loadAuthors();
  } catch (e) {}
}

/**
 * ============================================================
 * ORDERS
 * ============================================================
 */
function populateOrderBookOptions(selectedBookId) {
  const ob = document.getElementById('o-book');
  if (!ob) return false;
  if (!DB.books.length) {
    ob.innerHTML = '';
    return false;
  }
  ob.innerHTML = DB.books.map((b) => `<option value="${b.BOOK_ID}">${b.TITLE} - ${parseFloat(b.PRICE).toFixed(2)} ${t('currency')}</option>`).join('');
  ob.onchange = calcOrderTotal;
  if (selectedBookId) ob.value = String(selectedBookId);
  if (!ob.value && DB.books.length) ob.value = String(DB.books[0].BOOK_ID);
  return true;
}

function openNewOrderModal(bookId) {
  if (!currentUser || currentUser.USER_TYPE !== 'USER') return;
  const cust = DB.customers.find((c) => c.USER_ID === currentUser.USER_ID);
  if (!populateOrderBookOptions(bookId)) {
    showToast(`❌ ${t('empty_books')}`, 'error');
    return;
  }
  setInputValue('o-qty', '1');
  if (cust) {
    document.getElementById('o-addr').value = cust.CUSTOMER_ADDRESS;
  }
  calcOrderTotal();
  openModal('modal-new-order');
}

async function loadOrders() {
  const isAdmin = currentUser && currentUser.USER_TYPE === 'ADMIN';
  
  try {
    // Fetch fresh orders
    DB.orders = await OrdersAPI.getAll();
  } catch (e) { /* use cached */ }

  const cust = currentUser ? DB.customers.find((c) => c.USER_ID === currentUser.USER_ID) : null;
  populateOrderBookOptions();
  if (cust) {
    const addrInput = document.getElementById('o-addr');
    if (addrInput) addrInput.value = cust.CUSTOMER_ADDRESS;
  }
  setInputValue('orders-search', orderSearchQuery);
  calcOrderTotal();

  let orders = isAdmin ? DB.orders : DB.orders.filter((o) => {
    return cust && o.CUSTOMER_ID === cust.CUSTOMER_ID;
  });
  if (orderSearchQuery.trim()) {
    const query = orderSearchQuery.trim().toLowerCase();
    orders = orders.filter((o) => {
      const customer = DB.customers.find((c) => c.CUSTOMER_ID === o.CUSTOMER_ID);
      const user = customer ? DB.users.find((u) => u.USER_ID === customer.USER_ID) : null;
      const orderText = [
        String(o.ORDER_ID).padStart(3, '0'),
        o.CUSTOMER_NAME || '',
        o.CUSTOMER_ADDRESS || '',
        ... (o.items || [])
          .map((i) => {
            return i.TITLE || '';
          })
      ].join(' ').toLowerCase();
      return orderText.includes(query);
    });
  }

  const container = document.getElementById('orders-container');
  if (!container) return;

  if (!orders.length) {
    const emptyTitle = orderSearchQuery.trim() ? t('no_matching_orders') : t('empty_orders');
    const emptySub = orderSearchQuery.trim() ? t('try_diff_search') : (!isAdmin ? t('place_order_now') : '');
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🛒</div><div class="empty-title">${emptyTitle}</div><div class="empty-sub">${emptySub}</div></div>`;
    return;
  }

  const locale = currentLang === 'ar' ? 'ar-EG' : 'en-US';

  container.innerHTML = orders.map((o) => {
    const customer = DB.customers.find((c) => c.CUSTOMER_ID === o.CUSTOMER_ID);
    const user = customer ? DB.users.find((u) => u.USER_ID === customer.USER_ID) : null;
    const items = o.items || [];
    const total = parseFloat(o.TOTAL_COST || 0);
    return `
      <div class="order-card">
        <div class="order-header">
          <div class="order-id-wrapper">
            <span class="order-id">${t('order')} #${String(o.ORDER_ID).padStart(3, '0')}</span>
            ${isAdmin && user ? `<span class="order-customer">👤 ${user.USER_NAME}</span>` : ''}
          </div>
          <div class="order-status-wrapper">
            <span class="badge badge-green">✓ ${t('completed')}</span>
            <span class="order-date">${new Date(o.ORDER_DATE).toLocaleDateString(locale)}</span>
          </div>
        </div>
        <div class="order-content">
          <span class="order-items-label">${t('books')}</span>
          <div class="order-items">
            ${items.map((item) => {
              const book = DB.books.find((b) => b.BOOK_ID === item.BOOK_ID);
              return `
                <div class="order-item">
                  <div class="order-item-info">
                    <div class="order-item-name">📚 ${book ? book.TITLE : t('deleted_book')}</div>
                    <div class="order-item-qty">${t('quantity')}: ${item.QUANTITY} × ${book ? parseFloat(book.PRICE).toFixed(2) : '-'} ${t('currency')}</div>
                  </div>
                  <div class="order-item-cost">${parseFloat(item.TOTAL_COST || 0).toFixed(2)} ${t('currency')}</div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
        <div class="order-footer">
          <div class="order-address-box">
            <div class="order-footer-label">${t('address')}</div>
            <div class="order-address">📍 ${items[0] ? items[0].DELIVERY_ADDRESS : '-'}</div>
          </div>
          <div class="order-total-box">
            <div class="order-footer-label">${t('total')}</div>
            <div class="order-total">${parseFloat(total).toFixed(2)} <span>${t('currency')}</span></div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function calcOrderTotal() {
  const bookSelect = document.getElementById('o-book');
  const qtyInput = document.getElementById('o-qty');
  if (!bookSelect || !qtyInput) return;

  const bookId = parseInt(bookSelect.value);
  const qty = parseInt(qtyInput.value) || 1;
  const book = DB.books.find((b) => b.BOOK_ID === bookId);
  
  if (book) {
    const unitPriceEl = document.getElementById('o-unit-price');
    const totalEl = document.getElementById('o-total');
    if (unitPriceEl) unitPriceEl.textContent = `${parseFloat(book.PRICE).toFixed(2)} ${t('currency')}`;
    if (totalEl) totalEl.textContent = `${(parseFloat(book.PRICE) * qty).toFixed(2)} ${t('currency')}`;
  }
}

async function placeOrder() {
  const cust = DB.customers.find((c) => c.USER_ID === currentUser.USER_ID);
  if (!cust) {
    showToast('❌ أكمل بيانات حسابك أولاً', 'error');
    return;
  }
  
  const bookId = parseInt(document.getElementById('o-book').value);
  const qty = parseInt(document.getElementById('o-qty').value) || 1;
  const addr = document.getElementById('o-addr').value.trim();
  const book = DB.books.find((b) => b.BOOK_ID === bookId);
  
  if (!book) {
    showToast(`❌ ${t('books')}`, 'error');
    return;
  }
  
  try {
    await OrdersAPI.create({
      items: [{
        book_id: bookId,
        quantity: qty,
        delivery_address: addr || cust.CUSTOMER_ADDRESS
      }]
    });
    
    closeModal('modal-new-order');
    orderSearchQuery = '';
    showToast(`🛒 ${t('save_success')}`, 'success');
    loadOrders();
  } catch (e) {}
}

function searchOrders(q) {
  orderSearchQuery = q;
  loadOrders();
}

function searchUsers(q) {
  const query = q.toLowerCase();
  usersFiltered = DB.users.filter((u) => 
    u.USER_NAME.toLowerCase().includes(query) || u.USER_EMAIL.toLowerCase().includes(query)
  );
  usersPage = 1;
  renderUsers();
}

function filterUsersByType(t) {
  usersFiltered = t ? DB.users.filter((u) => u.USER_TYPE === t) : [...DB.users];
  usersPage = 1;
  renderUsers();
}

/**
 * ============================================================
 * PROFILE
 * ============================================================
 */
async function saveProfile() {
  const nameInput = document.getElementById('pf-name');
  const emailInput = document.getElementById('pf-email');
  const phoneInput = document.getElementById('pf-phone');
  const addrInput = document.getElementById('pf-address');
  
  if (!nameInput || !emailInput) return;

  const nextName = nameInput.value.trim();
  const nextEmail = emailInput.value.trim();
  const nextPhone = phoneInput ? phoneInput.value.trim() : '';
  const nextAddr = addrInput ? addrInput.value.trim() : '';
  
  try {
    // Update User
    await UsersAPI.update(currentUser.USER_ID, {
      name: nextName,
      email: nextEmail
    });

    // Update Customer if USER
    if (currentUser.USER_TYPE === 'USER') {
      await CustomersAPI.update({
        phone: nextPhone,
        address: nextAddr
      });
    }

    // Refresh local state
    currentUser.USER_NAME = nextName;
    currentUser.USER_EMAIL = nextEmail;
    localStorage.setItem('lib_user', JSON.stringify(currentUser));
    
    // Refresh customers list
    DB.customers = await CustomersAPI.getAll();

    showToast(`✅ ${t('save_success')}`, 'success');
    setupApp();
  } catch (e) {}
}

/**
 * ============================================================
 * GLOBAL SEARCH
 * ============================================================
 */
function globalSearch(q) {
  const query = q.trim();
  if (!query) {
    if (bookFilters.query) {
      bookFilters.query = '';
      if (currentPage === 'books') applyBookFilters();
    }
    if (currentPage === 'users') {
      setInputValue('users-search', '');
      usersFiltered = [...DB.users];
      usersPage = 1;
      renderUsers();
    }
    if (orderSearchQuery) {
      orderSearchQuery = '';
      if (currentPage === 'orders') loadOrders();
    }
    return;
  }
  
  if (query.length < 2) return;

  const normalized = query.toLowerCase();
  const bookResults = DB.books.filter((b) => b.TITLE.toLowerCase().includes(normalized));
  
  const userResults = currentUser && currentUser.USER_TYPE === 'ADMIN'
    ? DB.users.filter((u) => u.USER_NAME.toLowerCase().includes(normalized) || u.USER_EMAIL.toLowerCase().includes(normalized))
    : [];
    
  const visibleOrders = currentUser && currentUser.USER_TYPE === 'ADMIN'
    ? DB.orders
    : DB.orders.filter((o) => {
        const customer = DB.customers.find((c) => c.USER_ID === currentUser.USER_ID);
        return customer && o.CUSTOMER_ID === customer.CUSTOMER_ID;
      });
      
  const orderResults = visibleOrders.filter((o) => {
    const customer = DB.customers.find((c) => c.CUSTOMER_ID === o.CUSTOMER_ID);
    const user = customer ? DB.users.find((u) => u.USER_ID === customer.USER_ID) : null;
    const orderText = [
      String(o.ORDER_ID).padStart(3, '0'),
      customer ? customer.CUSTOMER_ADDRESS : '',
      user ? user.USER_NAME : ''
    ].join(' ').toLowerCase();
    return orderText.includes(normalized);
  });

  if (bookResults.length) {
    bookFilters.query = query;
    navigate('books');
    setInputValue('books-search', query);
    applyBookFilters();
    return;
  }

  if (userResults.length) {
    navigate('users');
    setInputValue('users-search', query);
    searchUsers(query);
    return;
  }

  if (orderResults.length) {
    orderSearchQuery = query;
    navigate('orders');
  }
}

/**
 * ============================================================
 * PAGINATION
 * ============================================================
 */
function renderPagination(containerId, current, total, callback) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (total <= 1) {
    el.innerHTML = '';
    return;
  }
  
  let html = '';
  if (current > 1) {
    html += `<button class="page-btn" onclick="(${callback})(${current - 1})">‹</button>`;
  }
  
  for (let i = 1; i <= total; i++) {
    html += `<button class="page-btn${i === current ? ' active' : ''}" onclick="(${callback})(${i})">${i}</button>`;
  }
  
  if (current < total) {
    html += `<button class="page-btn" onclick="(${callback})(${current + 1})">›</button>`;
  }
  el.innerHTML = html;
}

/**
 * ============================================================
 * MODALS
 * ============================================================
 */
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

document.querySelectorAll('.modal-overlay').forEach((m) => {
  m.addEventListener('click', (e) => {
    if (e.target === m) m.classList.remove('open');
  });
});

/**
 * ============================================================
 * TOAST
 * ============================================================
 */
let toastTimer;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = `show${type ? ' ' + type : ''}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.className = '';
  }, 2800);
}

/**
 * ============================================================
 * EVENT LISTENERS & INITIALIZATION
 * ============================================================
 */
const qtyInput = document.getElementById('o-qty');
if (qtyInput) {
  qtyInput.addEventListener('input', calcOrderTotal);
}

window.addEventListener('resize', syncSidebarState);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSidebar();
  }
});

syncSidebarState();

/**
 * ============================================================
 * THEME
 * ============================================================
 */
let currentTheme = localStorage.getItem('library-theme') || 'dark';

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('library-theme', theme);

  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme', isLight);

  // Update icon if it still exists
  const icon = document.getElementById('theme-icon');
  if (icon) icon.textContent = isLight ? '🌞' : '🌓';

  // Sync checkbox (checked means dark mode)
  const tog = document.getElementById('dark-mode-toggle');
  if (tog) tog.checked = !isLight;
}

// Apply saved theme on load
applyTheme(currentTheme);

function toggleTheme() {
  // Called from the checkbox onchange — read checkbox state
  const tog = document.getElementById('dark-mode-toggle');
  const wantDark = tog ? tog.checked : currentTheme !== 'light';
  applyTheme(wantDark ? 'dark' : 'light');
}

function syncSettingsUI() {
  // Sync dark mode toggle checkbox
  const tog = document.getElementById('dark-mode-toggle');
  if (tog) tog.checked = currentTheme !== 'light';
  // Sync language pills
  const pillAr = document.getElementById('pill-ar');
  const pillEn = document.getElementById('pill-en');
  if (pillAr) pillAr.classList.toggle('active', currentLang === 'ar');
  if (pillEn) pillEn.classList.toggle('active', currentLang === 'en');
}

// Start app
updateLanguage(currentLang);
syncSettingsUI();

if (currentUser) {
  document.getElementById('auth-overlay').style.display = 'none';
  document.getElementById('app').classList.add('visible');
  // setupApp is called by updateLanguage if currentUser exists
} else {
  switchAuthTab('login');
}
