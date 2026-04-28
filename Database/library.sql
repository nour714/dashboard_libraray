-- ============================================================
-- Library Management System - Database Schema
-- MySQL Version
-- ============================================================

DROP DATABASE IF EXISTS LIBRARY;
CREATE DATABASE LIBRARY
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_unicode_ci;

USE LIBRARY;

-- =========================
-- TABLE: USERS
-- =========================
CREATE TABLE USERS (
    USER_ID       INT AUTO_INCREMENT PRIMARY KEY,
    USER_NAME     VARCHAR(100) NOT NULL,
    USER_EMAIL    VARCHAR(100) NOT NULL UNIQUE,
    USER_PASSWORD VARCHAR(255) NOT NULL,
    USER_TYPE     ENUM('USER','ADMIN') NOT NULL
) ENGINE=InnoDB;

-- =========================
-- TABLE: ADMIN
-- =========================
CREATE TABLE ADMIN (
    ADMIN_ID INT AUTO_INCREMENT PRIMARY KEY,
    USER_ID  INT UNIQUE,
    FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID) ON DELETE CASCADE
) ENGINE=InnoDB;

-- =========================
-- TABLE: DEPARTMENT
-- =========================
CREATE TABLE DEPARTMENT (
    DEPARTMENT_ID   INT AUTO_INCREMENT PRIMARY KEY,
    DEPARTMENT_NAME VARCHAR(100) NOT NULL,
    ADMIN_ID        INT,
    FOREIGN KEY (ADMIN_ID) REFERENCES ADMIN(ADMIN_ID)
) ENGINE=InnoDB;

-- =========================
-- TABLE: PUBLISHER
-- =========================
CREATE TABLE PUBLISHER (
    PUBLISHER_ID      INT AUTO_INCREMENT PRIMARY KEY,
    PUBLISHER_NAME    VARCHAR(100) NOT NULL,
    PUBLISHER_ADDRESS VARCHAR(200),
    PUBLISHER_PHONE   VARCHAR(15) UNIQUE,
    PUBLISHER_FAX     VARCHAR(15),
    PUBLISHER_WEBSITE VARCHAR(100),
    ADMIN_ID          INT,
    FOREIGN KEY (ADMIN_ID) REFERENCES ADMIN(ADMIN_ID)
) ENGINE=InnoDB;

-- =========================
-- TABLE: AUTHOR
-- =========================
CREATE TABLE AUTHOR (
    AUTHOR_ID  INT AUTO_INCREMENT PRIMARY KEY,
    FIRST_NAME VARCHAR(100),
    LAST_NAME  VARCHAR(100),
    ADMIN_ID   INT,
    FOREIGN KEY (ADMIN_ID) REFERENCES ADMIN(ADMIN_ID)
) ENGINE=InnoDB;

-- =========================
-- TABLE: BOOK
-- =========================
CREATE TABLE BOOK (
    BOOK_ID       INT AUTO_INCREMENT PRIMARY KEY,
    TITLE         VARCHAR(100)  NOT NULL UNIQUE,
    PAGES_NUMBER  INT           NOT NULL,
    PRICE         DECIMAL(10,2) NOT NULL,
    LANGUAGE      ENUM('AR','EN'),
    IMAGE         VARCHAR(100),
    PUBLISHER_ID  INT,
    DEPARTMENT_ID INT,
    ADMIN_ID      INT,
    FOREIGN KEY (PUBLISHER_ID)  REFERENCES PUBLISHER(PUBLISHER_ID),
    FOREIGN KEY (DEPARTMENT_ID) REFERENCES DEPARTMENT(DEPARTMENT_ID),
    FOREIGN KEY (ADMIN_ID)      REFERENCES ADMIN(ADMIN_ID)
) ENGINE=InnoDB;

-- =========================
-- TABLE: BOOK_HAS_AUTHOR
-- =========================
CREATE TABLE BOOK_HAS_AUTHOR (
    BOOK_ID   INT,
    AUTHOR_ID INT,
    PRIMARY KEY (BOOK_ID, AUTHOR_ID),
    FOREIGN KEY (BOOK_ID)   REFERENCES BOOK(BOOK_ID)   ON DELETE CASCADE,
    FOREIGN KEY (AUTHOR_ID) REFERENCES AUTHOR(AUTHOR_ID)
) ENGINE=InnoDB;

-- =========================
-- TABLE: CUSTOMER
-- =========================
CREATE TABLE CUSTOMER (
    CUSTOMER_ID      INT AUTO_INCREMENT PRIMARY KEY,
    CUSTOMER_PHONE   VARCHAR(15)  NOT NULL,
    CUSTOMER_ADDRESS VARCHAR(100) NOT NULL,
    USER_ID          INT UNIQUE,
    FOREIGN KEY (USER_ID) REFERENCES USERS(USER_ID) ON DELETE CASCADE
) ENGINE=InnoDB;

-- =========================
-- TABLE: ORDERS
-- =========================
CREATE TABLE ORDERS (
    ORDER_ID    INT AUTO_INCREMENT PRIMARY KEY,
    ORDER_DATE  DATETIME DEFAULT CURRENT_TIMESTAMP,
    CUSTOMER_ID INT,
    FOREIGN KEY (CUSTOMER_ID) REFERENCES CUSTOMER(CUSTOMER_ID)
) ENGINE=InnoDB;

-- =========================
-- TABLE: BOOK_HAS_ORDERS
-- =========================
CREATE TABLE BOOK_HAS_ORDERS (
    BOOK_ID          INT,
    ORDER_ID         INT,
    QUANTITY         INT           DEFAULT 1,
    TOTAL_COST       DECIMAL(10,2),
    DELIVERY_ADDRESS VARCHAR(100),
    PRIMARY KEY (BOOK_ID, ORDER_ID),
    FOREIGN KEY (BOOK_ID)  REFERENCES BOOK(BOOK_ID),
    FOREIGN KEY (ORDER_ID) REFERENCES ORDERS(ORDER_ID) ON DELETE CASCADE
) ENGINE=InnoDB;

-- ============================================================
-- SAMPLE DATA
-- ============================================================

-- ======================== USERS ========================
-- Admin user (password = admin123)
INSERT INTO USERS (USER_NAME, USER_EMAIL, USER_PASSWORD, USER_TYPE)
VALUES ('Ahmed Admin', 'admin@library.com', '$2y$10$azpJoCEPXNXAoAaykiWZ5ucFmXIe8iFiXZNbz1RFZyupJYi1E5ZPa', 'ADMIN');

-- Regular users (password = user123)
INSERT INTO USERS (USER_NAME, USER_EMAIL, USER_PASSWORD, USER_TYPE)
VALUES 
('Mohammed Ali', 'mohammed@library.com', '$2y$10$uOEcK0/hiu9.fGbbbx2WoOiUNQ2Sp3DjwPZc1xfzAiR6pjrlm.WNi', 'USER'),
('Fatma Hassan', 'fatma@library.com', '$2y$10$uOEcK0/hiu9.fGbbbx2WoOiUNQ2Sp3DjwPZc1xfzAiR6pjrlm.WNi', 'USER'),
('Khaled Ibrahim', 'khaled@library.com', '$2y$10$uOEcK0/hiu9.fGbbbx2WoOiUNQ2Sp3DjwPZc1xfzAiR6pjrlm.WNi', 'USER'),
('Leila Ahmed', 'leila@library.com', '$2y$10$uOEcK0/hiu9.fGbbbx2WoOiUNQ2Sp3DjwPZc1xfzAiR6pjrlm.WNi', 'USER'),
('Tamer Saleh', 'tamer@library.com', '$2y$10$uOEcK0/hiu9.fGbbbx2WoOiUNQ2Sp3DjwPZc1xfzAiR6pjrlm.WNi', 'USER');

INSERT INTO ADMIN (USER_ID) VALUES (1);

-- ======================== CUSTOMERS ========================
INSERT INTO CUSTOMER (CUSTOMER_PHONE, CUSTOMER_ADDRESS, USER_ID)
VALUES 
('201001234567', 'Cairo, Nasr City', 2),
('201101234567', 'Alexandria, Azarita', 3),
('201201234567', 'Giza, Sheikh Zayed', 4),
('201301234567', 'Helwan, Downtown', 5),
('201401234567', 'Ismailia, Downtown', 6);

-- ======================== DEPARTMENTS ========================
INSERT INTO DEPARTMENT (DEPARTMENT_NAME, ADMIN_ID)
VALUES 
('Science & Technology', 1),
('Arabic Literature', 1),
('History & Civilization', 1),
('Philosophy & Thought', 1),
('International Novels', 1);

-- ======================== PUBLISHERS ========================
INSERT INTO PUBLISHER (PUBLISHER_NAME, PUBLISHER_ADDRESS, PUBLISHER_PHONE, PUBLISHER_WEBSITE, ADMIN_ID)
VALUES 
('O\'Reilly Media', 'USA', '1-800-998-9938', 'oreilly.com', 1),
('Penguin Books', 'London, UK', '+44-20-1234567', 'penguin.com', 1),
('دار الشروق', 'Cairo, Egypt', '202-0123456789', 'shorouk.com', 1),
('الهيئة المصرية العامة للكتاب', 'Cairo, Egypt', '202-0987654321', 'egy-book.gov.eg', 1),
('Simon & Schuster', 'New York, USA', '1-212-698-7000', 'simonandschuster.com', 1);

-- ======================== AUTHORS ========================
INSERT INTO AUTHOR (FIRST_NAME, LAST_NAME, ADMIN_ID)
VALUES 
('Robert', 'Martin', 1),
('Steve', 'McConnell', 1),
('Martin', 'Fowler', 1),
('نجيب', 'محفوظ', 1),
('أحمد', 'أمين', 1),
('عمارة', 'لطفي', 1),
('سيد', 'قطب', 1),
('J.K.', 'Rowling', 1),
('George R.R.', 'Martin', 1),
('Yuval Noah', 'Harari', 1);

-- ======================== BOOKS ========================
INSERT INTO BOOK (TITLE, PAGES_NUMBER, PRICE, LANGUAGE, PUBLISHER_ID, DEPARTMENT_ID, ADMIN_ID)
VALUES 
('Clean Code', 431, 49.99, 'EN', 1, 1, 1),
('Code Complete', 960, 59.99, 'EN', 2, 1, 1),
('Refactoring', 418, 44.99, 'EN', 1, 1, 1),
('الأيام', 350, 29.99, 'AR', 3, 2, 1),
('أحاديث الجمعة', 280, 24.99, 'AR', 4, 2, 1),
('نقد الفكر الديني', 200, 19.99, 'AR', 4, 4, 1),
('In the Shade of the Qur\'an', 500, 39.99, 'EN', 2, 4, 1),
('Harry Potter and the Sorcerer\'s Stone', 309, 14.99, 'EN', 5, 5, 1),
('A Game of Thrones', 694, 17.99, 'EN', 5, 5, 1),
('Sapiens', 445, 34.99, 'EN', 2, 3, 1),
('تاريخ الحضارة الإسلامية', 320, 25.99, 'AR', 3, 3, 1),
('الفلسفة اليونانية', 290, 22.99, 'AR', 4, 4, 1);

-- ======================== BOOK_HAS_AUTHOR ========================
INSERT INTO BOOK_HAS_AUTHOR (BOOK_ID, AUTHOR_ID)
VALUES 
(1, 1),   -- Clean Code - Robert Martin
(2, 2),   -- Code Complete - Steve McConnell
(3, 3),   -- Refactoring - Martin Fowler
(4, 4),   -- الأيام - نجيب محفوظ
(5, 5),   -- أحاديث الجمعة - أحمد أمين
(6, 7),   -- نقد الفكر الديني - سيد قطب
(7, 7),   -- In the Shade of the Qur'an - Sayyid Qutb
(8, 8),   -- Harry Potter - J.K. Rowling
(9, 9),   -- A Game of Thrones - George R.R. Martin
(10, 10), -- Sapiens - Yuval Noah Harari
(11, 6),  -- تاريخ الحضارة الإسلامية - عمارة لطفي
(12, 5);  -- الفلسفة اليونانية - أحمد أمين

-- ======================== ORDERS ========================
INSERT INTO ORDERS (CUSTOMER_ID, ORDER_DATE)
VALUES 
(1, '2026-04-25 10:30:00'),
(2, '2026-04-24 14:45:00'),
(3, '2026-04-23 09:15:00'),
(1, '2026-04-22 16:20:00'),
(4, '2026-04-21 11:00:00'),
(5, '2026-04-20 13:30:00'),
(2, '2026-04-19 15:45:00'),
(3, '2026-04-18 10:00:00');

-- ======================== BOOK_HAS_ORDERS ========================
INSERT INTO BOOK_HAS_ORDERS (BOOK_ID, ORDER_ID, QUANTITY, TOTAL_COST, DELIVERY_ADDRESS)
VALUES 
(1, 1, 2, 99.98, 'Cairo, Nasr City'),
(3, 1, 1, 44.99, 'Cairo, Nasr City'),
(4, 2, 1, 29.99, 'Alexandria, Azarita'),
(8, 2, 2, 29.98, 'Alexandria, Azarita'),
(2, 3, 1, 59.99, 'Giza, Sheikh Zayed'),
(10, 3, 1, 34.99, 'Giza, Sheikh Zayed'),
(5, 4, 3, 74.97, 'Cairo, Nasr City'),
(9, 5, 1, 17.99, 'Helwan, Downtown'),
(11, 5, 1, 25.99, 'Helwan, Downtown'),
(6, 6, 1, 19.99, 'Ismailia, Downtown'),
(12, 6, 2, 45.98, 'Ismailia, Downtown'),
(7, 7, 1, 39.99, 'Alexandria, Azarita'),
(1, 8, 1, 49.99, 'Giza, Sheikh Zayed'),
(3, 8, 1, 44.99, 'Giza, Sheikh Zayed');
