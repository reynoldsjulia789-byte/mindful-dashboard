import { initClock }            from './util/clock.js';
import { initDate }             from './util/date.js';
import { calculateAgeOf }       from './util/calculateAgeOf.js';
import { getDaysUntilEvent }    from './util/daysTillEvent.js';
import { getDayStreak }         from './util/streakOfDays.js';

// Clock
initClock();

// Date
initDate();

// years playing music
const age               = calculateAgeOf("2009-08-01");
const elemAge           = document.querySelector('.ageOfPerson');
elemAge.textContent     = age;
elemAge.setAttribute("datetime", age);

// Days Until Graduation
const daysUntil         = getDaysUntilEvent("2027-06-15");
const elemEvent         = document.querySelector('.daysUntilEvent');
elemEvent.textContent   = daysUntil;

// Days studying CS
const streak            = getDayStreak("2025-09-01");
const elemStreak        = document.querySelector('.streakOfDays');
elemStreak.textContent  = streak;
