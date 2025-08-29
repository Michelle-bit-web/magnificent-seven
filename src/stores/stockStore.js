import { defineStore } from "pinia";
import axios from "axios";

export const api = axios.create({
    baseURL: "https://sheetdb.io/api/v1/paghb9x9lijim"
});

function buildSheetUrl(sheetName) {
    return `?sheet=$${sheetName}`;
}

export const stockStore = defineStore("sheet", {
    state: () => ({
        data: [],
        loading: false,
        error: null
    }),
    actions: {
        async loadData(sheetName) {
            this.loading = true;
            try {
                const res = await api.get(buildSheetUrl(sheetName));
                this.data = res.data;
                console.log(res.data, res);
            } catch (err) {
                this.error = err;
            } finally {
                this.loading = false;
            }
        }
    }
});
