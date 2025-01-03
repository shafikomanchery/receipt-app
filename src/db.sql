CREATE DATABASE IF NOT EXISTS rentals;

USE rentals;

CREATE TABLE users (
    userId INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    membershipId VARCHAR(255),
    name VARCHAR(255),
    gender VARCHAR(255),
    emailAddress VARCHAR(255),
    address TEXT,
    mobile BIGINT,
    altMobile BIGINT,
    createdDate DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedDate DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    status ENUM('Active', 'Inactive', 'PendingVerification', 'Blocked', 'Deleted') NOT NULL,
    PRIMARY KEY (userId)
);
