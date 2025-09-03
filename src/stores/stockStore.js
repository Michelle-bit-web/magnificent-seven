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
        companies: [
            {
                company: "AAPL",
                name: "Apple",
                revRow: 7,
                netIncomeRow: 34,
                marginRow: 21
            },
            {
                company: "AMZN",
                name: "Amazon",
                revRow: 7,
                netIncomeRow: 39,
                marginRow: 13
            },
            {
                company: "GOOG",
                name: "Alphabet",
                revRow: 3,
                netIncomeRow: 47,
                marginRow: 13
            },
            {
                company: "META",
                name: "Meta",
                revRow: 3,
                netIncomeRow: 25,
                marginRow: 9
            },
            {
                company: "MSFT",
                name: "Microsoft",
                revRow: 7,
                netIncomeRow: 30,
                marginRow: 14
            },
            {
                company: "NVDA",
                name: "Nvidia",
                revRow: 3,
                netIncomeRow: 28,
                marginRow: 10
            },
            {
                company: "TSLA",
                name: "Tesla",
                revRow: 13,
                netIncomeRow: 46,
                marginRow: 27
            }
        ],
        loading: false,
        error: null
    }),
    actions: {
        async loadData() {
            this.loading = true;
            try {
                for (const companyData of this.companies) {
                    const res = await api.get(buildSheetUrl(companyData.company));
                    this.data[companyData.name] = this.formatData(toRaw(res.data));
                    console.log(toRaw(res.data));
                }
            } catch (err) {
                this.error = err;
            } finally {
                this.loading = false;
            }
        },

        formatData(data) {
            const obj = {
                quarter: {},
                revenue: {},
                grossMargin: {},
                netIncome: {}
            };

            obj.quarter = data[1];
            obj.revenue = data[7];
            obj.grossMargin = data[21];
            obj.netIncome = data[34];
            console.log(obj);

            return obj;
        }
    }
});
