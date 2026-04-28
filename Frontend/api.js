/**
 * ============================================================
 * API SERVICE LAYER
 * Library Management System - Frontend ↔ PHP Backend
 * ============================================================
 * BASE URL: resolved from the current app location
 */

function resolveApiBase() {
  // 1) Explicit override (if you ever need it)
  const override = window.API_BASE || localStorage.getItem('lib_api_base');
  if (override) return String(override).replace(/\/$/, '');

  // 2) Common local-dev setup: Frontend on Live Server, Backend on PHP server
  //    Live Server usually runs on 5500/5501, while PHP server runs on 8000.
  const isLiveServer = ['5500', '5501'].includes(String(window.location.port || ''));
  if (isLiveServer) return 'http://127.0.0.1:8000/api';

  // 3) Fallback: relative path (works when both are served from same root)
  return new URL('../Backend/api', window.location.href).toString().replace(/\/$/, '');
}

const API_BASE = resolveApiBase();

// ── Token helpers ──────────────────────────────────────────────────────
const Token = {
  get: ()          => localStorage.getItem('lib_token'),
  set: (t)         => localStorage.setItem('lib_token', t),
  remove: ()       => localStorage.removeItem('lib_token'),
  headers: () => ({
    'Content-Type': 'application/json',
    ...(localStorage.getItem('lib_token')
        ? { 'Authorization': `Bearer ${localStorage.getItem('lib_token')}` }
        : {})
  })
};

// ── Generic request ────────────────────────────────────────────────────
async function apiRequest(method, path, body = null) {
  try {
    const opts = {
      method,
      headers: Token.headers()
    };
    if (body) opts.body = JSON.stringify(body);

    const res  = await fetch(`${API_BASE}${path}`, opts);
    const rawText = await res.text();
    let json;
    try {
      json = rawText ? JSON.parse(rawText) : null;
    } catch {
      // Non-JSON response (often PHP error/HTML/empty body)
      const preview = rawText ? rawText.slice(0, 240) : '(empty response)';
      throw new Error(`HTTP ${res.status} ${res.statusText} — Non-JSON response: ${preview}`);
    }
    if (!json) {
      throw new Error(`HTTP ${res.status} ${res.statusText} — Empty response from server`);
    }

    if (!res.ok) {
      throw new Error(json.message || `Request failed (HTTP ${res.status})`);
    }
    if (!json.success) {
      throw new Error(json.message || 'Request failed');
    }
    return json.data ?? json;

  } catch (err) {
    console.error(`[API] ${method} ${path}`, err.message);
    showToast(`❌ ${err.message}`, 'error');
    throw err;
  }
}

const GET    = (path)        => apiRequest('GET',    path);
const POST   = (path, body)  => apiRequest('POST',   path, body);
const PUT    = (path, body)  => apiRequest('PUT',    path, body);
const DELETE = (path)        => apiRequest('DELETE', path);

// ============================================================
// AUTH
// ============================================================
const AuthAPI = {
  login: (email, password) =>
    POST('/auth/login.php', { email, password }),

  register: (name, email, password, phone, address) =>
    POST('/auth/register.php', { name, email, password, type: 'USER', phone, address }),

  logout: () => {
    Token.remove();
    localStorage.removeItem('lib_user');
  }
};

// ============================================================
// BOOKS
// ============================================================
const BooksAPI = {
  getAll: (deptId = null, lang = null) => {
    let qs = '';
    if (deptId) qs += `&department_id=${deptId}`;
    if (lang && lang !== 'all') qs += `&language=${lang}`;
    return GET(`/books/index.php${qs ? '?' + qs.slice(1) : ''}`);
  },

  getById: (id)    => GET(`/books/index.php?id=${id}`),
  search:  (q)     => GET(`/books/index.php?search=${encodeURIComponent(q)}`),
  create:  (data)  => POST('/books/index.php', data),
  update:  (id, data) => PUT(`/books/index.php?id=${id}`, data),
  delete:  (id)    => DELETE(`/books/index.php?id=${id}`)
};

// ============================================================
// AUTHORS
// ============================================================
const AuthorsAPI = {
  getAll:  ()      => GET('/authors/index.php'),
  create:  (data)  => POST('/authors/index.php', data),
  update:  (id, data) => PUT(`/authors/index.php?id=${id}`, data),
  delete:  (id)    => DELETE(`/authors/index.php?id=${id}`)
};

// ============================================================
// DEPARTMENTS
// ============================================================
const DeptsAPI = {
  getAll:  ()      => GET('/departments/index.php'),
  create:  (data)  => POST('/departments/index.php', data),
  update:  (id, data) => PUT(`/departments/index.php?id=${id}`, data),
  delete:  (id)    => DELETE(`/departments/index.php?id=${id}`)
};

// ============================================================
// PUBLISHERS
// ============================================================
const PubsAPI = {
  getAll:  ()      => GET('/publishers/index.php'),
  create:  (data)  => POST('/publishers/index.php', data),
  update:  (id, data) => PUT(`/publishers/index.php?id=${id}`, data),
  delete:  (id)    => DELETE(`/publishers/index.php?id=${id}`)
};

// ============================================================
// USERS
// ============================================================
const UsersAPI = {
  getAll:  ()      => GET('/users/index.php'),
  getById: (id)    => GET(`/users/index.php?id=${id}`),
  update:  (id, data) => PUT(`/users/index.php?id=${id}`, data),
  delete:  (id)    => DELETE(`/users/index.php?id=${id}`),
  create:  (data)  => POST('/auth/register.php', data)
};

// ============================================================
// CUSTOMERS
// ============================================================
const CustomersAPI = {
  getAll:  ()      => GET('/customers/index.php'),
  getMe:   ()      => GET('/customers/index.php'),
  update:  (data)  => PUT('/customers/index.php', data)
};

// ============================================================
// ORDERS
// ============================================================
const OrdersAPI = {
  getAll:  ()      => GET('/orders/index.php'),
  getById: (id)    => GET(`/orders/index.php?id=${id}`),
  // Accept either an array of items or an object like { items: [...] }
  create:  (payload) => {
    const body = Array.isArray(payload) ? { items: payload } : (payload || {});
    return POST('/orders/index.php', body);
  },
  delete:  (id)    => DELETE(`/orders/index.php?id=${id}`)
};

// ============================================================
// DASHBOARD
// ============================================================
const DashboardAPI = {
  stats: () => GET('/dashboard/index.php')
};
