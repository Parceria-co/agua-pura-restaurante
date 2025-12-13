export function formatPhone(value) {
    const numbers = value.replace(/\D/g, "");

    let result = "+";

    if (numbers.length <= 1) result += "55 ";
    if (numbers.length > 1) result += numbers.slice(0, 2);
    if (numbers.length >= 3) result += " (" + numbers.slice(2, 4);
    if (numbers.length >= 5) result += ") " + numbers.slice(4, 5);
    if (numbers.length >= 6) result += " " + numbers.slice(5, 9);
    if (numbers.length >= 10) result += "-" + numbers.slice(9, 13);
    
    return result;
} 

export function formatDate(value) {
    const numbers = value.replace(/\D/g, "");


    let result = "";
    let day = numbers.slice(0, 2);
    let month = numbers.slice(2, 4);
    let year = numbers.slice(4, 8);

    const currentYear = new Date().getFullYear();
    const maxYear = currentYear + 2;

    if (day.length === 2) {
        let d = parseInt(day);
        if (d < 1) d = 1;
        if (d > 31) d = 31;
        day = d.toString().padStart(2, "0");
    }

    if (month.length === 2) {
        let m = parseInt(month);
        if (m < 1) m = 1;
        if (m > 12) m = 12;
        month = m.toString().padStart(2, "0");
    }

    if (year.length === 4) {
        let y = parseInt(year);
        if (y < currentYear) y = currentYear;
        if (y > maxYear) y = maxYear;
        year = y.toString();
    }

    if (day) result = day;
    if (month) result += "/" + month;
    if (year) result += "/" + year;

    return result;
}

export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export function isValidPhone(phone) {
    const phoneRegex = /^\+55\s\(\d{2}\)\s\d\s\d{4}-\d{4}$/;
    return phoneRegex.test(phone);
}