/**
 * Used to get a absolute value of a number.
 * @param {number} number 
 * @returns -> Number or String
 */
function getAbsoluteValueOfANumber(number) {
    // Guard Clause
    if (number == null) return
    if (number < 0) return `(${Math.abs(number)})`
    return number.toString()
}

console.log(getAbsoluteValueOfANumber(undefined))
console.log(getAbsoluteValueOfANumber(0))
console.log(getAbsoluteValueOfANumber(10))
console.log(getAbsoluteValueOfANumber(-5))
const TAX_RATE = 1.1
const SHIPPING_DEFAULT = 5

function calculateTotal(items, {
    shipping = SHIPPING_DEFAULT,
    discount = 0
} = {}) {
    if (items == null || items.length === 0) return 0

    /**
     * 
     */
    const itemCost = items.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)
    const discountRate = 1 - discount

    return itemCost * discountRate * TAX_RATE + shipping
}

const testItems = [{
        price: 15,
        quantity: 2
    },
    {
        price: 20,
        quantity: 1
    },
    {
        price: 5,
        quantity: 4
    }
]

// console.log(calculateTotal())
// console.log(calculateTotal(testItems))
// console.log(calculateTotal(undefined, {}))
// console.log(calculateTotal([], {}))
console.log(calculateTotal(testItems, {}))
console.log(calculateTotal(testItems, {
    shipping: 0
}))
console.log(calculateTotal(testItems, {
    discount: .75
}))
console.log(calculateTotal(testItems, {
    shipping: 12
}))

//// Clases, don't be redundant
// Mal
const CarMal = {
    carMake: 'Honda',
    carModel: 'Accord',
    carColor: 'Blue'
};
// Bien
const CarBien = {
    make: 'Honda',
    model: 'Accord',
    color: 'Blue'
};

//// Functions, avoid too many arguments, use clases instead
// Mal
function register(name, lastName, age, email, country) {
    // ...
}
// Bien
class User {
    constructor(name, lastName, age, email, country) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.country = countr;
    }
}

function registerUser(User) {
    // ...
}

//// Conditionals, don't use magic numbers
// Mal
if (user.age > 18) {
    // ...
}
// Bien
var validAge = 18;
if (user.age > validAge) {
    // ...
}

// Mal
setTimeout(blastOff, 86400000);
// bien
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

// Mal
if (userStatus = -1) { // new user
    // ....
}
// Bien
var UserStatusNew = -1;
if (userStatus = UserStatusNew) {
    // ....
}
//// Conditionals, don't be "anti-negative"
// Mal
if (!isNotValid()) {
    // ...
}
// Bien
if (isValid()) {
    // ...
}

if (fsm.state === 'fetching' && isEmpty(listNode)) {
    // ...
}
// Bien
function shouldShowSpinner(fsm, listNode) {
    return fsm.state === 'fetching' && isEmpty(listNode);
}
if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
    // ...
}
var message = "";

if (isValid()) {
    validationOk = "Welcome!";
} else {
    var validationOk = "Go Away";
}
// Bien
var validationOk = isValid() ? "Welcome!" : "Go Away";

//// Function, extract methods, avoid flag arguments
// Mal
function createTask(description, priority, preview, email) {
    var task = TaskFactory.new();
    task.status = "open";
    task.description = description;
    task.priority = priority;

    if (!preview == true) {
        task.save();
        if (email == true) {
            mailSender.send(task);
        }
    } else {
        mailSender.send(task, false);
    }
}
// Bien
function createTask(description, priority) {
    var task = TaskFactory.new(description, priority);
    task.save();
    return task;
}

function previewTask(description, priority) {
    var task = TaskFactory.new(description, priority);
    return task;
}

function notifyTaskCreation(task) {
    emailSender.notifyCreation(task);
}

function notifyTaskPreview(task) {
    emailSender.notifyCreation(task);
}

// Naming, boolean should answer question
// Mal
function valid() {
    // ...
}
// Bien
function isValidSubmision() {
    // ...
}

// Mal
var valid = true;
// Bien
var isValid = true;

// Mal
var registered = false;
// Bien
var isRegistered = false;

// Mal
var notValid = false;
// Bien
var isValid = true;


function mail() {
    // ...
}
// Bien
function sendMail() {

}

// Mal
function process() {
    // ...
}
// Bien
function processUserRequest() {
    // ...
}

//// Naming, don't use AND, OR, IF
function validateAndSave(user) {
    // ...
}

function addOrCreate(file) {
    // ...
}

function saveOrUpdate() {
    // ...
}
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);

function createMicrobrewery(name = "Hipster Brew Co.") {
    // ...
}

function createMenu({
    title,
    body,
    buttonText,
    cancellable
}) {
    // ...
}

createMenu({
    title: "Foo",
    body: "Bar",
    buttonText: "Baz",
    cancellable: true
});

function emailActiveClients(clients) {
    clients.filter(isActiveClient).forEach(email);
}

function isActiveClient(client) {
    const clientRecord = database.lookup(client);
    return clientRecord.isActive();
}

function parseBetterJSAlternative(code) {
    const tokens = tokenize(code);
    const syntaxTree = parse(tokens);
    syntaxTree.forEach(node => {
        // parse...
    });
}

function tokenize(code) {
    const REGEXES = [
        // ...
    ];

    const statements = code.split(" ");
    const tokens = [];
    REGEXES.forEach(REGEX => {
        statements.forEach(statement => {
            tokens.push( /* ... */ );
        });
    });

    return tokens;
}

function parse(tokens) {
    const syntaxTree = [];
    tokens.forEach(token => {
        syntaxTree.push( /* ... */ );
    });

    return syntaxTree;
}