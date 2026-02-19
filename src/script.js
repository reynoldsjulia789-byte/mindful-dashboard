import { initClock }            from './util/clock.js';
import { initDate }             from './util/date.js';
import { calculateAgeOf }       from './util/calculateAgeOf.js';
import { getDaysUntilEvent }    from './util/daysTillEvent.js';
import { getDayStreak }         from './util/streakOfDays.js';

// Clock
initClock();

// Date
initDate();

// Age of Person
const age               = calculateAgeOf("2000-01-01");
const elemAge           = document.querySelector('.ageOfPerson');
elemAge.textContent     = age;
elemAge.setAttribute("datetime", age);

// Days Until End of School Year
const daysUntil         = getDaysUntilEvent("2026-06-15");
const elemEvent         = document.querySelector('.daysUntilEvent');
elemEvent.textContent   = daysUntil;

// Streak of Days
const streak            = getDayStreak("2026-01-01");
const elemStreak        = document.querySelector('.streakOfDays');
elemStreak.textContent  = streak;
