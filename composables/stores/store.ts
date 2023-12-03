export const useStore = reactive({
  error: true,
  loading: true,
  setError(err: boolean) {
    this.error = err;
  },
  setLoading(loading: boolean) {
    this.loading = loading;
  },
});
