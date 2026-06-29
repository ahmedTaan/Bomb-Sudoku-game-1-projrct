let squers = document.querySelectorAll(".sqr")
let buttons = document.querySelectorAll(".input")

/* ملء الشبكة بشكل مبدئي */
let sqr1 = document.querySelector("#row-1-8")
let sqr2 = document.querySelector("#row-1-9")
let sqr3 = document.querySelector("#row-2-2")
let sqr4 = document.querySelector("#row-2-3")
let sqr5 = document.querySelector("#row-2-5")
let sqr6 = document.querySelector("#row-2-8")
let sqr7 = document.querySelector("#row-2-9")
let sqr8 = document.querySelector("#row-3-2")
let sqr9 = document.querySelector("#row-3-3")
let sqr10 = document.querySelector("#row-4-1")
let sqr11 = document.querySelector("#row-4-4")
let sqr12 = document.querySelector("#row-4-6")
let sqr13 = document.querySelector("#row-4-9")
let sqr14 = document.querySelector("#row-5-2")
let sqr15 = document.querySelector("#row-5-3")
let sqr16 = document.querySelector("#row-5-5")
let sqr17 = document.querySelector("#row-5-7")
let sqr18 = document.querySelector("#row-5-8")
let sqr19 = document.querySelector("#row-6-1")
let sqr20 = document.querySelector("#row-6-4")
let sqr21 = document.querySelector("#row-6-6")
let sqr22 = document.querySelector("#row-6-9")
let sqr23 = document.querySelector("#row-7-7")
let sqr24 = document.querySelector("#row-7-8")
let sqr25 = document.querySelector("#row-8-1")
let sqr26 = document.querySelector("#row-8-2")
let sqr27 = document.querySelector("#row-8-5")
let sqr28 = document.querySelector("#row-8-7")
let sqr29 = document.querySelector("#row-8-8")
let sqr30 = document.querySelector("#row-9-1")
let sqr31 = document.querySelector("#row-9-2")

sqr1.textContent = "6"
sqr2.textContent = "7"
sqr3.textContent = "1"
sqr4.textContent = "2"
sqr5.textContent = "3"
sqr6.textContent = "9"
sqr7.textContent = "8"
sqr8.textContent = "4"
sqr9.textContent = "3"
sqr10.textContent = "5"
sqr11.textContent = "8"
sqr12.textContent = "1"
sqr13.textContent = "3"
sqr14.textContent = "6"
sqr15.textContent = "4"
sqr16.textContent = "5"
sqr17.textContent = "9"
sqr18.textContent = "8"
sqr19.textContent = "4"
sqr20.textContent = "1"
sqr21.textContent = "6"
sqr22.textContent = "5"
sqr23.textContent = "1"
sqr24.textContent = "2"
sqr25.textContent = "6"
sqr26.textContent = "7"
sqr27.textContent = "8"
sqr28.textContent = "4"
sqr29.textContent = "3"
sqr30.textContent = "9"
sqr31.textContent = "8"

let penMode = false
let trackMode = false
let lastClick = ""
let lastClickCheck
let squaresForSearch = [...squers]
let current

/* دالة المحل الحالي */
let addPadding = (event) => {
    if (event.target.spellcheck === true) {
        if (lastClick == "") {
            // هذا الي اعتبرته مؤشر للمكان، وهو شي غبي ما له قيمة موجود في كل عنصر.
            event.target.spellcheck = false
            lastClick = event.target.id
            event.target.style.border = "blue solid 2px"
        }
        else {
            //إزالة العلامة القديمة
            lastClickCheck = squaresForSearch.find(sqre => sqre.id === lastClick)
            lastClickCheck.style.border = "#939598 1px solid"
            lastClickCheck.spellcheck = true

            //وضع العلامة الجديدة
            event.target.spellcheck = false
            lastClick = event.target.id
            event.target.style.border = "blue solid 2px"
        }
    }
    else {
        event.target.spellcheck = true
        event.target.style.border = "#939598 1px solid"
    }
}
/* دالة فرعية، لوظائف الدوال */
let numericFunctionFuns = (event) => {
    if (event.target.spellcheck === true && event.target.id == "trac-pen") {
        event.target.spellcheck = false
        event.target.style.backgroundColor = "blue"

    }
    else if (event.target.spellcheck === true) {
        event.target.spellcheck = false
    }
    else {
        event.target.style.backgroundColor = ""
        event.target.spellcheck === true
    }
}
/* دالة فرعية لإدخال الأرقام (الكبيرة والصغيرة والمتتبعة) */
let numericFunctionNums = (event) => {
    console.log(lastClick)
    console.log()
    current = squaresForSearch.find(sqr => sqr.id === String(lastClick))
    if (Boolean(current)) {
        current.textContent = event.target.textContent
    }
}

let numericFunction = (event) => {
    if (event.target.classList[0] == "funs") {
        numericFunctionFuns(event)
    }
    if (event.target.classList[0] == "num") {
        numericFunctionNums(event)
    }

}

let rowCodition = true
let colomnCondition = true
let adjacentCondition = true
let chicker = (num, position) => {

    for (let i = 1; i <= 9; i++) {
        //للصف
        if (String(num) === squaresForSearch.find(sqr =>
            sqr.id == String(
                String(position).slice(0, 6) +
                String(i)
            )
        ).textContent) {
            rowCodition = false
        }
        //للعمود
        if (String(num) === squaresForSearch.find(sqr =>
            sqr.id == String(
                String(position).slice(0, 4) +
                String(i) +
                String(position).slice(5, 7)
            )
        ).textContent) {
            colomnCondition = false
        }
    }
    for (let j = -1; j <= 1; j++) {
        for (let i = -1; i <= 1; i++) {
            if (String(num) === squaresForSearch.find(sqr =>
                sqr.id == String(
                    String(position).slice(0, 4) +
                    String(Number(String(position).slice(4, 5)) + j) +
                    String(position).slice(5, 6) +
                    String(Number(String(position).slice(6, 7)) + i)
                )
            ).textContent) {
                adjacentCondition = false
            }
        }
    }
}

console.log(String(String("position").slice(0, 6) + String(5)))

console.log(squers)
console.log(buttons)
console.log(sqr1)
squers.forEach(element => element.addEventListener("click", addPadding))
buttons.forEach(element => element.addEventListener("click", numericFunction))