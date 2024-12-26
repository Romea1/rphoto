const product = {
    number: 1,
    name: "огірки",
    count: 5,
    price: 75
};

/*  --Треба створити таблюцю по цій розмітці--
<article class="product">
<h2 class="product__name"> Назва</h2>
<p class="product__descr">Опис</p>
<p product__pridct>Ціна:</p>
</article>
*/

const productEl = document.createElement('article');
productEl.classList.add('product');

const nameEl = document.createElement("h2");
nameEl.textContent = product.name;
nameEl.classlist.add("product__name");

const descrEl = document.createElement("p");
descrEl.classlist.add("prosuct__descr");

