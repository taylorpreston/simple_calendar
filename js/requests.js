import axios from "axios"
import { render } from "./index"
export function fetchDays() {
  return axios.get("http://localhost:3000/")
    .then(response => {
      debugger
      render(response.data)
    })
    .catch(err => {
      console.error("REQUEST ERROR:", err)
      return err
    })
}