import { defineStore } from "pinia";
import axios from "axios";
import {toRaw} from "vue";

export const api = axios.create({
    baseURL: "https://sheetdb.io/api/v1/paghb9x9lijim"
});

function buildSheetUrl(sheetName) {
    return `?sheet=$${sheetName}`;
}

export const stockStore = defineStore("sheet", {
    state: () => ({
        data: {},
        companies: ["AAPL", "AMZN", "GOOG", "META", "MSFT", "NVDA", "TSLA"],
        loading: false,
        error: null
    }),
    actions: {
        async loadData() {
            this.loading = true;
            try {
                for (const company of this.companies) {
                    const res = await api.get(buildSheetUrl(company));
                    this.data[company] = this.formatData(toRaw(res.data));
                }
            } catch (err) {
                this.error = err;
            } finally {
                this.loading = false;
            }
        },

        formatData(data) {
            const obj = {
                revenue: {},
                grossMargin: {},
                netIncome: {}
            };

            obj.revenue = data[7];
            obj.grossMargin = data[21];
            obj.netIncome = data[34];
            console.log(obj);

            return obj;
        }
    }
});
