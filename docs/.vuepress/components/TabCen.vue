<template>
  <div class="cen" id="tcen">
    <h2>{{ message }}.</h2>
    <table>
        <thead>
          <th>Вид реставрации (работа + материал)</th>
          <th>Цена ₽:</th>
        </thead>
        <tbody>
          <tr v-for="table in table_cen" v-bind:key="table.id">
            <td>{{ table.usluga }}</td>
            <td>{{ table.price }}</td>
          </tr>
        </tbody>
    </table>
    <table>
        <thead>
          <th>Дополнительные услуги, выполняются по вашему желанию:</th>
          <th>Цена ₽:</th>
        </thead>
        <tbody>
          <tr v-for="table in table_dop" v-bind:key="table.id">
  
            <td>{{ table.usluga }}</td>
            <td>{{ table.price }}</td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Компонент 'TabCen'",
      el: '#tcen',
      test_list: ['qwe', 'qaz', 'edc'],
      table_cen: [
            { usluga: 'Реставрация ванны Жидким Акрилом "Стандарт"', price: 4000 },
            { usluga: 'Восстановление жидким Акрилом душевого поддона.', price: 2500 },
            { usluga: 'Эмалировка ванн эмалью Тиккурила "Реафлекс 50"', price: 3700 },
            { usluga: 'Реставрация старой ванны эмалью фирмы Гамма "Эповин"', price: 3200 },
          ],
      table_dop: [
            { usluga: 'Демонтаж старой обвязки (слив и перелив)', price: 	600 },
            { usluga: 'Замена смесителя (крана) в ванной или в умывальнике', price: 	600 },
            { usluga: 'Установка декоративного экрана. (работа)', price: 	600 },
            { usluga: 'Эмалировка раковины в комплекте с ванной', price: 500},
            { usluga: 'Эмалировка раковины отдельно от ванны', price: 2500 },
            { usluga: 'Восстановление жидким Акрилом душевого поддона', price: 2500 },
          ],
    };
  }
};
</script>

<style scoped>
.cen th {
    text-align: center;
    background: #132430;
    color: #fff;
    width: 90%;
    border-collapse: collapse;
    margin: auto;
}
</style>
