/* Your Code Here */

function createEmployeeRecord(employee){
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords (employees) {
   return employees.map(employee => createEmployeeRecord(employee))
}

function createTimeInEvent(dateStamp) {
    let [date, hour] = dateStamp.split(" ") // destructuring the date/time stamp and setting to variables
    let eventObj = {
        type: "TimeIn",
        hour: parseInt(hour,10), // time stamp is a string, need to convert to a number
        date
    }
     this.timeInEvents.push(eventObj)
     return this
}

function createTimeOutEvent(dateStamp) {
let [date, hour] = dateStamp.split(" ") // destructuring the date/time stamp and setting to variables
let eventObj = {
    type: "TimeOut",
    hour: parseInt(hour,10), // time stamp is a string, need to convert to a number
    date
}
 this.timeOutEvents.push(eventObj)
 return this
}

function hoursWorkedOnDate (dateStamp){
    const clockIn = this.timeInEvents.find(value => value.date === dateStamp)
    // dont forget that .find returns an the value of an array.. in this case the object
    const clockOut = this.timeOutEvents.find(value => value.date === dateStamp)
    // dont forget that .find returns an the value of an array.. in this case the object
    

    return (clockOut.hour - clockIn.hour)/100
    // we access the .hour property of the returned object from the .find method
}

function wagesEarnedOnDate (date) {
    const hours = hoursWorkedOnDate.call(this, date) // need to use .call to actually call the function
    // then pass it the object using this, and the date
    return hours * this.payPerHour
}

function findEmployeeByFirstName (employees, firstName) {
    return employees.find(employee => employee.firstName === firstName)
}

function calculatePayroll (employees) {
   const eachEmplPay = employees.map(employee => allWagesFor.call(employee))
   return eachEmplPay.reduce((previous, current) => previous + current)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

