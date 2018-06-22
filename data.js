module.exports = {

    getDays: function (year, month) {
        var arr = [];

        for (var i = 1; i <= daysInMonth(month, year); i++) {

            var date = new Date(year + '-' + (month).pad(2) + '-' + (i).pad(2))

            // console.log(daysInMonth(month, year))

            var day = {
                "dia": i,
            };

            //comprobamos que no sea sabado o domingo
            if (date.getDay() > 0 && date.getDay() < 6) {
                day.entrada = "09:00"
                day.salida = "14:00"
                day.horas = 5
            }

            arr.push(day);
        }

        return arr
    },

}

/**
 * Get the numer of days the month and year
 * Example  daysInMonth(2, 2016) = 29
 * @param {*} month 
 * @param {*} year 
 */
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

/**
 * Leading zeros a la izq.
 * Example (123).pad(6) = 000123
 * @param {*} size 
 */
Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}