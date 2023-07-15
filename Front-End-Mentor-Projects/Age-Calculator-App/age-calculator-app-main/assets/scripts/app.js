"use strict";
document.addEventListener("DOMContentLoaded", function () {
  function isDayValid(day) {
    const isDay = day >= 1 && day <= 31 ? true : false; //+var -> + convert any string into number. instead of using parseInt
    const errorDay = document.querySelector(".error-day");
    const dayTitle = document.querySelector("#day");
    const dayInput = document.querySelectorAll("input")[0];
    if (isDay) {
      return day;
    } else {
      errorDay.style.display = "block";
      dayTitle.classList.add("error-title");
      dayInput.classList.add("error-border");
    }
  }

  function isMonthValid(month) {
    let isMonth = month >= 1 && month <= 12 ? true : false;
    const errorMonth = document.querySelector(".error-month");
    const monthTitle = document.querySelector("#month");
    const monthInput = document.querySelectorAll("input")[1];

    if (isMonth) {
      return month;
    } else {
      errorMonth.style.display = "block";
      monthTitle.classList.add("error-title");
      monthInput.classList.add("error-border");
    }
  }

  function isYearValid(year, currentYear) {
    // birthYear less than currentYear(2023)
    const isYear = year <= currentYear && year > 0 ? true : false;
    const errorYear = document.querySelector(".error-year");
    const yearTitle = document.querySelector("#year");
    const yearInput = document.querySelectorAll("input")[2];

    if (isYear) {
      return year;
    } else {
      errorYear.style.display = "block";
      yearTitle.classList.add("error-title");
      yearInput.classList.add("error-border");
    }
  }

  function calcAge(userBirthDay, userBirthMonth, userBirthYear, curr) {
    // const userBirthdate = new Date(userBirthYear, userBirthMonth, userBirthDay);
    // const userBirthTime = userBirthdate.getTime();
    const currDay = curr.getDate();
    const currMonth = curr.getMonth() + 1;
    const currYear = curr.getFullYear();

    const dayResult = currDay - userBirthDay;
    const monthResult = currMonth - userBirthMonth;
    const yearResult = currYear - userBirthYear;

    if (monthResult <= 0 || dayResult <= 0) {
      return {
        dayResult: Math.abs(dayResult),
        monthResult: Math.abs(monthResult),
        yearResult: Math.abs(yearResult - 1),
      };
    } else {
      return {
        dayResult: dayResult,
        monthResult: monthResult,
        yearResult: yearResult - 1,
      };
    }
  }
  //it is possible to pass a obj as parameter but you must use the same keys
  function showResult({ dayResult, monthResult, yearResult }) {
    const resultText = document.querySelectorAll(".result__result");

    for (let i = 0; i <= resultText.length; i++) {
      if (i == 0) {
        resultText[i].textContent = `${yearResult}`;
      } else if (i == 1) {
        resultText[i].textContent = `${monthResult}`;
      } else if (i == 2) {
        resultText[i].textContent = `${dayResult}`;
      } else {
        // error
        return console.log("Error");
      }
    }
  }

  document.querySelector("form").addEventListener("submit", (event) => {
    const input = document.querySelectorAll("input");
    //putting + makes the value a number type instead of a string.
    const day = +input[0].value;
    const month = +input[1].value;
    const year = +input[2].value;
    const curr = new Date();
    const currentYear = curr.getFullYear();

    const userBirthDay = isDayValid(day);
    const userBirthMonth = isMonthValid(month);
    const userBirthYear = isYearValid(year, currentYear);

    const result = calcAge(userBirthDay, userBirthMonth, userBirthYear, curr); //store the age as key:value pair

    // alert(JSON.stringify(result)); for testing

    showResult(result); //obj argument

    event.preventDefault();
  });
});
