import axios from "axios"
import { render, renderError } from "./index"
export function fetchDays() {
  return axios.get("http://localhost:3000/")
    .then(response => {
      render(response.data)
    })
    .catch(err => {
      console.error("REQUEST ERROR:", err)
      renderError()
    })
}