import { defineStore } from "pinia";
import axios from "axios";

export const useSheetStore = defineStore("sheet", {
    state: () => ({
        data: [],
        loading: false,
        error: null,
    }),
    actions: {
        async loadData() {
            this.loading = true;
            try {
                const res = await axios.get("https://sheetdb.io/api/v1/paghb9x9lijim?sheet=$GOOG");
                this.data = res.data;
            } catch (err) {
                this.error = err;
            } finally {
                this.loading = false;
            }
        }
    }
});
