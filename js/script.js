"use strict";

// Создать новый Promise, который будет длится 5 секунд (используем setTimeout) и выполнять следующие действия:

// при успешном завершение (fulfilled) - должен вывести фразу "done"
// при ошибке (rejected) - вывести текст ошибки в консоль
// при любом результате вывести текст - "Promise was finished!"


// Обработку промиса необходима написать 2-мя способами:

// .then / .catch
// async / await + try...catch

let promise = new Promise(function (resolve, rejected) {
    setTimeout(() => {
        resolve([
            {
                name: "Oleg",
                age: 27,
            },
            {
                name: "July",
                age: 30,
            },
        ]);
        rejected(new Error("Error"));
    },5000);
})

// .then/.catch
promise
    .then((result) => console.log("done"))
    .catch((err) => console.error("error"))
    .finally(() => console.log("Promise was finished!"));


    // async / await
async function getpromise() {
    try {
        const result = await promise;
        console.log("done");
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Promise was finished!");
    }
}
getpromise()