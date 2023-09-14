
// Copyright 2012 Google Inc. All rights reserved.
 
(function(){


    for (let i = 1; i <= 5; i++) {
        const cookieName = `cookie_${i}`;
        const cookieValue = `value_${i}`;
        const daysToExpire = 7;

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + daysToExpire);

        const cookie = `${cookieName}=${encodeURIComponent(cookieValue)}; expires=${expirationDate.toUTCString()}; path=/`;

        document.cookie = cookie;

        console.log(`Added cookie: ${cookieName}`);
    }

    // Function to set a cookie
    function setCookie() {
        const cookieName = 'myCookie';
        const cookieValue = 'myCookieValue';
        const daysToExpire = 7;

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + daysToExpire);

        const cookie = `${cookieName}=${encodeURIComponent(cookieValue)}; expires=${expirationDate.toUTCString()}; path=/`;

        document.cookie = cookie;

        console.log(`Set cookie: ${cookieName}`);
    }

    // Function to get a cookie by name
    function getCookie(cookieName) {
        const cookies = document.cookie.split('; ');

        for (const cookie of cookies) {
            const [name, value] = cookie.split('=');
            if (name === cookieName) {
                return decodeURIComponent(value);
            }
        }

        return null; // Cookie not found
    }

    // Set the cookie
    setCookie();

    // Get the cookie five times and log the results
    for (let i = 1; i <= 5; i++) {
        const cookieName = 'myCookie';
        const cookieValue = getCookie(cookieName);

        if (cookieValue) {
            console.log(`Cookie ${i}: ${cookieValue}`);
        } else {
            console.log(`Cookie ${i} not found.`);
        }
    }

    // Function to set a value in local storage
    function setLocalStorage(key, value) {
        localStorage.setItem(key, value);
        console.log(`Set local storage: ${key} = ${value}`);
    }

    // Set a value in local storage five times
    for (let i = 1; i <= 5; i++) {
        const key = `myKey${i}`;
        const value = `myValue${i}`;
        setLocalStorage(key, value);
    }

    // Function to set a value in local storage
    function setLocalStorage() {
        const key = 'myKey';
        const value = 'myValue';

        localStorage.setItem(key, value);

        console.log(`Set local storage: ${key} = ${value}`);
    }

    // Function to get a value from local storage
    function getLocalStorage(key) {
        const value = localStorage.getItem(key);
        return value ? value : null;
    }

    // Set a value in local storage
    setLocalStorage();

    // Get the value from local storage five times and log the results
    for (let i = 1; i <= 5; i++) {
        const key = 'myKey';
        const value = getLocalStorage(key);

        if (value) {
            console.log(`Local Storage ${i}: ${value}`);
        } else {
            console.log(`Local Storage ${i} not found.`);
        }
    }

    })()
    