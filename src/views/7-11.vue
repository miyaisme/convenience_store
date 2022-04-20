<template>
  <div class="7-11">
    <div class="condition">
      <div class="selections">
        <label for="city-select">請選擇縣市：</label>
        <select name="cities" id="city-select" v-model="selectedCity">
          <option value="all" selected="selected">請選擇</option>
          <option v-for="(city, index) in cities" :key="index" :value="city">
            {{ city }}
          </option>
        </select>
        <br>
        <input type="checkbox" name="wifi" id="isWifi" v-model="selectedWifi"><font-awesome-icon icon="fa-solid fa-wifi" /><label for="isWifi"> WIFI</label>
        <input type="checkbox" name="atm" id="isAtm" v-model="selectedAtm"><font-awesome-icon icon="fa-solid fa-money-check" /><label for="isAtm"> ATM</label>
        <input type="checkbox" name="coffee" id="isCoffee" v-model="selectedCoffee"><font-awesome-icon icon="fa-solid fa-coffee" /><label for="isCoffee"> Coffee</label>
        <input type="checkbox" name="icecream" id="isIceCream" v-model="selectedIceCream"><font-awesome-icon icon="fa-solid fa-ice-cream" /><label for="isIceCream"> Ice Cream</label>
      </div>
    </div>
    <div class="store-content">
      <table>
        <thead>
          <tr>
            <th scope="col">店名</th>
            <th scope="col">地址</th>
            <th scope="col">電話</th>
            <th scope="col">附設服務</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(store, index) in filteredStores" :key="index">
            <td>{{ store.POIName }}</td>
            <td>{{ store.Address }}</td>
            <td>{{ store.Telno }}</td>
            <td>{{ store.is7WiFi }}</td>
            <td>{{ store.isATM }}</td>
            <td>{{ store.isCityCafe }}</td>
            <td>{{ store.isIceCream }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// const cities_en = [
//   "KeelungCity",
//   "TaipeiCity",
//   "NewTaipeiCity",
//   "TaoyuanCounty",
//   "HsinchuCity",
//   "HsinchuCounty",
//   "MiaoliCounty",
//   "TaichungCity",
//   "ChanghuaCounty",
//   "NantouCounty",
//   "YunlinCounty",
//   "ChiayiCity",
//   "ChiayiCounty",
//   "TainanCity",
//   "KaohsiungCity",
//   "PingtungCounty",
//   "TaitungCounty",
//   "HualienCounty",
//   "YilanCounty",
//   "PenghuCounty",
//   "KinmenCounty",
//   "RenjiCounty",
// ];

const cities_ch = [
  "基隆市",
  "台北市",
  "新北市",
  "桃園縣",
  "新竹市",
  "新竹縣",
  "苗栗縣",
  "台中市",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義市",
  "嘉義縣",
  "台南市",
  "高雄市",
  "屏東縣",
  "台東縣",
  "花蓮縣",
  "宜蘭縣",
  "澎湖縣",
  "金門縣",
  "連江縣",
];

// import { cities_en } from "../data/7-11";
import Keelung from '../data/7-11/基隆市'
import NewTaipei from '../data/7-11/新北市'
import TaipeiCity from '../data/7-11/台北市'
import YilanCounty from '../data/7-11/宜蘭縣'
import Taoyuan from '../data/7-11/桃園市'
import HsinchuCounty from '../data/7-11/新竹縣'
import Hsinchu from '../data/7-11/新竹市'
import MiaoliCounty from '../data/7-11/花蓮縣'
import Taichung from '../data/7-11/台中市'
import Changhua from '../data/7-11/彰化縣'
import NantouCounty from '../data/7-11/南投縣'
import Yunlin from '../data/7-11/雲林縣'
import Chiayi from '../data/7-11/嘉義市'
import ChiayiCounty from '../data/7-11/嘉義縣'
import Tainan from '../data/7-11/台南市'
import Kaohsiung from '../data/7-11/高雄市'
import PingtungCounty from '../data/7-11/屏東縣'
import Taitung from '../data/7-11/台東縣'
import HualienCounty from '../data/7-11/花蓮縣'
import Penghu from '../data/7-11/澎湖縣'
import KinmenCounty from '../data/7-11/金門縣'
import Renji from '../data/7-11/連江縣'

const filters = {
  all: (stores) => stores,
  // 其他縣市的filters功能由function createdFilterCity產生
};

function createdFilterCity () {
  for (let i = 0; i < cities_ch.length; i++) {
    filters[cities_ch[i]] = (stores) => stores.filter((store) => store.Address.includes(cities_ch[i]))
  }
}

export default {
  components: {},
  created() {
    this.fetchCitysData();
    createdFilterCity()
  },
  data() {
    return {
      selectedCity: "all",
      cities: [],
      stores: [],
      selectedWifi: "false",
      selectedAtm: "false",
      selectedCoffee: "false",
      selectedIceCream: "false",
    };
  },
  methods: {
    fetchCitysData() {
      this.cities.push(
        Keelung.city_name,
        NewTaipei.city_name,
        TaipeiCity.city_name,
        YilanCounty.city_name,
        Taoyuan.city_name,
        HsinchuCounty.city_name,
        Hsinchu.city_name,
        MiaoliCounty.city_name,
        Taichung.city_name,
        Changhua.city_name,
        NantouCounty.city_name,
        Yunlin.city_name,
        Chiayi.city_name,
        ChiayiCounty.city_name,
        Tainan.city_name,
        Kaohsiung.city_name,
        PingtungCounty.city_name,
        Taitung.city_name,
        HualienCounty.city_name,
        Penghu.city_name,
        KinmenCounty.city_name,
        Renji.city_name
      );
      this.stores.push(
        ...Keelung.stores,
        ...NewTaipei.stores,
        ...TaipeiCity.stores,
        ...YilanCounty.stores,
        ...Taoyuan.stores,
        ...HsinchuCounty.stores,
        ...Hsinchu.stores,
        ...MiaoliCounty.stores,
        ...Taichung.stores,
        ...Changhua.stores,
        ...NantouCounty.stores,
        ...Yunlin.stores,
        ...Chiayi.stores,
        ...ChiayiCounty.stores,
        ...Tainan.stores,
        ...Kaohsiung.stores,
        ...PingtungCounty.stores,
        ...Taitung.stores,
        ...HualienCounty.stores,
        ...Penghu.stores,
        ...KinmenCounty.stores,
        ...Renji.stores
      );
    },
  },
  computed: {
    filteredStores() {
      return filters[this.selectedCity](this.stores);
    },
  },
};
</script>
