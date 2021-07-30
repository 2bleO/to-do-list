export default function store(key, arr) {
  window.localStorage.setItem(key, JSON.stringify(arr));
}