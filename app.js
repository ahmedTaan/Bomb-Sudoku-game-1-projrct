let squers = document.querySelectorAll(".sqr")
let buttons = document.querySelectorAll(".input")
let message = document.querySelector("#message")
let game = document.querySelector("#game")
let pen = document.getElementById("pen")
/* 0_ ملء الشبكة بشكل مبدئي */
let Matrix = [
    [ , , , , , , ,6,7],
    [ ,1,2, ,3, , ,9,8],
    [ ,4,3, , , , , , ],
    [5, , ,8, ,1, , ,3],
    [ ,6,4, ,5, ,9,8, ],
    [4, , ,1, ,6, , ,5],
    [ , , , , , ,1,2, ],
    [6,7, , ,8, ,4,3, ],
    [9,8, , , , , , , ]
]
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
Matrix.forEach((matrix, matrixIndex) => matrix.forEach(
    (cell, index)=>{
        squers[9*matrixIndex+index].textContent = cell
    }
))

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
            event.target.style.borderRadius = "20%"
        }
        else {
            //إزالة العلامة القديمة
            lastClickCheck = squaresForSearch.find(sqre => sqre.id === lastClick)
            lastClickCheck.style.border = "#939598 1px solid"
            lastClickCheck.style.borderRadius = "0"
            lastClickCheck.spellcheck = true

            //وضع العلامة الجديدة
            event.target.spellcheck = false
            lastClick = event.target.id
            event.target.style.border = "blue solid 2px"
            event.target.style.borderRadius = "20%"
        }
    }
    else {
        //إزالة العلامة إذا ضغط عليها وهي مفعلة.
        event.target.spellcheck = true
        event.target.style.border = "#939598 1px solid"
        event.target.style.borderRadius = "0"
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
        //للأرقام الكبيرة
        if (solMatrix[position[1] - 1][position[3] - 1] == event.target.textContent && pen.spellcheck == true
        ) {
            current.textContent = event.target.textContent
            console.log(`${event.target.textContent} is correct answer in ${position}`)
            filledSquares.push(current)
            current.style.border = "green solid 2px"
            current.style.borderRadius = "20%"
            current.style.backgroundColor = "#95ff8f"
            setTimeout(()=>{
                current.style.backgroundColor = ""
            }, 1000)
            if (filledSquares.length == 81) {
                message.textContent = "فزت!"
            }
        }
        // للأرقام الصغيرة
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
            current.style.border = "red solid 2px"
            current.style.borderRadius = "20%"
            current.style.backgroundColor = "#ff988f"
            setTimeout(()=>{
                current.style.backgroundColor = ""
            }, 1000)
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

 // 4_ ما بيمديني أسويها، كنت بخليها تحسب ليي عدد الحلول الممكنة لأرقام مبدئية معينة عشان أستخدمها في صناعة شبكات بأرقام بدأية عشوائية
 let lastGame
 let isLastGameIsGame = false
 let solutions = () => {
    let count = 0
    lastGame = game
    fastPencilFunction()
    while (!isLastGameIsGame){
        for (let n = 0; n <= 80; n++) {
            //تحول من رقم إلى موقع
            row = Math.floor(n / 9) + 1
            colomn = Math.round((n / 9 - Math.floor(n / 9)) * 9) + 1
            position = String("row-" + row + "-colomn-" + colomn)
            //تستدعي الدالة الي تحط في هذا الموقع
            pencilFunction(position)
        }
        if(game == lastGame){
            isLastGameIsGame = true
        }
        else{
            fastPencilFunction()
            count++
            console.log(count)
        }
    }
 }
squers.forEach(element => element.addEventListener("click", addPadding))
buttons.forEach(element => element.addEventListener("click", numericFunction))