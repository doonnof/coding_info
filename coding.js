const coding = () => {
    const input = document.querySelector(".input__text");// Обращаемся к элементу ввода текста
    let text = input.value.split(''); // преобразуем полученные данные в символьный массив
    text.forEach((item,i) => { // делаем перебор полученного массива, item элемент, i индекс элемента
        text[i] = String.fromCharCode(text[i].charCodeAt(0) +7); // изменяем символьный элемент ссылаясь на код символа в таблице кодировки
    });
    input.value=text.join(''); // преобразуем обратно массив в строку и заносим в поле ввода
}