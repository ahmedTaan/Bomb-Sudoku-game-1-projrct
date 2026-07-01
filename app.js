let squers = document.querySelectorAll(".sqr")
let buttons = document.querySelectorAll(".input")
let message = document.querySelector("#message")
let pen = document.getElementById("pen")
/* 0_ ملء الشبكة بشكل مبدئي */
let sqr1 = document.querySelector("#row-1-colomn-8")
let sqr2 = document.querySelector("#row-1-colomn-9")
let sqr3 = document.querySelector("#row-2-colomn-2")
let sqr4 = document.querySelector("#row-2-colomn-3")
let sqr5 = document.querySelector("#row-2-colomn-5")
let sqr6 = document.querySelector("#row-2-colomn-8")
let sqr7 = document.querySelector("#row-2-colomn-9")
let sqr8 = document.querySelector("#row-3-colomn-2")
let sqr9 = document.querySelector("#row-3-colomn-3")
let sqr10 = document.querySelector("#row-4-colomn-1")
let sqr11 = document.querySelector("#row-4-colomn-4")
let sqr12 = document.querySelector("#row-4-colomn-6")
let sqr13 = document.querySelector("#row-4-colomn-9")
let sqr14 = document.querySelector("#row-5-colomn-2")
let sqr15 = document.querySelector("#row-5-colomn-3")
let sqr16 = document.querySelector("#row-5-colomn-5")
let sqr17 = document.querySelector("#row-5-colomn-7")
let sqr18 = document.querySelector("#row-5-colomn-8")
let sqr19 = document.querySelector("#row-6-colomn-1")
let sqr20 = document.querySelector("#row-6-colomn-4")
let sqr21 = document.querySelector("#row-6-colomn-6")
let sqr22 = document.querySelector("#row-6-colomn-9")
let sqr23 = document.querySelector("#row-7-colomn-7")
let sqr24 = document.querySelector("#row-7-colomn-8")
let sqr25 = document.querySelector("#row-8-colomn-1")
let sqr26 = document.querySelector("#row-8-colomn-2")
let sqr27 = document.querySelector("#row-8-colomn-5")
let sqr28 = document.querySelector("#row-8-colomn-7")
let sqr29 = document.querySelector("#row-8-colomn-8")
let sqr30 = document.querySelector("#row-9-colomn-1")
let sqr31 = document.querySelector("#row-9-colomn-2")

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
solMatrix = [
    [3, 5, 9, 4, 1, 8, 2, 6, 7],
    [7, 1, 2, 6, 3, 4, 5, 9, 8],
    [2, 4, 3, 5, 7, 9, 8, 1, 6],
    [5, 9, 7, 8, 2, 1, 6, 4, 3],
    [1, 6, 4, 3, 5, 7, 9, 8, 2],
    [4, 2, 8, 1, 9, 6, 3, 7, 5],
    [8, 3, 6, 7, 4, 5, 1, 2, 9],
    [6, 7, 5, 9, 8, 2, 4, 3, 1],
    [9, 8, 1, 2, 6, 3, 7, 5, 4]
]

/* let span1 = document.createElement("span")
span1.id = "span-1", span1.textContent = "1", span1.classList = "pencil"
let span2 = document.createElement("span")
span2.id = "span-2", span2.textContent = "2", span2.classList = "pencil"
let span3 = document.createElement("span")
span3.id = "span-3", span3.textContent = "3", span3.classList = "pencil"
let span4 = document.createElement("span")
span4.id = "span-4", span4.textContent = "4", span4.classList = "pencil"
let span5 = document.createElement("span")
span5.id = "span-5", span5.textContent = "5", span5.classList = "pencil"
let span6 = document.createElement("span")
span6.id = "span-6", span6.textContent = "6", span6.classList = "pencil"
let span7 = document.createElement("span")
span7.id = "span-7", span7.textContent = "7", span7.classList = "pencil"
let span8 = document.createElement("span")
span8.id = "span-8", span8.textContent = "8", span8.classList = "pencil"
let span9 = document.createElement("span")
span9.id = "span-9", span9.textContent = "9", span9.classList = "pencil"
 */
/* squers[13].appendChild(span9.cloneNode(true))
squers[13].appendChild(span8.cloneNode(true))
squers[13].appendChild(span7.cloneNode(true))
squers[13].appendChild(span6.cloneNode(true))
squers[13].appendChild(span5.cloneNode(true))
squers[13].appendChild(span4.cloneNode(true))
squers[13].appendChild(span3.cloneNode(true))
squers[13].appendChild(span2.cloneNode(true))
squers[13].appendChild(span1.cloneNode(true))


squers[2].appendChild(span9.cloneNode(true))
squers[2].appendChild(span8.cloneNode(true))
squers[2].appendChild(span7.cloneNode(true))
squers[2].appendChild(span6.cloneNode(true))
squers[2].appendChild(span5.cloneNode(true))
squers[2].appendChild(span4.cloneNode(true))
squers[2].appendChild(span3.cloneNode(true))
squers[2].appendChild(span2.cloneNode(true))
squers[2].appendChild(span1.cloneNode(true))

squers[2].removeChild(squers[2].querySelector("#span-1"))
 */

let penMode = false
let trackMode = false
let lastClick = ""
let lastClickCheck
let squaresForSearch = [...squers]
let current
let position
let filledSquares = []
let realPosition
let row
let colomn
let first = true
let pencilCurrentMatrix = []

squaresForSearch.forEach(sqr => {
    if (Boolean(sqr.textContent)) {
        filledSquares.push(sqr)
    }
})

/* 1_ دالة المحل الحالي تخليه محاط بالأزرق */
let addPadding = (event) => {
    if (event.target.spellcheck === true) {
        if (lastClick == "") {
            // هذا الي اعتبرته مؤشر للمكان، وهو شي غبي ما له قيمة، موجود في كل عنصر.
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
        //إزالة العلامة إذا ضغط عليها وهي مفعلة.
        event.target.spellcheck = true
        event.target.style.border = "#939598 1px solid"
    }
}

// 2_ دالة بايخة بس تطرش لدالة الأرقام إذا كان رقم ولدالة الدوال إذا كانت دالة
let numericFunction = (event) => {
    if (event.target.classList[0] == "funs") {
        numericFunctionFuns(event)
    }
    if (event.target.classList[0] == "num") {
        numericFunctionNums(event)
    }
}

// 2.1_ دالة فرعية لإدخال الأرقام (الكبيرة والصغيرة) 
let numericFunctionNums = (event) => {
    current = squaresForSearch.find(sqr => sqr.id === String(lastClick))
    if (Boolean(current)) {
        position = current
        position = String(position.id).split("-")
        if (solMatrix[position[1] - 1][position[3] - 1] == event.target.textContent && pen.spellcheck == true
        ) {
            current.textContent = event.target.textContent
            console.log(`${event.target.textContent} is correct answer in ${position}`)
            filledSquares.push(current)
            if (filledSquares.length == 81) {
                message.textContent = "فزت!"
            }
        }
        else if (pen.spellcheck == false) {
            position = (Number(position[1]) - 1) * 9 + Number(position[3]) - 1
            if (Boolean(squers[position].querySelector(String("#span-") + String(event.target.id)))) {
                squers[position].removeChild(squers[position].querySelector(String("#span-") + event.target.id))
            }
            else {
                let span = document.createElement("span")
                span.id = String("span-" + event.target.id), span.textContent = String(event.target.id), span.classList = "pencil"
                squers[position].appendChild(span)
            }
        }
        else {
            console.log(`The solution is ${solMatrix[position[1] - 1][position[3] - 1]}`)
        }
    }
}
// 2.2_ دالة فرعية، لوظائف الدوال 
let numericFunctionFuns = (event) => {
    if (event.target.id == "fast-pen") {
        fastPencilFunction()
    }
    if (event.target.spellcheck === true && event.target.id == "pen") {
        event.target.spellcheck = false
        event.target.style.backgroundColor = "blue"

    }
    else if (event.target.spellcheck === true) {
        event.target.spellcheck = false
    }
    else {
        event.target.style.backgroundColor = ""
        event.target.spellcheck = true
    }
}


// a_ الدالة الي تتحقق من الشروط وتسمح له بإدخال رقم.
let rowCodition = true
let colomnCondition = true
let adjacentCondition = true
let checker = (num, position) => {

    rowCodition = true
    colomnCondition = true
    adjacentCondition = true

    let rowColomnMatrix = String(position).split("-")

    //شرط الصفوف
    for (let i = 1; i <= 9; i++) {
        rowColomnMatrix[1] = i
        if (String(num) === squaresForSearch.find(sqr =>
            sqr.id == String(
                rowColomnMatrix.join("-")
            )
        ).textContent) {
            rowCodition = false
            // console.log(`I find the row mach at ${rowColomnMatrix.join("-")}`)
        }
    }
    rowColomnMatrix = String(position).split("-")

    //شرط الأعمدة
    for (let i = 1; i <= 9; i++) {
        rowColomnMatrix[3] = i
        if (String(num) === squaresForSearch.find(sqr =>
            sqr.id == String(
                rowColomnMatrix.join("-")
            )
        ).textContent) {
            colomnCondition = false
            // console.log(`I find the colomn mach at ${rowColomnMatrix.join("-")}`)
        }
    }
    //شرط الجوار
    for (let j = -1; j <= 1; j++) {
        // هذا لأني واجهت مشكلة أنه يعدل على المصفوفة الأصلية بينما أبغيه يعدل على الرقم المعين الي هو فيه.
        rowColomnMatrix = String(position).split("-")
        rowColomnMatrix[1] = Number(rowColomnMatrix[1]) + j
        rowColomnMatrix[3] = Number(rowColomnMatrix[3]) - 2

        if (rowColomnMatrix[1] == 10 || rowColomnMatrix[1] == 0) {
            continue
        }
        for (let i = 1; i <= 3; i++) {
            rowColomnMatrix[3] = Number(rowColomnMatrix[3]) + 1
            if (rowColomnMatrix[3] == 10 || rowColomnMatrix[3] == 0) {
                continue
            }
            if (String(num) === squaresForSearch.find(sqr =>
                sqr.id == String(
                    rowColomnMatrix.join("-")
                )
            ).textContent) {
                adjacentCondition = false
                // console.log(`I find the adjacent maching at ${rowColomnMatrix.join("-")}`)
            }
        }
    }
    return (rowCodition && colomnCondition && adjacentCondition)
}

// b_ الدالة الي تستقبل موقع وتحط فيه الأرقام الممكنة حسب الشروط
let pencilFunction = (position) => {
    // تحول المكان من الصف والعمود إلى رقم من 0 إلى 80
    realPosition = position.split("-")
    realPosition = (Number(realPosition[1]) - 1) * 9 + Number(realPosition[3]) - 1
    //يحذف أي بنسل موجود
    for (let n = 1; n <= 9; n++) {
        if (Boolean(squers[realPosition].querySelector(String("#span-") + n))) {
            squers[realPosition].removeChild(squers[realPosition].querySelector(String("#span-") + n))
        }
    }
    //يحط البنسل للأرقام الممكنة (حسب الشروط الثلاثة)
    if (!Boolean(squers[realPosition].textContent)) {
        for (let n = 1; n <= 9; n++) {
            if (checker(n, position)) {
                let span = document.createElement("span")
                span.id = String("span-" + n), span.textContent = String(n), span.classList = "pencil"

                squers[realPosition].appendChild(span.cloneNode(true))
            }
        }
    }
}

// 3_ تستدعيها عشان تملأ الأماكن الباقية بالاحتمالات الممكنة
let fastPencilFunction = () => {
    // يحط كل الأرقام الممكنة (في أول مرة فقط)
    /* if (first) {
        first = false */
        for (let n = 0; n <= 80; n++) {
            //تحول من رقم إلى موقع
            row = Math.floor(n / 9) + 1
            colomn = Math.round((n / 9 - Math.floor(n / 9)) * 9) + 1
            position = String("row-" + row + "-colomn-" + colomn)
            //تستدعي الدالة الي تحط في هذا الموقع
            pencilFunction(position)
        }
/*     }
 */    // يحط كل الأرقام الممكنة باستثناء الأرقام الي هو شالها من قبل
/*     else {
        for (let n = 0; n <= 80; n++) {
            //تحول من رقم إلى موقع
            row = Math.floor(n / 9) + 1
            colomn = Math.round((n / 9 - Math.floor(n / 9)) * 9) + 1
            position = String("row-" + row + "-colomn-" + colomn)
            realPosition = ((row - 1) * 9) + (colomn - 1)
            pencilCurrentMatrix = []
            for (let n = 1; n <= 9; n++) {
                if (Boolean(squers[realPosition].querySelector(String("#span-") + n))){
                pencilCurrentMatrix.push(squers[realPosition].querySelector(String("#span-") + n))
                }
            }
            //تستدعي الدالة الي تحط في هذا الموقع
            pencilFunction(position)
            //تحذف الي ما كان موجود
            console.log()
            for (let n = 1; n <= 9; n++){
                if(Boolean(squers[realPosition].querySelector(String("#span-") + n)) && pencilCurrentMatrix.indexOf( squers[realPosition].querySelector(String("#span-") + n) ) == -1){
                    squers[realPosition].removeChild(squers[realPosition].querySelector(String("#span-") + n))
                }
            }
        }
    }
 */}

squers.forEach(element => element.addEventListener("click", addPadding))
buttons.forEach(element => element.addEventListener("click", numericFunction))