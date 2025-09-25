import {defineStore} from "pinia";
import axios from "axios";
import {toRaw} from "vue";

export const api = axios.create({
    baseURL: "https://sheetdb.io/api/v1/paghb9x9lijim",
});

function buildSheetUrl(sheetName) {
    return `?sheet=$${sheetName}`;
}

function normalizeQuarterKey(key) {
  // Variante 1: Q1-24 oder Q1-2022
  let match = key.match(/(Q[1-4])[-_]?(\d{2,4})$/i);
  if (match) {
    const quarter = match[1].toUpperCase();
    let year = match[2];

    if (year.length === 2) {
      year = parseInt(year, 10);
      year = year < 50 ? 2000 + year : 1900 + year;
    }
    return `${year} ${quarter}`;
  }

  // Variante 2: 22Q3 oder 2022Q3
  match = key.match(/^(\d{2,4})[-_]?Q([1-4])$/i);
  if (match) {
    let year = match[1];
    const quarter = `Q${match[2]}`;

    if (year.length === 2) {
      year = parseInt(year, 10);
      year = year < 50 ? 2000 + year : 1900 + year;
    }
    return `${year} ${quarter}`;
  }

  // fallback
  return key;
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
                marginRow: 21,
            },
            {
                company: "AMZN",
                name: "Amazon",
                revRow: 7,
                netIncomeRow: 39,
                marginRow: 13,
            },
            {
                company: "GOOG",
                name: "Alphabet",
                revRow: 3,
                netIncomeRow: 47,
                marginRow: 13,
            },
            {
                company: "META",
                name: "Meta",
                revRow: 3,
                netIncomeRow: 25,
                marginRow: 9,
            },
            {
                company: "MSFT",
                name: "Microsoft",
                revRow: 7,
                netIncomeRow: 30,
                marginRow: 14,
            },
            {
                company: "NVDA",
                name: "Nvidia",
                revRow: 3,
                netIncomeRow: 28,
                marginRow: 10,
            },
            {
                company: "TSLA",
                name: "Tesla",
                revRow: 13,
                netIncomeRow: 46,
                marginRow: 27,
            },
        ],
        loading: false,
        error: null,
    }),
    actions: {
        async loadData() {
            this.loading = true;
            try {
                for (const companyData of this.companies) {
                    const res = await api.get(buildSheetUrl(companyData.company));
                    this.data[companyData.name] = this.formatData(
                        toRaw(res.data),
                        companyData.name,
                        companyData.revRow,
                        companyData.marginRow,
                        companyData.netIncomeRow
                    );
                }
            } catch (err) {
                this.error = err;
            } finally {
                this.loading = false;
            }
        },

        formatData(data, company, revRow, marginRow, netIncomeRow) {
            const quarterMap = data[[1]];
            const rev = data[revRow];
            const marg = data[marginRow];
            const income = data[netIncomeRow];
            const obj = {
                name: "",
                revenue: {},
                grossMargin: {},
                netIncome: {},
            };
            obj.name = company;
            Object.keys(quarterMap).forEach((key) => {
                const rawQuarter = quarterMap[key];
                const quarter = normalizeQuarterKey(rawQuarter);
                obj.revenue[quarter] = rev[key];
                obj.grossMargin[quarter] = marg[key];
                obj.netIncome[quarter] = income[key];
            });
            console.log(obj);
            return obj;
        },
    },
});
