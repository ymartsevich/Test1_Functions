/*Задача #2 — Урка

Каждый раз в нашу хату запускают новых пацанов на отсидку. Нужно сделать так, чтобы каждый раз, когда к нам попадал новенький, мы его делали петушком и опускали бы.
    Опустить для нас - это сделать его отрицательным.
    А если он уже был опущенный, то наоборот, сделать из него нормального пасана (положительным).
*/


function letOut2(h) {
    return 'Выпустить пацана ' + h * -1;
}

console.log(letOut2(5));